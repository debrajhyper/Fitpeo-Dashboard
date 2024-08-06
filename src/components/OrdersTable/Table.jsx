/**
 * Component for rendering an HTML table with provided data.
 *
 * @param {Object} props - Component props.
 * @param {Array} props.columns - Array of column names.
 * @param {Array} props.data - Array of data rows.
 * @return {JSX.Element} - The rendered table component.
 */
export function Table({ columns, data }) {
    // Render the table header
    const renderHeader = () => (
        <tr>
            {
                columns.map((column, index) => (
                    <th key={index} className={`py-3 ${index === 0 && 'pl-0'} px-6 text-left text-sm font-bold text-gray-400 tracking-wider ${index === columns.length - 1 ? 'w-28' : ''}`}>
                        {column === 'OrderNo' ? 'Order No.' : column}
                    </th>
                ))
            }
        </tr>
    );

    // Render a table row for each data row
    const renderRow = (row, rowIndex) => (
        <tr key={rowIndex}>
            {
                columns.map((column, colIndex) => (
                    <td key={colIndex} className={`py-3 ${colIndex === 0 && 'pl-0'} px-6 text-left text-sm text-gray-200 w-auto`}>
                        {/* Render an image if it's the first column */}
                        {colIndex === 0 && <img src={row.Image} alt={row.Customer} className="w-10 h-10 mr-2 object-cover rounded-full inline-block" />}
                        {/* Render the corresponding data cell */}
                        {row[column]}
                    </td>
                ))
            }
        </tr>
    );

    return (
        <table className="table-fixed min-w-full divide-y-2 divide-dividerClr whitespace-nowrap">
            <thead>
                {renderHeader()}
            </thead>
            <tbody className="divide-y-2 divide-dividerClr">
                {data.map(renderRow)}
            </tbody>
        </table>
    );
}