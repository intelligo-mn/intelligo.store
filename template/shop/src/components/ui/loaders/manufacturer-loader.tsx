import ContentLoader from 'react-content-loader';

const ManufacturerLoader = (props: any) => (
  <ContentLoader
    speed={2}
    width={280}
    height={120}
    viewBox="0 0 280 120"
    backgroundColor="#e0e0e0"
    foregroundColor="#cecece"
    {...props}
  >
    <circle cx="50" cy="50" r="50" />
    <rect x="112" y="24" rx="0" ry="0" width="180" height="18" />
    <rect x="114" y="56" rx="0" ry="0" width="90" height="12" />
  </ContentLoader>
);

export default ManufacturerLoader;
