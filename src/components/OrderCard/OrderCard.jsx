import { data } from "./data";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

/**
 * OrderCard component renders a card for each item in the data array.
 * The card displays the title, count, and percentage change of the item.
 * The component returns an array of JSX elements.
 */
export function OrderCard() {
    return data.map((item, index) => { // Map through the data array
        const { title, count, increaseValue, decreaseValue, Icon, iconColor, iconBgColor } = item; // Destructure the item object

        {/* Main card container */ }
        return (
            <div key={index} className="w-full flex flex-col gap-2 justify-start h-min items-start bg-main rounded-md p-4">
                {/* Icon container */}
                <span title={title} className={`inline-flex p-2 rounded-lg ${iconBgColor} cursor-pointer`}>
                    {/* Render the Icon with specified color and size */}
                    <Icon color={iconColor} size={26} />
                </span>
                {/* Render the title */}
                <h6 className="text-sm font-semibold">{title}</h6>
                {/* Container for the count and percentage change */}
                <div className="w-full flex justify-between items-center mt-3">
                    {/* Render the count */}
                    <span className="text-3xl font-extrabold">{count}</span>
                    {/* Render the increase percentage change */}
                    {increaseValue && <span className="inline-flex justify-center items-center text-[#01c98d] font-semibold"><TiArrowSortedUp />{increaseValue}%</span>}
                    {/* Render the decrease percentage change */}
                    {decreaseValue && <span className="inline-flex justify-center items-center text-[#f25e5e] font-semibold"><TiArrowSortedDown />{decreaseValue}%</span>}
                </div>
            </div>
        )
    });
}