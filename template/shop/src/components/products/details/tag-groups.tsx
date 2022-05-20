import Router from 'next/router';
import { useTranslation } from 'next-i18next';
interface Props {
  tags: any;
  basePath: string;
  onClose?: () => void;
}

const TagGroups = ({ onClose, tags, basePath }: Props) => {
  const { t } = useTranslation('common');

  const handleClick = (path: string) => {
    Router.push(path);
    if (onClose) {
      onClose();
    }
  };
  return (
    <div className="w-full flex flex-col items-start">
      <span className="text-sm font-semibold text-heading capitalize pb-3">
        {t('text-tags')}
      </span>
      <div className="flex flex-row flex-wrap">
        {tags?.map((tag: any) => (
          <button
            onClick={() => handleClick(`${basePath}?tag=${tag.slug}`)}
            key={tag.id}
            className="text-sm text-body ltr:pr-0.5 rtl:pl-0.5 bg-transparent transition-colors hover:text-accent focus:outline-none focus:bg-opacity-100 ltr:last:pr-0 rtl:last:pl-0 after:content-[','] last:after:content-['']"
          >
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TagGroups;
