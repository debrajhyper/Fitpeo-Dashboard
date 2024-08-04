import { IoMdLogOut } from "react-icons/io";
import { data } from "./data";
export function SideBar() {
    return (
        <div className="fixed pt-[4.5rem] pb-10 bg-main h-screen w-12 sm:w-16 flex flex-col justify-between items-center">
            <div className="w-full flex flex-col justify-between items-center gap-8">
                {
                    data.map((item, index) => {
                        const { title, Icon } = item;
                        return (
                            <span key={index} title={title} className={`w-full inline-flex justify-center ${index === 0 ? 'border-l-2 border-[#7294ff]' : ''} p-2 cursor-pointer`}>
                                <Icon color={`${index === 0 ? '#7294ff' : '#a9a9ab'}`} size={26} />
                            </span>
                        )
                    })
                }
            </div>
            <IoMdLogOut color="#a9a9ab" size={21} cursor="pointer" title="Logout" />
        </div>
    )
}
