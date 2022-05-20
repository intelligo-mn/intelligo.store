import ContentLoader from 'react-content-loader';

const BakeryCategoryLoader = (props: any) => (
  <ContentLoader
    speed={2}
    width={1000}
    height={120}
    viewBox="0 0 1000 120"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="74" cy="45" r="36" />
    <rect x="15" y="95" rx="0" ry="0" width="118" height="21" />
    <circle cx="220" cy="45" r="36" />
    <rect x="161" y="95" rx="0" ry="0" width="118" height="21" />
    <circle cx="370" cy="45" r="36" />
    <rect x="311" y="95" rx="0" ry="0" width="118" height="21" />
    <circle cx="517" cy="46" r="36" />
    <rect x="458" y="96" rx="0" ry="0" width="118" height="21" />
    <circle cx="657" cy="45" r="36" />
    <rect x="608" y="95" rx="0" ry="0" width="118" height="21" />
    <circle cx="807" cy="45" r="36" />
    <rect x="758" y="95" rx="0" ry="0" width="118" height="21" />
    <circle cx="957" cy="46" r="36" />
    <rect x="908" y="96" rx="0" ry="0" width="118" height="21" />
  </ContentLoader>
);

export default BakeryCategoryLoader;
