import SearchBox from '@/components/ui/search/search-box';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useSearch } from './search.context';
interface Props {
  label: string;
  variant?: 'minimal' | 'normal' | 'with-shadow';
  [key: string]: unknown;
}

const Search: React.FC<Props> = ({ label, variant, ...props }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { searchTerm, updateSearchTerm } = useSearch();
  const handleOnChange = (e: any) => {
    const { value } = e.target;
    updateSearchTerm(value);
  };

  const onSearch = (e: any) => {
    e.preventDefault();
    if (!searchTerm) return;
    const { pathname, query } = router;
    router.push(
      {
        pathname,
        query: { ...query, text: searchTerm },
      },
      undefined,
      {
        scroll: false,
      }
    );
  };

  function clearSearch() {
    updateSearchTerm('');
    const { pathname, query } = router;
    const { text, ...rest } = query;
    if (text) {
      router.push(
        {
          pathname,
          query: { ...rest },
        },
        undefined,
        {
          scroll: false,
        }
      );
    }
  }

  return (
    <SearchBox
      label={label}
      onSubmit={onSearch}
      onClearSearch={clearSearch}
      onChange={handleOnChange}
      value={searchTerm}
      name="search"
      placeholder={t('common:text-search-placeholder')}
      variant={variant}
      {...props}
    />
  );
};

export default Search;
