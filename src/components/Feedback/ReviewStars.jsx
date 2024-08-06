import { FaStar } from "react-icons/fa";

/**
 * Render a row of stars to represent a rating.
 *
 * @param {Object} props - The properties for the component.
 * @param {number} props.starCount - The number of stars to fill, from 0 to 5.
 * @return {JSX.Element} The row of stars.
 */
export function ReviewStars({ starCount }) {
    // Create an array of 5 elements, all set to 0
    return Array(5).fill(0).map((_, index) => (
        // For each index, render a star with the following properties:
        // - Key: The index (to help React identify each star)
        // - Color: The color of the star, based on whether it should be filled or empty
        // - Size: The size of the star (always 23 pixels)
        <FaStar
            key={index}
            color={`${index < starCount ? "#f9df2b" : "#dbdbdb"}`}
            size={23}
        />
    ))
}