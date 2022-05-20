import CheckboxGroup from './checkbox-group';
import { useState, useEffect, useMemo } from 'react';
import Checkbox from '@/components/ui/forms/checkbox/checkbox';
import { useRouter } from 'next/router';
import Scrollbar from '@/components/ui/scrollbar';
import { useTranslation } from 'react-i18next';
import { useManufacturers } from '@/framework/manufacturer';
import ErrorMessage from '@/components/ui/error-message';
import Spinner from '@/components/ui/loaders/spinner/spinner';

interface Props {
  manufacturers: any[];
}

const ManufacturerFilterView = ({ manufacturers }: Props) => {
  const { t } = useTranslation('common');

  const router = useRouter();
  const selectedValues = useMemo(
    () =>
      router.query.manufacturer
        ? (router.query.manufacturer as string).split(',')
        : [],
    [router.query.manufacturer]
  );
  const [state, setState] = useState<string[]>(selectedValues);
  useEffect(() => {
    setState(selectedValues);
  }, [selectedValues]);

  function handleChange(values: string[]) {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        manufacturer: values.join(','),
      },
    });
  }

  return (
    <div className="relative -mb-5 after:absolute after:bottom-0 after:flex after:h-6 after:w-full after:bg-gradient-to-t after:from-white ltr:after:left-0 rtl:after:right-0">
      <Scrollbar style={{ maxHeight: '400px' }} className="pb-6">
        <span className="sr-only">{t('text-manufacturers')}</span>
        <div className="grid grid-cols-1 gap-4">
          <CheckboxGroup values={state} onChange={handleChange}>
            {manufacturers.map((plan) => (
              <Checkbox
                key={plan.id}
                label={plan.name}
                name={plan.slug}
                value={plan.slug}
                theme="secondary"
              />
            ))}
          </CheckboxGroup>
        </div>
      </Scrollbar>
    </div>
  );
};

const ManufacturerFilter = () => {
  const { manufacturers, isLoading, error } = useManufacturers({ limit: 100 });
  if (error) return <ErrorMessage message={error.message} />;
  if (isLoading)
    return (
      <div className="flex w-full items-center justify-center py-5">
        <Spinner className="h-6 w-6" simple={true} />
      </div>
    );
  return <ManufacturerFilterView manufacturers={manufacturers} />;
};

export default ManufacturerFilter;
