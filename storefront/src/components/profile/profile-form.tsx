import Button from '@/components/ui/button';
import Card from '@/components/ui/cards/card';
import FileInput from '@/components/ui/forms/file-input';
import Input from '@/components/ui/forms/input';
import TextArea from '@/components/ui/forms/text-area';
import { useTranslation } from 'next-i18next';
import pick from 'lodash/pick';
import { Form } from '@/components/ui/forms/form';
import { useUpdateUser } from '@/framework/user';
import type { UpdateUserInput, User } from '@/types';

const ProfileForm = ({ user }: { user: User }) => {
  const { t } = useTranslation('common');
  const { mutate: updateProfile, isLoading } = useUpdateUser();

  function onSubmit(values: UpdateUserInput) {
    console.log(values, 'values');
    if (!user) {
      return false;
    }
    updateProfile({
      id: user.id,
      name: values.name,
      profile: {
        id: user?.profile?.id,
        bio: values?.profile?.bio ?? '',
        //@ts-ignore
        avatar: values?.profile?.avatar?.[0],
      },
    });
  }

  return (
    <Form<UpdateUserInput>
      onSubmit={onSubmit}
      useFormProps={{
        ...(user && {
          defaultValues: pick(user, ['name', 'profile.bio', 'profile.avatar']),
        }),
      }}
    >
      {({ register, control }) => (
        <>
          <div className="mb-8 flex">
            <Card className="w-full">
              <div className="mb-8">
                <FileInput control={control} name="profile.avatar" />
              </div>

              <div className="mb-6 flex flex-row">
                <Input
                  className="flex-1"
                  label={t('text-name')}
                  {...register('name')}
                  variant="outline"
                />
              </div>

              <TextArea
                label={t('text-bio')}
                //@ts-ignore
                {...register('profile.bio')}
                variant="outline"
                className="mb-6"
              />

              <div className="flex">
                <Button
                  className="ltr:ml-auto rtl:mr-auto"
                  loading={isLoading}
                  disabled={isLoading}
                >
                  {t('text-save')}
                </Button>
              </div>
            </Card>
          </div>
        </>
      )}
    </Form>
  );
};

export default ProfileForm;
