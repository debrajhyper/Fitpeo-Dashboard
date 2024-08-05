// // BarChartSVG.js
// import React from 'react';

// const BarChart = () => {
//     const data = [5, 10, 5, 8, 12, 6, 8, 15, 10, 7, 9];
//     const barWidth = 30;
//     const barMargin = 10;
//     const marginBottom = 10;
//     const chartHeight = 200;

//     return (
//         <svg width="400" height={chartHeight} style={{ backgroundColor: '#333' }}>
//             {data.map((value, index) => {
//                 const barHeight = value * 10; // Scale the value for the chart
//                 const adjustedHeight = barHeight - marginBottom;
//                 const yPosition = chartHeight - adjustedHeight - marginBottom; // Adjust y position to include the margin

//                 return (
//                     <rect
//                         key={index}
//                         x={index * (barWidth + barMargin)}
//                         y={yPosition}
//                         width={barWidth}
//                         height={adjustedHeight}
//                         rx="10" // Border radius for rounded corners
//                         ry="10" // Border radius for rounded corners
//                         style={{ fill: 'rgba(54, 162, 235, 0.6)', stroke: 'rgba(54, 162, 235, 1)', strokeWidth: 1 }}
//                     />
//                 );
//             })}
//         </svg>
//     );
// };

// export default BarChart;
