import { useTranslation } from 'next-i18next';
import { useModalState } from '@/components/ui/modal/modal.context';
import OtpForm from '@/components/otp/otp-form';
import { useUpdateUser } from '@/framework/user';

const ProfileAddOrUpdateContact = () => {
  const { t } = useTranslation('common');
  const {
    data: { customerId, contact, profileId },
  } = useModalState();
  const { mutate: updateProfile } = useUpdateUser();

  function onContactUpdate({ phone_number }: { phone_number: string }) {
    if (!customerId) {
      return false;
    }
    updateProfile({
      id: customerId,
      profile: {
        id: profileId,
        contact: phone_number,
      },
    });
  }

  console.log(
    customerId,
    contact,
    profileId,
    'customerId, contactNumber, profileId'
  );

  return (
    <div className="flex flex-col justify-center min-h-screen p-5 bg-light sm:p-8 md:min-h-0 md:rounded-xl">
      <h1 className="mb-5 text-sm font-semibold text-center text-heading sm:mb-6">
        {contact ? t('text-update') : t('text-add-new')}{' '}
        {t('text-contact-number')}
      </h1>
      <OtpForm phoneNumber={contact} onVerifySuccess={onContactUpdate} />
    </div>
  );
};

export default ProfileAddOrUpdateContact;
