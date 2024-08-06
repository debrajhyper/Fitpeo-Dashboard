import { Table } from './Table';
import { data, columns } from './data';
import { StatusChip } from './StatusChip';
import { TableContainer } from './TableContainer';

/**
 * OrdersTable component renders a table of recent orders.
 * It maps through the data array and adds a StatusChip component for each order status.
 * The component returns a div container with a title, TableContainer component and Table component.
 * @returns {JSX.Element} A div container with a title, TableContainer component and Table component.
 */
export function OrdersTable() {
    const modifiedData = data.map(row => ({ // Map through the data array and add a StatusChip component for each order status
        ...row,
        Status: <StatusChip status={row.Status} />,
    }));

    return (
        <div className="w-full h-min col-span-full md:col-span-2 xl:col-span-4 order-9 bg-main rounded-md p-5">
            {/* Container title */}
            <h2 className="text-2xl font-bold">Recent Orders</h2>
            {/* TableContainer component */}
            <TableContainer>
                {/* Table component */}
                <Table columns={columns} data={modifiedData} />
            </TableContainer>
        </div>
    )
}