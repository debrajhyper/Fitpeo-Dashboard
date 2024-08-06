import './style.css';
import { data } from "./data";
import { ReviewStars } from "./ReviewStars";

/**
 * Feedback component displays customer feedback
 * It maps over the data array and renders a div for each item
 * Each div contains the customer's image, name, star rating, and feedback
 * @returns {JSX.Element} The Feedback component
 */
export function Feedback() {
    return (
        <div id="feedback" className="w-full h-min col-span-full md:col-span-2 xl:col-span-3 order-9 xl:ml-5 bg-main rounded-md p-5 pr-1 pb-0">
            {/* Title for the feedback section */}
            <h2 className="text-2xl font-bold">Customer&apos;s Feedback</h2>

            {/* Container for the customer feedback */}
            <div className="pt-3.5 divide-y-2 divide-dividerClr max-h-[29.3rem] overflow-auto pr-3">
                {
                    data.map((item, index) => { // Mapping over the data array
                        const { image, name, review, feedback } = item; // Destructuring the item object

                        {/* Container for each customer feedback item */ }
                        return (
                            <div key={index} className="py-4 flex flex-col gap-2 pr-2">
                                {/* Customer's name and image */}
                                <h3 className="text-lg font-semibold"><img src={image} alt={name} className="w-10 h-10 mr-2 object-cover rounded-full inline-block" />{name}</h3>
                                {/* Container for the star rating */}
                                <div className="flex gap-0.5">
                                    {/* Rendering the ReviewStars component with the starCount prop */}
                                    <ReviewStars starCount={review} />
                                </div>
                                {/* Customer's feedback */}
                                <p className="text-xs sm:text-sm lg:text-md leading-2 sm:leading-5 tracking-wide md:tracking-[0.03em] lg:tracking-[0.08em] text-[#87888d]">{feedback}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}