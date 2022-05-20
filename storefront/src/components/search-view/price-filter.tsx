import Slider from '@/components/ui/forms/range-slider';
import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
const { Range } = Slider;
const defaultPriceRange = [0, 1000];
const PriceFilter = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const selectedValues = useMemo(
    () =>
      router.query.price
        ? (router.query.price as string).split(',')
        : defaultPriceRange,
    [router.query.price]
  );
  const [state, setState] = useState<number[] | string[]>(selectedValues);

  useEffect(() => {
    setState(selectedValues);
  }, [selectedValues]);

  function handleChange(value: number[]) {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        price: value.join(','),
      },
    });
  }

  return (
    <>
      <span className="sr-only">{t('text-sort-by-price')}</span>
      <Range
        allowCross={false}
        min={0}
        max={2000}
        //@ts-ignore
        defaultValue={state}
        value={state}
        onChange={(value) => setState(value)}
        onAfterChange={handleChange}
      />
      <div className="grid grid-cols-2 gap-3 mt-4">
        <div className="flex flex-col items-start p-2 bg-gray-100 border border-gray-200 rounded">
          <label className="text-sm font-semibold text-gray-400">Min</label>
          <span className="text-sm font-bold text-heading">{state[0]}</span>
        </div>
        <div className="flex flex-col p-2 bg-gray-100 border border-gray-200 rounded">
          <label className="text-sm font-semibold text-gray-400">Max</label>
          <span className="text-sm font-bold text-heading">{state[1]}</span>
        </div>
      </div>
    </>
  );
};

export default PriceFilter;
