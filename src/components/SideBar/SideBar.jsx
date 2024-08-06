import { IoMdLogOut } from "react-icons/io";
import { data } from "./data";

/**
 * SideBar component renders the sidebar of the dashboard.
 * It maps through the data array and renders a span for each item.
 * Each span contains an icon and a title.
 * The component also renders a logout button.
 * The component returns the rendered sidebar as JSX.
 */
export function SideBar() {
    return (
        <div className="fixed pt-[4.5rem] pb-10 bg-main h-screen w-12 sm:w-16 flex flex-col justify-between items-center">
            {/* Container for the sidebar items */}
            <div className="w-full flex flex-col justify-between items-center gap-4 md:gap-8">
                {
                    data.map((item, index) => { // Map through the data array
                        const { title, Icon } = item; // Destructure the item object
                        return (
                            <span key={index} title={title} className={`w-full inline-flex justify-center ${index === 0 ? 'border-l-2 border-[#7294ff]' : ''} p-2 cursor-pointer`}>
                                {/* Render the Icon with specified color and size */}
                                <Icon color={`${index === 0 ? '#7294ff' : '#a9a9ab'}`} size={26} />
                            </span>
                        )
                    })
                }
            </div>
            {/* Logout button */}
            <IoMdLogOut color="#a9a9ab" size={21} cursor="pointer" title="Logout" />
        </div>
    )
}