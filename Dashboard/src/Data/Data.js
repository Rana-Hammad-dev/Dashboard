import { UilEstate, UilClipboardAlt, UilUser, UilPackage, UilChart, UilUsdSquare, UilMoneyWithdrawal } from '@iconscout/react-unicons'
import 'react-circular-progressbar/dist/styles.css';

import img1 from "../../public/img1.png";
import img2 from "../../public/img2.png";
import img3 from "../../public/img3.png";


export const sidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard"
    },
    {
        icon: UilClipboardAlt,
        heading: "Orders"
    },
    {
        icon: UilUser,
        heading: "Customers"
    },
    {
        icon: UilPackage,
        heading: "Products"
    },
    {
        icon: UilChart,
        heading: "Analytics"
    },
];


export const cardsData = [
    {
        title: "Sales",
        color: {
            background: "linear-gradient(180deg, #88a2ff)",
            boxShadow: "0px 10px 20px 0px #b2c2fbff"
        },
        barValue: 70,
        value: "25,970",
        png: UilUsdSquare,
        series: [
            {
                name: "Sales",
                data: [30, 40, 57, 66, 44, 100, 94],
            }
        ]
    },
    {
        title: "Revenue",
        color: {
            background: "linear-gradient(180deg, #ffb2f7)",
            boxShadow: "0px 10px 20px 0px #f8ccf4ff"
        },
        barValue: 80,
        value: "14,270",
        png: UilMoneyWithdrawal,
        series: [
            {
                name: "Revenue",
                data: [53, 19, 47, 73, 81, 91, 72],
            }
        ]
    },
    {
        title: "Expenses",
        color: {
            background: "linear-gradient(180deg, orange)",
            boxShadow: "0px 10px 20px 0px #d0c293ff"
        },
        barValue: 60,
        value: "4,270",
        png: UilClipboardAlt,
        series: [
            {
                name: "Expenses",
                data: [10, 90, 27, 92, 82, 71, 21],
            }
        ]
    }
]

export const UpdatesData = [
    {
        img: img1,
        name: "Andrew Thomas",
        noti: "has ordered Apple smart watch 2500mh battery.",
        time: "25 seconds ago",
    },
    {
        img: img2,
        name: "James Bond",
        noti: "has received Samsung gadget for charging battery.",
        time: "30 minutes ago",
    },
    {
        img: img3,
        name: "Iron Man",
        noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
        time: "2 hours ago",
    },
];