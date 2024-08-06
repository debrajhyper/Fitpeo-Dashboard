import { TiArrowSortedUp } from "react-icons/ti";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';

export function ProfitCard() {
    return (
        <div className="w-full h-full col-span-full md:col-span-2 xl:col-span-3 xl:ml-5 inline-grid grid-cols-2 grid-rows-[auto_auto_auto] justify-center items-start bg-main rounded-md p-4">
            <p>Net profit</p>
            <div className="col-span-1 row-span-3 w-full h-full flex flex-col justify-between items-center text-center">
                <div className="w-[6.4rem]">
                    <CircularProgressbarWithChildren
                        value={70}
                        strokeWidth={14}
                        styles={buildStyles({
                            pathColor: '#7192fa',
                            textColor: 'white',
                            trailColor: '#2a3468',
                            backgroundColor: '#3e98c7',
                        })}>
                        <span className="text-center px-10 pt-2">
                            <h4 className="text-xl font-bold">70%</h4>
                            <p className="text-[0.5rem] leading-3">
                                Goal
                                Completed
                            </p>
                        </span>
                    </CircularProgressbarWithChildren >
                </div>
                <p className="text-[0.5rem] mt-1 sm:text-xs">*The values here has been rounded off.</p>
            </div>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold whitespace-nowrap">$ 6759.25</h1>
            <span className="h-min self-end inline-flex justify-start items-center text-[#6dec54] font-semibold"><TiArrowSortedUp /> 3%</span>
        </div>
    )
}
