import { data } from "./data";
import { FaChevronRight } from "react-icons/fa";

export function OptionAside() {
    return (
        <div className="w-full h-full col-span-full md:col-span-2 xl:col-span-3 xl:ml-5 bg-main rounded-md p-4 xl:p-6 flex gap-2 flex-col justify-between items-center">
            {
                data.map((item, index) => {
                    const { title, Icon, iconColor, iconBgColor } = item;
                    return (
                        <div key={index} className="w-full flex justify-between items-center gap-3 cursor-pointer">
                            <span title={title} className={`inline-flex p-3 md:p-2 xl:p-5 rounded-full ${iconBgColor}`}>
                                <Icon color={iconColor} size={26} />
                            </span>
                            <h6 className="text-lg w-full">{title}</h6>
                            <span className="p-1 xl:p-2 bg-[#47484d] rounded-full">
                                <FaChevronRight />
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}
