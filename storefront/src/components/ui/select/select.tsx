import { forwardRef } from 'react';
import ReactSelect, { Props } from 'react-select';
import { selectStyles } from './select.styles';

type Ref = any;

const Select = forwardRef<Ref, Props>((props, ref) => (
  <ReactSelect ref={ref} styles={selectStyles} {...props} />
));

Select.displayName = 'Select';
export default Select;
