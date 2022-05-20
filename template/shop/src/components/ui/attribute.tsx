import cn from 'classnames';
import BoxedAttribute from './boxed-attribute';

type AttributeProps = {
  value?: string;
  isActive?: boolean;
  className?: string;
  color?: string;
  variant?: 'normal' | 'outline';
  onClick?: () => void;
  [key: string]: unknown;
};
function Attribute({
  type,
  isActive,
  value,
  color,
  attribute,
  variant = 'normal',
  onClick,
}: AttributeProps) {
  switch (type) {
    case 'formats':
      return (
        <BoxedAttribute title="Hardcover" value="$9.59" active={isActive} />
      );
    case 'color':
      return (
        <div
          role="button"
          onClick={onClick}
          className={cn(
            'h-11 w-11 p-0.5 flex items-center justify-center border-2 rounded-full border-transparent cursor-pointer',
            {
              '!border-accent': isActive,
            }
          )}
        >
          <span
            className="w-full h-full rounded-full border border-border-200"
            style={{ backgroundColor: color }}
          />
        </div>
      );
    default:
      return (
        <div
          role="button"
          onClick={onClick}
          className={cn(
            'px-4 py-3 text-sm rounded text-heading bg-gray-50 border-border-200 cursor-pointer transition-colors',
            {
              '!text-light !bg-accent !border-accent':
                isActive && variant === 'normal',
              '!border-accent !text-accent': isActive && variant === 'outline',
              'border-2 font-semibold': variant === 'outline',
              border: variant === 'normal',
            }
          )}
        >
          {value}
        </div>
      );
  }
}
// const Attribute: React.FC<AttributeProps> = ({
//   value,
//   active,
//   className,
//   color,
//   ...props
// }) => {
//   const classes = cn(
//     {
//       'px-4 py-3 text-sm border rounded text-heading bg-gray-50 border-border-200':
//         className !== 'color',
//       '!text-light !bg-accent !border-accent': active && className !== 'color',
//       'h-11 w-11 p-0.5 flex items-center justify-center border-2 rounded-full border-transparent':
//         className === 'color',
//       '!border-accent': active && className === 'color',
//     },
//     'cursor-pointer'
//   );
//   return (
//     <div className={classes} {...props}>
//       {className === 'color' ? (
//         <span
//           className="w-full h-full rounded-full border border-border-200"
//           style={{ backgroundColor: color }}
//         />
//       ) : (
//         value
//       )}
//     </div>
//   );
// };

export default Attribute;
