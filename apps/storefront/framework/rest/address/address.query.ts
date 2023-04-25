import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { CustomerService } from '@framework/customer/customer.service';

export const useDeleteAddressMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (input: { id: string }) => CustomerService.deleteAddress(input),
    {
      onSuccess: (data) => {
        if (data.success) {
          toast.success(data.message);
        } else {
          toast.error(data.message);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('me');
      },
    }
  );
};
