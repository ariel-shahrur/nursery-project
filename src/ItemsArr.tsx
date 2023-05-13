import logo from './logo.png'
import outdoorIconHome from './outdoorIconHome.jpg'
import indoorIconForHome from './indoorIconForHome.png'
import scullantIconForHome from './scullantIconForHome.png'
import bulbIconHome from './bulbIconHome.jpg'
import ShrubIconHome from './ShrubIconHome.jpg'
export const navItem = [
    {
        displayStr: <img src={logo} alt="" />,
        hrefStr: "/",
        key:"1"
    },
    {
        displayStr: "Home",
        hrefStr: "/",
        key:"2"
    },
    {
        displayStr: "Shop",
        hrefStr: "/shop",
        key:"3"
    },
    {
        displayStr: "Gallery",
        hrefStr: "/gallery",
        key:"4"
    },
    {
        displayStr: "Wish List",
        hrefStr: "/wishList",
        key:"5"
    },
    {
        displayStr: "Contact",
        hrefStr: "/contactus",
        key:"6"
    },
    {
        displayStr: "Cart",
        hrefStr: "/cart",
        key:"7"
    }
];

export const typeSElectBoxArr=[
    {
        value:"all",
        displayStr:"all",
        imgUrl:""
    },
    {
        value:"Indoor",
        displayStr:"Indoor",
        imgUrl:<img src={indoorIconForHome} alt="" />
    },
    {
        value:"Outdoor",
        displayStr:"Outdoor",
        imgUrl:<img src={outdoorIconHome} alt="" />
    },{
        value:"Succulent",
        displayStr:"Succulent",
        imgUrl:<img src={scullantIconForHome} alt="" />
    },{
        value:"bulb",
        displayStr:"bulb",
        imgUrl:<img src={bulbIconHome} alt="" />
    },{
        value:"Shrub",
        displayStr:"Shrub",
        imgUrl:<img src={ShrubIconHome} alt="" />
    },
    
]

export const lightingSelectBoxArr=[
    {
        value:"0",
        displayStr:"Click to choose"
    },
    {
        value:"1",
        displayStr:"full sun to partial shade"
    },
    {
        value:"2",
        displayStr:"indirect light"
    },{
        value:"3",
        displayStr:"Full Sun"
    },{
        value:"4",
        displayStr:"Low to Bright"
    }
]

export const seasonSelectBoxArr=[
    {
        value:"0",
        displayStr:"Click to choose"
    },
    {
        value:"1",
        displayStr:"Spring"
    },
    {
        value:"2",
        displayStr:"Summer"
    },{
        value:"3",
        displayStr:"Autumn"
    },{
        value:"4",
        displayStr:"Winter"
    },
    {
        value:"5",
        displayStr:"All-Year"
    }
]