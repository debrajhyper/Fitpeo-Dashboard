import { data } from "./data";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

export function OrderCard() {
    return data.map((item, index) => {
        const { title, count, increaseValue, decreaseValue, Icon, iconColor, iconBgColor } = item;

        return (
            <div key={index} className="w-full flex flex-col gap-2 justify-start h-min items-start bg-main rounded-md p-4">
                <span title={title} className={`inline-flex p-2 rounded-lg ${iconBgColor} cursor-pointer`}>
                    <Icon color={iconColor} size={26} />
                </span>
                <h6 className="text-sm font-semibold">{title}</h6>
                <div className="w-full flex justify-between items-center mt-3">
                    <span className="text-3xl font-extrabold">{count}</span>
                    {increaseValue && <span className="inline-flex justify-center items-center text-[#01c98d] font-semibold"><TiArrowSortedUp />{increaseValue}%</span>}
                    {decreaseValue && <span className="inline-flex justify-center items-center text-[#f25e5e] font-semibold"><TiArrowSortedDown />{decreaseValue}%</span>}
                </div>
            </div>
        )
    });
}
