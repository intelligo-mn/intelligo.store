import SubscriptionForm from '@/components/settings/subscription-form';
import { useSubscription } from '@/framework/settings';
import { useTranslation } from 'next-i18next';

type SubscribeToNewsletterProps = {
  title: string;
  description?: string;
};
export default function SubscribeToNewsletter({
  title,
  description,
}: SubscribeToNewsletterProps) {
  const { t } = useTranslation('common');
  const {
    mutate: subscribe,
    isLoading: loading,
    isSubscribed,
  } = useSubscription();

  function onSubmit({ email }: { email: string }) {
    subscribe({ email });
  }
  return (
    <div className="flex flex-col">
      <h3 className="mt-3 mb-7 text-xl font-semibold text-heading">
        {t(title)}
      </h3>
      <p className="mb-7 text-sm text-heading">{t(description!)}</p>
      <SubscriptionForm
        onSubmit={onSubmit}
        loading={loading}
        success={isSubscribed}
      />
    </div>
  );
}
