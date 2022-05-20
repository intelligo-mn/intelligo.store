import ErrorMessage from '@/components/ui/error-message';
import Spinner from '@/components/ui/loaders/spinner/spinner';
import ProgressBox from '@/components/ui/progress-box/progress-box';
import { useOrderStatuses } from '@/framework/order';

interface Props {
  status: number;
}

const OrderStatuses = ({ status }: Props) => {
  const { orderStatuses, isLoading, error } = useOrderStatuses({
    limit: 100,
  });

  if (isLoading) return <Spinner showText={false} />;
  if (error) return <ErrorMessage message={error.message} />;
  return <ProgressBox data={orderStatuses} status={status} />;
};

export default OrderStatuses;
