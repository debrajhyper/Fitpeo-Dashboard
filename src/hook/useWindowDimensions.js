import { useState, useEffect } from 'react';

/**
 * Custom hook that returns the width and height of the window.
 * It listens for window resize events and updates the dimensions accordingly.
 * @returns {Object} An object containing the width and height of the window.
 */
export function useWindowDimensions() {
    // Check if the code is running in a browser environment
    const hasWindow = typeof window !== 'undefined';

    // Initialize the state with the initial window dimensions
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    /**
     * Get the current window dimensions.
     * @returns {Object} An object containing the width and height of the window.
     */
    function getWindowDimensions() {
        // Get the inner width and height of the window, or null if not available
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;
        return {
            width,
            height,
        };
    }

    /**
     * Update the window dimensions state when the window is resized.
     */
    function handleResize() {
        setWindowDimensions(getWindowDimensions());
    }

    // Add event listener for window resize and remove it on cleanup
    useEffect(() => {
        if (hasWindow) {
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [hasWindow]);

    // Return the current window dimensions
    return windowDimensions;
}