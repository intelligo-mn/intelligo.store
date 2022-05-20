import Card from '@/components/ui/cards/card';
import { useTranslation } from 'next-i18next';
import Seo from '@/components/seo/seo';
import ChangePasswordForm from '@/components/auth/change-password-form';
import DashboardLayout from '@/layouts/_dashboard';
export { getStaticProps } from '@/framework/general.ssr';

const ChangePasswordPage = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Seo noindex={true} nofollow={true} />
      <Card className="w-full">
        <h1 className="mb-5 text-lg font-semibold text-heading sm:mb-8 sm:text-xl">
          {t('change-password')}
        </h1>
        <ChangePasswordForm />
      </Card>
    </>
  );
};
ChangePasswordPage.authenticationRequired = true;

ChangePasswordPage.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default ChangePasswordPage;
