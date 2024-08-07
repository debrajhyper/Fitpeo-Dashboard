import { data } from './data';
import { TiArrowSortedDown } from "react-icons/ti";
import { useWindowDimensions } from '../../hook/useWindowDimensions';
import { ResponsiveContainer, BarChart, Bar, Cell, XAxis, YAxis } from 'recharts';

/**
 * Renders an activity graph component.
 * @returns {JSX.Element} The activity graph component.
 */
export function ActivityGraph() {
    const { width } = useWindowDimensions();

    /**
     * Calculates the path for a triangle bar shape.
     * @param {number} x - The x-coordinate of the bar.
     * @param {number} y - The y-coordinate of the bar.
     * @param {number} width - The width of the bar.
     * @param {number} height - The height of the bar.
     * @returns {string} The path for the triangle bar shape.
     */
    const getPath = (x, y, width, height) => {
        const adjustedRadius = Math.max(4, width / 2); // Adjust the radius dynamically based on bar width
        const bottomMargin = width < 550 ? -6 : -10; // Adjust the bottom margin
        return `
            M${x},${y + adjustedRadius + bottomMargin}
            a${adjustedRadius},${adjustedRadius} 0 0 1 ${adjustedRadius},-${adjustedRadius}
            h${width - 2 * adjustedRadius}
            a${adjustedRadius},${adjustedRadius} 0 0 1 ${adjustedRadius},${adjustedRadius}
            v${height - 2 * adjustedRadius}
            a${adjustedRadius},${adjustedRadius} 0 0 1 -${adjustedRadius},${adjustedRadius}
            h-${width - 2 * adjustedRadius}
            a${adjustedRadius},${adjustedRadius} 0 0 1 -${adjustedRadius},-${adjustedRadius}
            Z
        `;
    };

    /**
     * Renders a triangle bar shape.
     * @param {Object} props - The props for the bar shape.
     * @param {string} props.fill - The fill color of the bar shape.
     * @param {number} props.x - The x-coordinate of the bar shape.
     * @param {number} props.y - The y-coordinate of the bar shape.
     * @param {number} props.width - The width of the bar shape.
     * @param {number} props.height - The height of the bar shape.
     * @returns {JSX.Element} The triangle bar shape.
     */
    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    /**
     * Calculates the size of the bar based on the width of the component.
     * @returns {number} The size of the bar.
     */
    const getBarSize = () => {
        if (width < 550) return 8;
        if (width < 750) return 15;
        return 21;
    };

    return (
        <div className="activity-graph w-full h-full col-span-full xl:col-span-4 order-none md:order-7 xl:order-none bg-main rounded-md p-4">
            <div className='mb-4 flex justify-between items-center mr-2'>
                <h2 className="text-xl font-bold">Activity</h2>
                <span className='p-0.5 px-2 pl-3 flex justify-between items-center gap-0 sm:gap-1 bg-[#4c4d52] outline outline-[#606165] rounded-full text-xs sm:text-sm cursor-pointer'>Weekly<TiArrowSortedDown size={16} /></span>
            </div>
            <ResponsiveContainer id="chart" width='100%' height='83%'>
                <BarChart
                    data={data}
                    margin={{
                        top: 0,
                        right: 0,
                        left: width < 1200 ? -35 : -25,
                        bottom: 0,
                    }}
                >
                    <XAxis
                        tick={{ fontSize: 12, fill: '#a8a8aa' }} // Customize tick style
                        tickLine={{ stroke: 'transparent', strokeWidth: 2 }} // Customize tick line
                        axisLine={{ stroke: '#42424d', strokeWidth: 2 }} // Customize axis line
                        dataKey="x_label"
                    />
                    <YAxis
                        tick={{ fontSize: 12, fill: '#a8a8aa' }} // Customize tick style
                        tickLine={{ stroke: 'transparent', strokeWidth: 2 }} // Customize tick line
                        axisLine={{ stroke: 'transparent', strokeWidth: 2 }} // Customize axis line
                        tickFormatter={(tick) => tick === 0 ? tick : `${tick / 1000}k`} // Customize tick format
                    />
                    <Bar dataKey="data" shape={<TriangleBar />} barSize={getBarSize()}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={'#7294ff'} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}