import ContentLoader from 'react-content-loader';

const ProductLoader = (props: any) => (
  <ContentLoader
    speed={2}
    width={'100%'}
    height={'100%'}
    viewBox="0 0 480 480"
    backgroundColor="#e0e0e0"
    foregroundColor="#cecece"
    {...props}
  >
    <rect x="0" y="0" rx="6" ry="6" width="100%" height="340" />
    <rect x="20" y="382" rx="4" ry="4" width="70%" height="18" />
    <rect x="20" y="432" rx="3" ry="3" width="40%" height="18" />
  </ContentLoader>
);

export default ProductLoader;
