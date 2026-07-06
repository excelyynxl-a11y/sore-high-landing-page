import { Instagram, Mail, type LucideIcon } from "lucide-react";

export const navItems = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 3,
    label: "Product",
    href: "#products",
  },
  {
    id: 4,
    label: "Contact",
    href: "#contact",
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
]; 


type Contact = {
  id: number;
  name: string;
  link: string;
  icon: LucideIcon;
}; 

export const contacts: Contact[] = [
  {
    id: 1,
    name: "@sorehigh__",
    link: "https://www.instagram.com/sorehigh__/",
    icon: Instagram,
  },
  {
    id: 2,
    name: "@aziz_moham3d",
    link: "https://www.instagram.com/aziz_moham3d/",
    icon: Instagram,
  }, 
  {
    id: 3,
    name: "aziz_email@gmail.com",
    link: "",
    icon: Mail,
  }, 
];
