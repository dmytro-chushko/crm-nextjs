import clsx from 'clsx';

interface ISummaryTableCellProps {
  align?: 'left' | 'center' | 'right';
  children: React.ReactNode;
}

const SummaryTableCell = ({
  align = 'left',
  children,
}: ISummaryTableCellProps) => {
  return (
    <td
      className={clsx(
        'py-2 px-5 text-sm border-gray-100 border-r first-of-type:border-l',
        `text-${align}`,
      )}
    >
      {children}
    </td>
  );
};

export default SummaryTableCell;
