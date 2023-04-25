interface ItemInfoRowProps {
  title: string;
  value: string;
}
export const ItemInfoRow: React.FC<ItemInfoRowProps> = ({ title, value }) => (
  <div className="flex justify-between px-6 py-5 border-t border-gray-100">
    <p className="text-sm text-body">{title}</p>
    <span className="text-sm font-semibold text-heading">{value}</span>
  </div>
);
