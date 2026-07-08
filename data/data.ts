import { Backpack, Camera, Code, Mail, Phone, type LucideIcon } from "lucide-react";

export const navItems = [
  {
    id: 1,
    label: "Home",
    sectionId: "",
  },
  {
    id: 3,
    label: "Product",
    sectionId: "products",
  },
  {
    id: 4,
    label: "Contact",
    sectionId: "contact",
  },
]; 

export const productSectionItems = [
  {
    id: 1,
    title: "Comfort Kills Dream",
    text: "Remember why you started. Kill that comfort within you.",
    img: [
        "/images/ComfortKillsDreams/comfort_kills_dreams.png",
        "/images/ComfortKillsDreams/comfort_kills_dreams.png",
        "/images/ComfortKillsDreams/comfort_kills_dreams.png",
        "/images/ComfortKillsDreams/comfort_kills_dreams.png",
        "/images/ComfortKillsDreams/comfort_kills_dreams.png",
    ],
    price: 100
  },
  {
    id: 2,
    title: "Cardio Is Hardio",
    text: "Nothing is easy. Get up and grind now.",
    img: [
        "/images/CardioIsHardio/cardio_is_hardio.png",
        "/images/CardioIsHardio/cardio_is_hardio_mint_black.png",
        "/images/CardioIsHardio/cardio_is_hardio_crop_back.png",
        "/images/CardioIsHardio/cardio_is_hardio_crop_front.png",
        "/images/CardioIsHardio/cardio_is_hardio.png",
    ],
    price: 100
  },
  {
    id: 3,
    title: "Murph 2026",
    text: "1.6km - 100 pull ups - 200 push up - 300 squats - 1.6km. Classic favourite.",
    img: [
        "/images/Murph2026/murph2026.png",
        "/images/Murph2026/murph2026.png",
        "/images/Murph2026/murph2026.png",
        "/images/Murph2026/murph2026.png",
        "/images/Murph2026/murph2026.png",
    ],
    price: 100
  },
  {
    id: 4,
    title: "Out Of Office (OOOF)",
    text: "Gng, let's get out of office and get some sunlight.",
    img: [
        "/images/OOOF/ooof.png",
        "/images/OOOF/ooof.png",
        "/images/OOOF/ooof.png",
        "/images/OOOF/ooof.png",
        "/images/OOOF/ooof.png",
    ],
    price: 100
  },
  {
    id: 5,
    title: "What Your Shoe Says About You",
    text: "Is your shoe cool enough to join the club?",
    img: [
        "/images/ShoeSaysAboutYou/shoes_says_about_you.png",
        "/images/ShoeSaysAboutYou/shoes_says_about_you_brown.png",
        "/images/ShoeSaysAboutYou/shoes_says_about_you_gray.png",
        "/images/ShoeSaysAboutYou/shoes_says_about_you_orange.png",
        "/images/ShoeSaysAboutYou/shoes_says_about_you_crop.png",
    ],
    price: 100
  },
  {
    id: 6,
    title: "Sore Running Club",
    text: "Together we run, together we sore. This is community.",
    img: [
        "/images/SoreRunningClub/sore_running_club.png",
        "/images/SoreRunningClub/sore_running_club_white.png",
        "/images/SoreRunningClub/sore_running_club.png",
        "/images/SoreRunningClub/sore_running_club_white.png",
        "/images/SoreRunningClub/sore_running_club.png",
    ],
    price: 100
  },
  {
    id: 7,
    title: "Kelab Jasmani",
    text: "Pukul Pendidikan Jasmani dah sampai yahoo!",
    img: [
        "/images/KelabJasmani/kelab_jasmani_black_white.png",
        "/images/KelabJasmani/kelab_jasmani_white_black.png",
    ],
    price: 100
  },
]; 


type Contact = {
  id: number;
  name: string;
  link: string;
  icon: LucideIcon;
}; 




export const testimonialItems = [
  {
    id: 1,
    img: "/images/Testimonial/yassin.png",
    name: "Yassin",
    role: "Everyday athlete",
    product: "WEight LIFTing",
    instagramHandle: "@yassinmnoor",
    instagramLink: "https://www.instagram.com/yassinmnoor/",
    desc: "Dua biskut telur dua biskut telur dua biskut telur dua biskut telur dua biskut telur. Dua biskut telur dua biskut telur dua biskut telur dua biskut telur dua biskut telur.",
  },
  {
    id: 2,
    img: "/images/Testimonial/xinhui.png",
    name: "Ah Hui",
    role: "Kaki Mabuk",
    product: "Train Today Move Forever",
    instagramHandle: "@ismehui",
    instagramLink: "https://www.instagram.com/ismehui/",
    desc: "Dua biskut telur dua biskut telur dua biskut telur dua biskut telur dua biskut telur. Dua biskut telur dua biskut telur dua biskut telur dua biskut telur dua biskut telur.",
  },
  {
    id: 3,
    img: "/images/Testimonial/grace.png",
    name: "Grace",
    role: "Pro Dodgeball Player",
    product: "Run Your Own Race",
    instagramHandle: "@qqiantongg",
    instagramLink: "https://www.instagram.com/qqiantongg/",
    desc: "Dua biskut telur dua biskut telur dua biskut telur dua biskut telur dua biskut telur. Dua biskut telur dua biskut telur dua biskut telur dua biskut telur dua biskut telur.",
  },
  {
    id: 4,
    img: "/images/Testimonial/ck.png",
    name: "CK",
    role: "Everyday Athlete",
    product: "Eat Your Greens",
    instagramHandle: "@ckchok7",
    instagramLink: "https://www.instagram.com/ckchok7/",
    desc: "Dua biskut telur dua biskut telur dua biskut telur dua biskut telur dua biskut telur. Dua biskut telur dua biskut telur dua biskut telur dua biskut telur dua biskut telur.",
  },
  { 
    id: 5,
    img: "/images/Testimonial/aziz.png",
    name: "Aziz",
    role: "CTBB Head Coach",
    product: "Lifting Dept.",
    instagramHandle: "@aziz_moham3d",
    instagramLink: "https://www.instagram.com/aziz_moham3d/",
    desc: "Dua biskut telur dua biskut telur dua biskut telur dua biskut telur dua biskut telur. Dua biskut telur dua biskut telur dua biskut telur dua biskut telur dua biskut telur.",
  },
  { 
    id: 6,
    img: "/images/Testimonial/kangyong.png",
    name: "Bryan",
    role: "Everyday Athlete",
    product: "Im Fine",
    instagramHandle: "@kanggyonggggg",
    instagramLink: "https://www.instagram.com/kanggyonggggg/",
    desc: "Dua biskut telur dua biskut telur dua biskut telur dua biskut telur dua biskut telur. Dua biskut telur dua biskut telur dua biskut telur dua biskut telur dua biskut telur.",
  },

];

export const faqItems = [
  {
    id: 1,
    question: "How do i order a shirt?",
    answer: "Dm Aziz duh u dumbass."
  },
  {
    id: 2,
    question: "Is there crop option?",
    answer: "Dm Aziz duh u dumbass."
  },
  {
    id: 3,
    question: "Can i customize my unique design?",
    answer: "Dm Aziz duh u dumbass."
  },
  {
    id: 4,
    question: "Is there pick-up or shipping option?",
    answer: "Dm Aziz duh u dumbass."
  },
  {
    id: 5,
    question: "What material are these TShirt made of?",
    answer: "Dm Aziz duh u dumbass."
  },
  {
    id: 6,
    question: "How do i make my payment?",
    answer: "Dm Aziz duh u dumbass."
  },

];

// for reference only
export const sorehighContacts = [
  { 
    id: 1,
    contactType: "instagram",
    name: "@sorehigh__",
    link: "https://www.instagram.com/sorehigh__/",
  },
  {
    id: 2,
    contactType: "instagram",
    name: "@aziz_moham3d",
    link: "https://www.instagram.com/aziz_moham3d/",
  }, 
  {
    id: 3,
    contactType: "email",
    // name: "aziz_email@gmail.com",
    name: "isz_ue@yahoo.com",
    link: "mailto:aziz_email@gmail.com",
  }, 
  {
    id: 4,
    contactType: "Whatsapp",
    name: "60193709781 (Aziz)",
    link: "https://wa.me/60193709781",
  },
]; 

export const workedWithParties = [
  {
    id: 1,
    label: "Sore High",
    img: "/images/SoreHighLogo/sore_high_logo.png",
    link: "#",
  },
  {
    id: 2,
    label: "Crossfit Train by Blackbox",
    img: "/images/SoreHighLogo/ctbb_logo.png",
    link: "https://www.crossfittrainblackbox.com/",
  },
  {
    id: 3,
    label: "Out Of Office Run Club",
    img: "/images/SoreHighLogo/ooof_logo.png",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfSXCzLfXp0fBXFeKRBJ_rYCujT8bCzC87cbZrvvGbmh3MTww/viewform?pli=1",
  },
];

export const excelContacts = [
  {
    id: 1,
    name: "Instagram",
    link: "https://www.instagram.com/excel_is_ex/",
  },
  {
    id: 2,
    name: "Portfolio",
    link: "https://my-portfolio-pi-sand-52.vercel.app/",
  }, 
  {
    id: 3,
    name: "Email",
    link: "mailto:excelyynxl@gmail.com",
  },
  {
    id: 4,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/excelyynx-lim-177973304/",
  },
  {
    id: 5,
    name: "Whatsapp",
    link: "https://wa.me/601128805868",
  },
  {
    id: 6,
    name: "Github",
    link: "https://github.com/excelyynxl-a11y",
  },
];
