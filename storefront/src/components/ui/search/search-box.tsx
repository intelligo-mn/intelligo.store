import { InputHTMLAttributes } from 'react';
import cn from 'classnames';
import { SearchIcon } from '@/components/icons/search-icon';
import { CloseIcon } from '@/components/icons/close-icon';
import { useTranslation } from 'next-i18next';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label: string;
  variant?: 'minimal' | 'normal' | 'with-shadow';
  onSubmit: (e: any) => void;
  onClearSearch: (e: any) => void;
}

const classes = {
  normal:
    'bg-light ltr:pl-6 rtl:pr-6 ltr:pr-14 rtl:pl-14 ltr:rounded-tr-none rtl:rounded-tl-none ltr:rounded-br-none rtl:rounded-bl-none  border ltr:border-r-0 rtl:border-l-0 border-transparent focus:border-accent',
  minimal:
    'search-minimal bg-gray-100 ltr:pl-10 rtl:pr-10 ltr:pr-4 rtl:pl-4 ltr:md:pl-14 rtl:md:pr-14 border border-transparent focus:border-accent focus:bg-light',
  'with-shadow':
    'search-with-shadow bg-light ltr:pl-10 rtl:pr-10 ltr:pr-12 rtl:pl-12 ltr:md:pl-14 rtl:md:pr-14 focus:bg-light border-0',
};

const SearchBox: React.FC<Props> = ({
  className,
  label,
  onSubmit,
  onClearSearch,
  variant = 'normal',
  value,
  ...rest
}) => {
  const { t } = useTranslation();

  return (
    <form onSubmit={onSubmit} className={cn('w-full', className)}>
      <div
        className={cn('relative flex rounded md:rounded-lg', {
          'h-14 shadow-900': variant === 'normal',
          'h-11 md:h-12': variant === 'minimal',
          'h-16 shadow-downfall': variant === 'with-shadow',
        })}
      >
        <label htmlFor={label} className="sr-only">
          {label}
        </label>

        <input
          id={label}
          type="text"
          value={value}
          autoComplete="off"
          className={cn(
            'search item-center flex h-full w-full appearance-none overflow-hidden truncate rounded-lg text-sm text-heading placeholder-gray-500 transition duration-300 ease-in-out focus:outline-none focus:ring-0',
            classes[variant]
          )}
          {...rest}
        />
        {value && (
          <button
            type="button"
            onClick={onClearSearch}
            className={cn(
              'absolute flex h-full w-10 cursor-pointer items-center justify-center text-body transition-colors duration-200 hover:text-accent-hover focus:text-accent-hover focus:outline-none md:w-14',
              {
                'ltr:right-36 rtl:left-36': variant === 'normal',
                'ltr:right-0 rtl:left-0': variant !== 'normal',
              }
            )}
          >
            <span className="sr-only">{t('common:text-close')}</span>
            <CloseIcon className="h-3.5 w-3.5 md:h-3 md:w-3" />
          </button>
        )}

        {variant === 'normal' ? (
          <button className="flex h-full min-w-[143px] items-center justify-center rounded-lg bg-accent px-8 font-semibold text-light transition-colors duration-200 hover:bg-accent-hover focus:bg-accent-hover focus:outline-none ltr:rounded-tl-none ltr:rounded-bl-none rtl:rounded-tr-none rtl:rounded-br-none">
            <SearchIcon className="h-4 w-4 ltr:mr-2.5 rtl:ml-2.5" />
            {t('common:text-search')}
          </button>
        ) : (
          <button className="absolute flex items-center justify-center w-10 h-full transition-colors duration-200 text-body hover:text-accent-hover focus:text-accent-hover focus:outline-none ltr:left-0 rtl:right-0 md:w-14">
            <span className="sr-only">{t('common:text-search')}</span>
            <SearchIcon className="w-4 h-4" />
          </button>
        )}
      </div>
    </form>
  );
};

export default SearchBox;
