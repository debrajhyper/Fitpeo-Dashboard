import { BsCashCoin } from "react-icons/bs";
import { GiShoppingBag } from "react-icons/gi";
import { FaShoppingBasket } from "react-icons/fa";

export const data = [
    {
        title: 'Total Orders',
        count: '75',
        increaseValue: 3,
        Icon: FaShoppingBasket,
        iconColor: '#4060fc',
        iconBgColor: 'bg-[#2a3469]'
    },
    {
        title: 'Total Delivered',
        count: '70',
        decreaseValue: 3,
        Icon: GiShoppingBag,
        iconColor: '#01c98d',
        iconBgColor: 'bg-[#165246]'
    },
    {
        title: 'Total Canceled',
        count: '05',
        increaseValue: 3,
        Icon: GiShoppingBag,
        iconColor: '#f25e5e',
        iconBgColor: 'bg-[#5f3237]'
    },
    {
        title: 'Total Revenue',
        count: '$12k',
        decreaseValue: 3,
        Icon: BsCashCoin,
        iconColor: '#e83f99',
        iconBgColor: 'bg-[#5b2a4a]'
    }
]