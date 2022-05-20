import classNames from 'classnames';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

export interface LinkProps extends NextLinkProps {
  className?: string;
  title?: string;
  target?: string;
  variant?: 'button';
}

const Link: React.FC<LinkProps> = ({
  href,
  children,
  variant,
  title,
  target,
  className,
  ...props
}) => {
  return (
    <NextLink href={href}>
      <a
        className={classNames(
          {
            "inline-flex items-center justify-center flex-shrink-0 font-semibold leading-none rounded outline-none px-3 py-0 h-9 text-sm bg-accent text-light border border-transparent hover:bg-accent-hover transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700'":
              variant === 'button',
          },
          className
        )}
        title={title}
        {...props}
      >
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
