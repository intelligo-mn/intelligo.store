import Image from "next/image";
import { useTranslation } from "next-i18next";
import MailchimpForm from "@components/common/mailchimp-form";


export default function Newsletter() {
	const { t } = useTranslation();
	return (
		<div className="flex items-center justify-center">
			<div className="w-full sm:w-[450px] md:w-[550px] lg:w-[980px] xl:w-[1170px] flex flex-col max-w-full max-h-full bg-white overflow-hidden rounded-md">
				<div className="flex items-center">
					<div className="flex-shrink-0 items-center justify-center bg-gray-200 hidden lg:flex lg:w-[520px] xl:w-auto">
						<Image
							src="/assets/images/newsletter.jpg"
							alt="Thumbnail"
							width={655}
							height={655}
							className="object-cover w-full h-full"
						/>
					</div>
					<div className="flex flex-col px-5 py-7 sm:p-10 md:p-12 xl:p-14 text-center w-full">
						<h4 className="uppercase font-semibold text-xs sm:text-sm text-body mb-2 lg:mb-4">
							{t("common:text-subscribe-now")}
						</h4>
						<h2 className="text-heading text-lg sm:text-xl md:text-2xl leading-8 font-bold mb-5 sm:mb-7 md:mb-9">
							{t("common:text-newsletter-title")}
						</h2>
						<p className="text-body text-sm leading-6 md:leading-7">
							{t("common:text-newsletter-subtitle")}
						</p>
						<MailchimpForm layout="newsletter" />
					</div>
				</div>
			</div>
		</div>
	);
}
