import { Image } from '@/components/ui/image';
import Link from '@/components/ui/link';
import { useProducts } from '@/framework/product';
import { isEven } from '@/lib/is-even';
import { productPlaceholder } from '@/lib/placeholders';
import ErrorMessage from '@/components/ui/error-message';
import SectionBlock from '@/components/ui/section-block';
import { ROUTES } from '@/lib/routes';

export default function GroupProducts() {
  const { products, error } = useProducts({
    tags: 'combo',
    limit: 3,
  });
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <SectionBlock>
      <div className="grid w-full gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {products.slice(0, 3).map((product, idx) => {
          return (
            <Link
              href={`${ROUTES.PRODUCT}/${product.slug}`}
              className="relative grid w-full bg-gray-100 lg:even:col-span-2"
              key={product.id}
            >
              <Image
                src={product.image?.original ?? productPlaceholder}
                alt="Advertisement image"
                width={isEven(idx) ? 960 : 1560}
                height={960}
                layout="responsive"
                className="rounded-lg lg:rounded-2xl"
              />
            </Link>
          );
        })}
      </div>
    </SectionBlock>
  );
}
