import cn from 'classnames';
import { Image } from '@/components/ui/image';
import { Banner } from '@/framework/types';
import { productPlaceholder } from '@/lib/placeholders';
import SearchWithSuggestion from '@/components/ui/search/search-with-suggestion';

interface BannerProps {
  banners: Banner[] | undefined;
  layout?: string;
}

const BannerWithoutSlider: React.FC<BannerProps> = ({ banners, layout }) => {
  return (
    <div
      className={cn('hidden lg:block relative', {
        '!block': layout === 'minimal',
      })}
    >
      <div
        className={cn('relative w-full h-screen', {
          'max-h-140': layout === 'standard',
          'max-h-[320px] md:max-h-[680px]': layout === 'minimal',
        })}
      >
        <Image
          className="w-full h-full min-h-140"
          src={banners![0]?.image?.original ?? productPlaceholder}
          alt={banners![0]?.title ?? ''}
          layout="fill"
          objectFit="cover"
        />
        <div
          className={cn(
            'p-5 md:px-20 absolute inset-0 w-full flex flex-col items-center justify-center text-center lg:space-y-10',
            {
              'space-y-5 md:!space-y-8': layout === 'minimal',
            }
          )}
        >
          <h1
            className={cn(
              'text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight text-heading font-bold',
              {
                '!text-accent': layout === 'minimal',
              }
            )}
          >
            {banners![0]?.title}
          </h1>
          <p className="text-sm md:text-base xl:text-lg text-body">
            {banners![0]?.description}
          </p>
          <div className="max-w-3xl w-full">
            <SearchWithSuggestion
              label="search"
              className="hidden lg:block"
              variant="with-shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerWithoutSlider;
