import ContentLoader from 'react-content-loader';

const AuthorLoader = (props: any) => (
  <ContentLoader
    speed={2}
    width={360}
    height={260}
    viewBox="0 0 360 260"
    backgroundColor="#e0e0e0"
    foregroundColor="#cecece"
    style={{ width: '100%' }}
    {...props}
  >
    <circle cx="180" cy="106" r="80" />
    <rect x="20" y="217" rx="0" ry="0" width="320" height="30" />
  </ContentLoader>
);

export default AuthorLoader;
