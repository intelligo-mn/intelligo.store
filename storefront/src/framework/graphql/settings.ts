import type { FileWithPath } from 'react-dropzone';
import { useState } from 'react';
import { getPreviewImage } from '@/lib/get-preview-image';
import { useVerifyCouponMutation } from './gql/coupons.graphql';
import {
  useSettingsQuery,
  useSubscribeToNewsletterMutation,
} from './gql/settings.graphql';
import { useUploadMutation } from './gql/upload.graphql';
import { useTranslation } from 'next-i18next';
import { useAtom } from 'jotai';
import { couponAtom } from '@/store/checkout';
import { toast } from 'react-toastify';

export function useSettings() {
  const { data, loading: isLoading, error } = useSettingsQuery();
  return {
    settings: data?.settings?.options ?? {},
    isLoading,
    error,
  };
}

export const useUploads = ({ onChange, defaultFiles }: any) => {
  const [files, setFiles] = useState<FileWithPath[]>(
    getPreviewImage(defaultFiles)
  );
  const [mutate, { loading: isLoading }] = useUploadMutation({
    onCompleted: (data) => {
      if (onChange) {
        const dataAfterRemoveTypename = data.upload?.map(
          ({ __typename, ...rest }: any) => rest
        );
        onChange(dataAfterRemoveTypename);
        setFiles(getPreviewImage(dataAfterRemoveTypename));
      }
    },
    //FIXME: handle error
  });

  function upload(data: File[]) {
    mutate({
      variables: {
        attachment: data,
      },
    });
  }

  return { mutate: upload, isLoading, files };
};

export const useVerifyCoupon = () => {
  const { t } = useTranslation();
  const [_, applyCoupon] = useAtom(couponAtom);
  let [formError, setFormError] = useState<any>(null);
  const [mutate, { loading: isLoading }] = useVerifyCouponMutation({
    onCompleted: (data) => {
      if (!data?.verifyCoupon?.is_valid) {
        setFormError({
          code: t('error-invalid-coupon'),
        });
      }
      applyCoupon(data?.verifyCoupon?.coupon);
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  function verify(data: { code: string }) {
    mutate({
      variables: {
        code: data.code,
      },
    });
  }

  return { mutate: verify, isLoading, formError, setFormError };
};

export function useSubscription() {
  let [isSubscribed, setIsSubscribed] = useState(false);
  const [mutate, { loading: isLoading }] = useSubscribeToNewsletterMutation({
    onCompleted: () => {
      setIsSubscribed(true);
    },
    onError: () => {
      setIsSubscribed(false);
    },
  });

  function subscribe({ email }: { email: string }) {
    mutate({
      variables: {
        email,
      },
    });
  }

  return {
    mutate: subscribe,
    isLoading,
    isSubscribed,
  };
}
