import { data } from "./data";
import logo from '../../images/logo.png';
import user1 from '../../images/user1.png';
import { RiSearch2Line } from "react-icons/ri";

export function Header() {
    return (
        <header className="bg-main px-5 p-3 flex justify-between items-center fixed top-0 left-0 right-0">
            <div className="flex justify-between items-center">
                <span className="w-10">
                    <img src={logo} alt="logo" />
                </span>
                <div className="relative w-full ml-2 sm:ml-8">
                    <input type="text" className="w-full p-1 pl-9 bg-[#2a2b30] rounded-md border-2 border-[#393b42]" placeholder="Search" />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <RiSearch2Line />
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center gap-4">
                {
                    data.map((item, index) => {
                        const { title, Icon } = item;
                        return (
                            <span key={index} title={title} className="hidden sm:inline-flex p-2 rounded-full bg-[#44454a] cursor-pointer">
                                <Icon color="#a6a8a7" size={16} />
                            </span>
                        )
                    })
                }
                <img src={user1} alt="avatar" width={32} height={32} className="ml-3 rounded-full bg-[#ffff] object-cover cursor-pointer" />
            </div>
        </header>
    )
}
