export function Table({ columns, data }) {
    return (
        <table className="table-fixed min-w-full divide-y-2 divide-dividerClr whitespace-nowrap">
            <thead>
                <tr>
                    {
                        columns.map((column, index) => (
                            <th key={index} className={`pl-0 px-6 py-3 text-left text-sm font-bold text-gray-400 tracking-wider ${index == columns.length - 1 ? 'w-28' : ''}`}>
                                {
                                    column === 'OrderNo' ? 'Order No.' : column
                                }
                            </th>
                        ))
                    }
                </tr>
            </thead>
            <tbody className="divide-y-2 divide-dividerClr">
                {
                    data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {
                                columns.map((column, colIndex) => (
                                    <td key={colIndex} className={`py-3 ${colIndex === 0 && 'pl-0'} px-5 sm:px-0 text-sm text-gray-200 w-auto`}>
                                        {colIndex === 0 && <img src={row.Image} alt={row.Customer} className="w-10 h-10 mr-2 object-cover rounded-full inline-block" />}
                                        {row[column]}
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}
