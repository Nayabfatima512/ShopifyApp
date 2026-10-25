import { faBuilding, faBullseye, faHouse, faPercent, faInbox, faUser, faTag, faImage, faChartSimple, faGear } from '@fortawesome/free-solid-svg-icons';
import shopIcon from '../assets/shop.png'
import shopifyIcon from '../assets/shopify.png'
import storeIcon from '../assets/store.png'
import vidifyIcon from '../assets/VidifyLogo.png'
import AiVideoImage from '../assets/VideoImage.jpg'
import dontIcon from '../assets/dotIcon.png'
import videoIcon from '../assets/videoIcon.png'
import sCallImage from '../assets/callimage.png'
import phoneIcon from '../assets/PhoneMajor.png'
import Ebook from '../assets/shopifyebook.png'
import Documentation from '../assets/documentIcon.png'
import supportIcon from '../assets/helplineIcon.png'
import barIcon from '../assets/baricon.png'
import ArrowIcon from '../assets/leftArrow.png'
import appImage1 from '../assets/appImage1.png'
import appImage2 from '../assets/appImage2.png'
import appImage3 from '../assets/appImage3.png'
import appImage4 from '../assets/appImage4.png'

//Table data Images 
import tableImage1 from '../assets/TImage1.svg'
import tableImage2 from '../assets/TImage2.svg'
import tableImage3 from '../assets/TImage3.svg'
import tableImage4 from '../assets/TImage4.svg'
import tableImage5 from '../assets/TImage5.svg'
import tableImage6 from '../assets/TImage6.svg'
import tableImage7 from '../assets/TImage7.svg'
import tableImage8 from '../assets/TImage8.svg'
import tableImage9 from '../assets/TImage9.svg'
import tableImage10 from '../assets/TImage10.svg'
import tableImage11 from '../assets/TImage11.svg'
import tableImage12 from '../assets/TImage12.svg'






export const menuItemList = [
    {
        name: "Home",
        icon: faHouse
    },
    {
        name: "Orders",
        icon: faInbox
    },
    {
        name: "Products",
        icon: faTag
    },
    {
        name: "Customer",
        icon: faUser
    },
    {
        name: "Content",
        icon: faImage
    },
    {
        name: "Finances",
        icon: faBuilding
    },
    {
        name: "Analytics",
        icon: faChartSimple
    },
    {
        name: "Marketing",
        icon: faBullseye
    },
    {
        name: "Discounts",
        icon: faPercent
    }
]


export const channels = [
    { label: 'Online Store', icon: storeIcon ,to:"/onlinestore" },
    { label: 'Point of Sale', icon: shopifyIcon,to:"/sale" },
    { label: 'Shop', icon: shopIcon,to:"/shop" },
]
export const apps = [
    { label: 'Vidify', icon: vidifyIcon, to:"/vidifyhome"  },
    { label: 'Generate Video', to:"/videogenerator" },
    { label: 'Subscription Plan',to:"/subcriptionPlan" },
]
export const planInfo = [
    { planName: 'Explorer', used: 1, limit: 2 },
    { planName: 'Scale', used: 35, limit: 40 }

]

export const AiVG = {
    title: 'Generate Stunning AI-Videos from Product Images',
    icon: dontIcon,
    Img: AiVideoImage,
    content: "Turn your product images into scroll-stopping marketing videos in seconds. Just upload images; we'll add dynamic animations and effects for a high-converting result.",
    btnIcon: videoIcon,
    btntext: 'Generate AI Video',
}

export const ScheduleCall = {
    title: 'Want to schedule a call?',
    icon: dontIcon,
    Img: sCallImage,
    content: " We have marketing experts ready to help build your video marketing strategy and guide you in scaling your store with video. Want to book a one-to-one session? It’s FREE!",
    btnIcon: phoneIcon,
    btntext: 'Talk to Vidify Expert',
}

export const getEbook = {
    title: 'Get our free Shopify SEO guide',
    icon: dontIcon,
    Img: Ebook,
    content: "Grab your copy today & discover the secrets to optimizing your Shopify store for search engines",
    btntext: 'Get the Free eBook',
}


export const helpLinks = [
    {
        title: 'Documentation',
        description: 'Read our step-by-step guidelines to explore and master every Vidify feature.',
        icon: Documentation,
        color: '#1f8a5b',
        arrow: ArrowIcon

    },
    {
        title: 'Support',
        description: 'Our team is always ready to help reach out anytime to solve any issue.',
        icon: supportIcon,
        color: '#8a8a00',
        arrow: ArrowIcon
    },
    {
        title: 'Vidify Walkthrough',
        description: 'Book a session with our experts and learn how to get the most out of Vidify.',
        icon: barIcon,
        color: '#7c4dff',
        arrow: ArrowIcon
    },
]





export const storeApps = [
    {
        id: 1,
        image: appImage1,
        title: `BetterDocs for Shopify – Advanced Knowledge Base App`,
        description: 'Boost customer satisfaction with an efficient AI-enhanced knowledge base & FAQ system. Build smart documentation and reduce support load effortlessly.',
        points: [
            'Create high-performing docs & FAQs with Magic AI AutoWrite',
            'Enable Live Chat & Instant Answers for seamless customer support',
            'Customize your knowledge base with intuitive design options',
            'Track performance with in-depth analytics',
        ],
        btnText: 'Get Started',
    },
    {
        id: 2,
        image: appImage2,
        title: 'EasyFlow Product Options',
        description: "EasyFlow is a Shopify app designed to enhance product customization and streamline the management of product options for online stores." ,
        points: [
            "Allows customers to personalize products with text, images, and more", 
            "Dynamically shows or hides options based on customer selections", 
            "Customers can upload files for personalized products",
            "Centralized management of all product options and variants"
        ],
        btnText: 'Get Started',
    },
    {
        id: 3,
        image: appImage3,
        title: 'TrustSync - Review Collection App',
        description: 'Boost your business reputation by collecting reviews for Google Review, Trustpilot, Etsy & more while filtering out negative ratings.',
        points: [
            "Collect customers' reviews via review collection emails",
            "Auto-publish reviews on popular platforms", 
            "Review Settings & Email Configurations",
            "Manage Negative Feedback while filtering out low ratings"],
        btnText: 'Get Started',
    },
    {
        id: 4,
        image: appImage4,
        title: 'StoreSEO - AI SEO Agent',
        description: "StoreSEO is an AI-powered Shopify app to boost your store’s search engine rankings and organic traffic through AI SEO optimization.",
        points: [
            "Improve ranking in search engines with Product SEO Optimizer & Blog SEO.",
            "Generate meta title, description, and tag with AI.",
            "AI Image Optimizer, Resizer Compressor and boost page speed & alt text image.",
            "Local SEO updates, Schema markup, Sitemaps & LLMs.txt for organic ranking boost"
        ],
        btnText: 'Get Started',
    },
]


// Table images

export const tableData = [
  { id: 1,  image: tableImage1,  name: 'stylish-summer-necklace',   images: 3, status: 'Active', stock: 0,   variants: 50, progress: 'Not Generated' },
  { id: 2,  image: tableImage2,  name: 'threader-necklace-closeup', images: 5, status: 'Active', stock: 360, progress: 'In Progress' },
  { id: 3,  image: tableImage3,  name: 'silver-threader-necklace',  images: 2, status: 'Draft',  stock: 120, progress: 'Not Generated' },
  { id: 4,  image: tableImage4,  name: 'silver-threader-necklace',  images: 2, status: 'Active', stock: 120, progress: 'In Progress' },
  { id: 5,  image: tableImage5,  name: 'threader-necklace-closeup', images: 2, status: 'Active', stock: 120, progress: 'Completed' },
  { id: 6,  image: tableImage6,  name: 'silver-threader-necklace',  images: 2, status: 'Active', stock: 120, progress: 'Completed' },
  { id: 7,  image: tableImage7,  name: 'silver-threader-necklace',  images: 2, status: 'Active', stock: 120, progress: 'Completed' },
  { id: 8,  image: tableImage8,  name: 'stylish-summer-necklace',   images: 2, status: 'Active', stock: 120, progress: 'Completed' },
  { id: 9,  image: tableImage9,  name: 'threader-necklace-closeup', images: 2, status: 'Active', stock: 120, progress: 'Completed' },
  { id: 10, image: tableImage10, name: 'silver-threader-necklace',  images: 2, status: 'Active', stock: 120, progress: 'Completed' },
  { id: 11, image: tableImage11, name: 'silver-threader-necklace',  images: 2, status: 'Active', stock: 120, progress: 'Completed' },
  { id: 12, image: tableImage12, name: 'silver-threader-necklace',  images: 2, status: 'Active', stock: 120, progress: 'Completed' },
]

// subcription plan data
export const plans = [
  
  {
    id: "creator",
    name: "Creator",
    price: 20,
    videosPerMonth: 20,
    description: "20 videos per month",
    buttonLabel: "Choose Creator Plan",
    highlighted: false,
  },
  {
    id: "scale",
    name: "Scale",
    price: 40,
    videosPerMonth: 40,
    description: "40 videos per month",
    buttonLabel: "Choose Scale Plan",
    highlighted: true, // dark primary button
  },
  {
    id: "mastery",
    name: "Mastery",
    price: 60,
    videosPerMonth: 60,
    description: "60 videos per month",
    buttonLabel: "Choose Mastery Plan",
    highlighted: false,
  },
];