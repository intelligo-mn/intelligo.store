import { useEffect, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useTranslation } from 'next-i18next';
import { UploadIcon } from '@/components/icons/upload-icon';
import Spinner from '@/components/ui/loaders/spinner/spinner';
import { useUploads } from '@/framework/settings';

export default function Uploader({
  onChange,
  value,
  name,
  onBlur,
  multiple = false,
}: any) {
  const { t } = useTranslation('common');
  const {
    mutate: upload,
    isLoading,
    files,
  } = useUploads({
    onChange,
    defaultFiles: value,
  });

  const onDrop = useCallback(
    (acceptedFiles) => {
      upload(acceptedFiles);
    },
    [upload]
  );
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    multiple,
    onDrop,
  });
  //FIXME: package update need to check
  // types: [
  //   {
  //     description: 'Images',
  //     accept: {
  //       'image/*': ['.png', '.gif', '.jpeg', '.jpg']
  //     }
  //   },
  // ],
  // excludeAcceptAllOption: true,
  // multiple: false
  const thumbs = files.map((file: any, idx) => (
    <div
      className="relative mt-2 inline-flex flex-col overflow-hidden rounded border border-border-100 ltr:mr-2 rtl:ml-2"
      key={idx}
    >
      <div className="flex h-16 w-16 min-w-0 items-center justify-center overflow-hidden">
        {/* eslint-disable */}
        <img src={file.preview} alt={file?.name} />
      </div>
    </div>
  ));
  //FIXME: maybe no need to use this
  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file: any) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <section className="upload">
      <div
        {...getRootProps({
          className:
            'border-dashed border-2 border-border-base h-36 rounded flex flex-col justify-center items-center cursor-pointer focus:border-accent-400 focus:outline-none',
        })}
      >
        <input
          {...getInputProps({
            name,
            onBlur,
          })}
        />
        <UploadIcon className="text-muted-light" />
        <p className="mt-4 text-center text-sm text-body">
          <span className="font-semibold text-accent">
            {t('text-upload-highlight')}
          </span>{' '}
          {t('text-upload-message')} <br />
          <span className="text-xs text-body">{t('text-img-format')}</span>
        </p>
      </div>

      <aside className="mt-2 flex flex-wrap">
        {!!thumbs.length && thumbs}
        {isLoading && (
          <div className="mt-2 flex h-16 items-center ltr:ml-2 rtl:mr-2">
            <Spinner
              text={t('text-loading')}
              simple={true}
              className="h-6 w-6"
            />
          </div>
        )}
      </aside>
    </section>
  );
}
