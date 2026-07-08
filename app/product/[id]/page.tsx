import { productSectionItems } from '@/data/data';
import ProductPage from '@/components/ProductPage';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return productSectionItems.map((item) => ({
        id: String(item.id),
    }));
}

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;
    const product = productSectionItems.find((item) => item.id === Number(id));

    if (!product) {
        notFound();
    }

    return (
        <ProductPage
            itemId={product.id}
            itemTitle={product.title}
            itemText={product.text}
            itemImages={product.img}
            itemPrice={product.price}
        />
    );
}
