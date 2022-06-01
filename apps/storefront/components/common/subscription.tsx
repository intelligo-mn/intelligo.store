import Text from "@components/ui/text";
import React from "react";
import {useTranslation} from "next-i18next";
import MailchimpForm from "@components/common/mailchimp-form";
import { getDirection } from '@utils/get-direction';
import { useRouter } from 'next/router';
import WidgetSocial from "@components/widgets/widget-social";
import Container from "@components/ui/container";

interface Props {
	className?: string;
	variant?: "default" | "modern";
}

const Subscription: React.FC<Props> = ({ className = "", variant = "default" }) => {
	const { t } = useTranslation();
	const { locale } = useRouter();
	const dir = getDirection(locale);
	return (
		<div className="bg-blue">
			<Container>
				<div
					className={`${className} flex flex-col justify-center xl:justify-between items-center bg-blue py-10 md:py-4 lg:py-4 ${variant === "default" ? "xl:flex-row" : ""}`}
				>
					<div className={`-mt-1.5 lg:-mt-2 xl:-mt-0.5 text-center ltr:xl:text-left rtl:xl:text-right ${variant === "default" ? "mb-7 md:mb-8 lg:mb-9 xl:mb-0" : "mb-7  z-10 relative"}`}>
						<Text
							variant="mediumHeading"
							className="text-white text-2xl"
						>
							{t(`common:text-subscribe-heading`)}
						</Text>
						{/* <p className="text-body text-xs md:text-sm leading-6 md:leading-7">
							{t(`common:text-subscribe-description`)}
						</p> */}
					</div>
					<MailchimpForm layout="subscribe" />
					{variant === "modern" ?
						<div
							style={{
							backgroundImage:
								dir === 'rtl'
								? 'url(/assets/images/subscription-bg-reverse.png)'
								: 'url(/assets/images/subscription-bg.png)',
							}}
							className={`hidden z-0 xl:block bg-no-repeat ${
							dir === 'rtl'
								? 'bg-left 2xl:-left-12 3xl:left-0'
								: 'bg-right xl:-right-24 2xl:-right-20 3xl:right-0'
							} bg-contain xl:bg-cover 3xl:bg-contain absolute h-full w-full top-0`}
						/>
					:
					""
					}
					<WidgetSocial />
				</div>
			</Container>
			
		</div>
		
	);
};

export default Subscription;
