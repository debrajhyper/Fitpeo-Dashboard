/**
 * TableContainer is a functional component that wraps a table with a rounded border, padding, and an overflow scroll.
 * It receives a single prop, "children", which is the table to be wrapped.
 * 
 * @param {Object} props - The props object.
 * @param {JSX.Element} props.children - The table to be wrapped.
 * @returns {JSX.Element} The wrapped table.
 */
export function TableContainer({ children }) {
    // Render a div with rounded borders, padding top, and overflow scroll.
    // The table is passed as a child to this div.
    return (
        <div className="rounded-lg pt-3.5 overflow-auto">
            {children}
        </div>
    );
}