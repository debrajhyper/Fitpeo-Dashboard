import { FaStar } from "react-icons/fa";

export function ReviewStars({ starCount }) {
    return Array(5).fill(0).map((_, index) => (
        <FaStar key={index} color={`${index < starCount ? "#f9df2b" : "#dbdbdb"}`} size={23} />
    ))
}
