import { data, columns } from './data';
import { StatusChip } from './StatusChip';
import { TableContainer } from './TableContainer';
import { Table } from './Table';

export function OrdersTable() {
    const modifiedData = data.map(row => ({
        ...row,
        Status: <StatusChip status={row.Status} />,
    }));

    return (
        <div className="w-full h-min col-span-full md:col-span-2 xl:col-span-4 order-9 bg-main rounded-md p-5">
            <h2 className="text-2xl font-bold">Recent Orders</h2>
            <TableContainer>
                <Table columns={columns} data={modifiedData} />
            </TableContainer>
        </div>
    )
}
