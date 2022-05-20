import Uploader from '@/components/ui/forms/uploader';
import { Controller } from 'react-hook-form';

interface FileInputProps {
  control: any;
  name: string;
  multiple?: boolean;
}

const FileInput = ({ control, name, multiple }: FileInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[]}
      render={({ field: { ref, ...rest } }) => (
        <Uploader {...rest} multiple={multiple} />
      )}
    />
  );
};

export default FileInput;
