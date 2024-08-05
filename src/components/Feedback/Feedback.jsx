import './style.css';
import { data } from "./data";
import { ReviewStars } from "./ReviewStars";

export function Feedback() {
    return (
        <div id="feedback" className="w-full h-min col-span-full md:col-span-2 xl:col-span-3 order-9 xl:mt-5 xl:ml-5 bg-main rounded-md p-5 pr-1 pb-0">
            <h2 className="text-2xl font-bold">Customer&apos;s Feedback</h2>
            <div className="pt-3.5 divide-y-2 divide-dividerClr max-h-[29.3rem] overflow-auto pr-2">
                {
                    data.map((item, index) => {
                        const { image, name, review, feedback } = item;
                        return (
                            <div key={index} className="py-4 flex flex-col gap-2">
                                <h3 className="text-lg font-semibold"><img src={image} alt={name} className="w-10 h-10 mr-2 object-cover rounded-full inline-block" />{name}</h3>
                                <div className="flex gap-0.5">
                                    <ReviewStars starCount={review} />
                                </div>
                                <p className="text-xs sm:text-sm lg:text-md leading-2 sm:leading-5 tracking-[0.026em] text-[#87888d]">{feedback}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
