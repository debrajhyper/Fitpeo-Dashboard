import { classNames } from '../../utils/classNames';

/**
 * StatusChip component is a reusable component that displays a status chip.
 * It takes a status prop and renders a span element with the appropriate class names.
 * 
 * @param {Object} props - The props object containing the status prop.
 * @param {string} props.status - The status to be displayed in the chip.
 * @returns {JSX.Element} The StatusChip component.
 */
export const StatusChip = ({ status }) => {
    // Define the base class for the chip
    const baseClass = 'px-2.5 py-1 rounded-full text-xs font-semibold';

    // Define the status classes with their respective background and text colors
    const statusClass = {
        delivered: 'bg-[#165246] text-[#03c088]',
        pending: 'bg-[#5e3339] text-[#d45254]',
        cancelled: 'bg-[#5e3339] text-[#d45254]',
    };

    // Render the chip with the appropriate class names
    return (
        <span
            className={classNames(baseClass, statusClass[status.toLowerCase()])}
        >
            {status}
        </span>
    );
};