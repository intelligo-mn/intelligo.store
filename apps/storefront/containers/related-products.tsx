import SectionHeader from "@components/common/section-header";
import ProductCard from "@components/product/product-card";

interface ProductsProps {
	sectionHeading: string;
	className?: string;
  products: any;
  currentProductId: any;
}

const RelatedProducts: React.FC<ProductsProps> = ({
	sectionHeading,
	className = "mb-9 lg:mb-10 xl:mb-14",
  products,
  currentProductId
}) => {
	return (
		<div className={className}>
			<SectionHeader sectionHeading={sectionHeading} />
			<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8">
        {products.map((product: any) => {
          if (currentProductId === product.id){
            return null;
          }

          return  (
            <ProductCard
              key={`product--key${product.id}`}
              product={product}
              imgWidth={340}
              imgHeight={440}
              variant="grid"
            />
          )
        })}
			</div>
		</div>
	);
};

export default RelatedProducts;
