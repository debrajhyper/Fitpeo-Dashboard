/**
 * Combines multiple class names into a single string, filtering out any falsy values.
 *
 * @param {...string} classes - The class names to be combined.
 * @return {string} The combined class names.
 */
export function classNames(...classes) {
    // Filter out any falsy values, such as undefined or null, from the class names array.
    // This ensures that only truthy values are included in the resulting string.
    const filteredClasses = classes.filter(Boolean);

    // Join the filtered class names into a single string, separated by a space.
    // This produces a string of CSS class names that can be used in HTML elements.
    return filteredClasses.join(' ');
}