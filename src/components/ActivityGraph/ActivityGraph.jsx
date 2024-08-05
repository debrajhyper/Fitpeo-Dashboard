import { BarChart, barElementClasses } from '@mui/x-charts/BarChart';
import './style.css';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

export function ActivityGraph() {
    const pData = [4, 9.8, 4.5, 4, 5.9, 5.9, 5.1, 5.5, 4.8, 2, 7, 7.5, 6, 10.5, 8.5, 11.5, 16, 11, 8, 4.9, 5.5, 10.5, 7.5, 6];
    const xLabels = [5, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27];

    return (
        <div className="activity-graph w-full h-full col-span-full xl:col-span-4 order-none md:order-7 xl:order-none xl:mt-5 bg-main rounded-md p-4">
            <BarChart
                sx={() => ({
                    [`.${barElementClasses.root}`]: {
                        fill: '#7294ff',
                        strokeWidth: 0,
                    },
                    [`.${axisClasses.root}`]: {
                        [`.${axisClasses.tick}, .${axisClasses.line}`]: {
                            stroke: '#8a8b8f',
                            strokeWidth: 1,
                        },
                        [`.${axisClasses.tickLabel}`]: {
                            fill: '#8a8b8f',
                        },
                    },
                })}
                xAxis={[{ data: xLabels, scaleType: 'band' }]}
                series={[
                    { data: pData, id: 'd_id' },
                ]}
                axisHighlight={{
                    x: 'none',
                    y: 'none',
                }}
                // width={200}
                height={300}
            />
        </div>
    )
}
