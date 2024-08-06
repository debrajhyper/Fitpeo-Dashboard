import { TiArrowSortedUp } from "react-icons/ti";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';

/**
 * ProfitCard component displays the net profit of the business.
 * It includes a circular progress bar to show the goal completion percentage.
 * The component also displays the current net profit value and the percentage change.
 */
export function ProfitCard() {
    return (
        // Main container for the ProfitCard component
        <div className="w-full h-full col-span-full md:col-span-2 xl:col-span-3 xl:ml-5 inline-grid grid-cols-2 grid-rows-[auto_auto_auto] justify-center items-start bg-main rounded-md p-4">
            {/* Display the title of the ProfitCard */}
            <p>Net profit</p>
            {/* Container for the circular progress bar and the percentage change */}
            <div className="col-span-1 row-span-3 w-full h-full flex flex-col justify-between items-center text-center">
                {/* Circular progress bar */}
                <div className="w-[6.4rem]">
                    <CircularProgressbarWithChildren
                        value={70} // Set the goal completion percentage
                        strokeWidth={14} // Set the stroke width of the progress bar
                        styles={buildStyles({
                            pathColor: '#7192fa', // Set the color of the progress bar
                            textColor: 'white', // Set the color of the text inside the progress bar
                            trailColor: '#2a3468', // Set the color of the background of the progress bar
                            backgroundColor: '#3e98c7', // Set the color of the container of the progress bar
                        })}>
                        {/* Container for the text inside the circular progress bar */}
                        <span className="text-center px-10 pt-2">
                            {/* Display the goal completion percentage */}
                            <h4 className="text-xl font-bold">70%</h4>
                            {/* Display the message for the goal completion */}
                            <p className="text-[0.5rem] leading-3">
                                Goal
                                Completed
                            </p>
                        </span>
                    </CircularProgressbarWithChildren >
                </div>
                {/* Display the message for the rounded off values */}
                <p className="text-[0.5rem] mt-1 sm:text-xs">*The values here has been rounded off.</p>
            </div>
            {/* Display the current net profit value */}
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold whitespace-nowrap">$ 6759.25</h1>
            {/* Display the percentage change */}
            <span className="h-min self-end inline-flex justify-start items-center text-[#6dec54] font-semibold"><TiArrowSortedUp /> 3%</span>
        </div>
    )
}