import logo from '../homePageImg/logo.png'
import outdoorIconHome from '../homePageImg/outdoorIconHome.jpg'
import indoorIconForHome from '../homePageImg/indoorIconForHome.png'
import scullantIconForHome from '../homePageImg/scullantIconForHome.png'
import bulbIconHome from '../homePageImg/bulbIconHome.jpg'
import ShrubIconHome from '../homePageImg/ShrubIconHome.jpg'
export const navItem = [
    {
        displayStr: <img src={logo} alt="" />,
        hrefStr: "/",
        key: "1"
    },
    {
        displayStr: "Home",
        hrefStr: "/",
        key: "2"
    },
    {
        displayStr: "Shop",
        hrefStr: "/shop",
        key: "3"
    },
    {
        displayStr: "Gallery",
        hrefStr: "/gallery",
        key: "4"
    },
    // {
    //     displayStr: "Wish List",
    //     hrefStr: "/wishList",
    //     key: "5"
    // },
    {
        displayStr: "Contact",
        hrefStr: "/contactus",
        key: "6"
    },
    {
        displayStr: "Log in",
        hrefStr: "/login",
        key: "7"
    },
    {
        displayStr: "Cart",
        hrefStr: "/cart",
        key: "8"
    }
];

export const typeSElectBoxArr = [
    {
        value: "all",
        displayStr: "All",
        imgUrl: "",
        key: "1",
        link: "/shop"
    },
    {
        value: "Indoor",
        displayStr: "Indoor",
        imgUrl: <img src={indoorIconForHome} alt="" />,
        key: "2",
        link: "/shop/Indoor"
    },
    {
        value: "Outdoor",
        displayStr: "Outdoor",
        imgUrl: <img src={outdoorIconHome} alt="" />,
        key: "3",
        link: "/shop/outdoor"
    }, {
        value: "Succulent",
        displayStr: "Succulent",
        imgUrl: <img src={scullantIconForHome} alt="" />,
        key: "4",
        link: "/shop/Succulent"
    }, {
        value: "Bulb",
        displayStr: "Bulb",
        imgUrl: <img src={bulbIconHome} alt="" />,
        key: "5",
        link: "/shop/bulb"
    }, {
        value: "Shrub",
        displayStr: "Shrub",
        imgUrl: <img src={ShrubIconHome} alt="" />,
        key: "6",
        link: "/shop/Shrub"
    },

]

export const lightingSelectBoxArr = [
    {
        value: "0",
        displayStr: "Click to choose"
    },
    {
        value: "1",
        displayStr: "full sun to partial shade"
    },
    {
        value: "2",
        displayStr: "indirect light"
    }, {
        value: "3",
        displayStr: "Full Sun"
    }, {
        value: "4",
        displayStr: "Low to Bright"
    }
]

export const seasonSelectBoxArr = [
    {
        value: "all",
        displayStr: "all",
        key: "0"
    },
    {
        value: "Spring",
        displayStr: "Spring",
        key: "1"
    },
    {
        value: "Summer",
        displayStr: "Summer",
        key: "2"
    }, {
        value: "Autumn",
        displayStr: "Autumn",
        key: "3"
    }, {
        value: "Winter",
        displayStr: "Winter",
        key: "4"
    }
]