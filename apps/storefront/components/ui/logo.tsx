import Image from "next/image";
import Link from "@components/ui/link";
import cn from "classnames";
import { siteSettings } from "@settings/site.settings";
import { useSettings } from "@contexts/settings.context";

const Logo: React.FC<React.AnchorHTMLAttributes<{}>> = ({
	className,
	...props
}) => {
  const { logo, siteTitle } = useSettings();


	return (
		<Link
			href={"/"}
			className={cn("inline-flex focus:outline-none", className)}
			{...props}
		>
			<Image
        src={logo?.original ?? siteSettings.logo.url}
				alt={siteTitle || "ChawkBazar Logo"}
        // TODO: Make it dynamic
				height={30}
				width={95}
				layout="fixed"
				loading="eager"
			/>
		</Link>
	);
};

export default Logo;
