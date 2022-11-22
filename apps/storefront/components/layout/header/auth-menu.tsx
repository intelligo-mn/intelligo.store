import Link from "@components/ui/link";
import React from "react";

interface Props {
  href: string;
  className?: string;
  btnProps: React.ButtonHTMLAttributes<any>;
  isAuthorized: boolean;
}

const AuthMenu: React.FC<Props> = ({
  isAuthorized,
  href,
  className,
  btnProps,
  children,
}) => {
  return isAuthorized ? (
    <Link href={href} className={className}>
      {children}
    </Link>
  ) : (
    <button {...btnProps} />
  );
};

export default AuthMenu;
