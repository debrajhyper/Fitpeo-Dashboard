import { classNames } from '../../utils/classNames';

export const StatusChip = ({ status }) => {
    const baseClass = 'px-2.5 py-1 rounded-full text-xs font-semibold';
    const statusClass = {
        delivered: 'bg-[#165246] text-[#03c088]',
        pending: 'bg-[#5e3339] text-[#d45254]',
        cancelled: 'bg-[#5e3339] text-[#d45254]',
    };

    return <span className={classNames(baseClass, statusClass[status.toLowerCase()])}>{status}</span>;
};
