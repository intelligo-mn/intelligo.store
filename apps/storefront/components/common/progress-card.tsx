import { useTranslation } from "next-i18next";

interface Props {
	soldProduct?: number;
	totalProduct?: number;
}

const ProgressCard: React.FC<Props> = ({
	soldProduct = 0,
	totalProduct = 0,
}) => {
	const progressBar = (100 / totalProduct) * soldProduct;
	const { t } = useTranslation("common");
	return (
		<div>
			<div className="flex justify-between items-center mb-2.5 md:mb-3 xl:mb-2.5 2xl:mb-4">
				<div className="text-body text-xs md:text-sm leading-6 md:leading-7">
					{t("text-sold")} :&nbsp;
					<span className="text-heading">{soldProduct}</span>
				</div>
				<div className="text-body text-xs md:text-sm leading-6 md:leading-7">
					{t("text-available")} :&nbsp;
					<span className="text-heading">{totalProduct - soldProduct}</span>
				</div>
			</div>
			<div className="relative w-full h-2.5 lg:h-3 2xl:h-4 bg-gray-100 rounded-full overflow-hidden">
				<div
					className="absolute h-full bg-heading"
					style={{ width: `${Math.round(progressBar)}%` }}
				/>
			</div>
		</div>
	);
};

export default ProgressCard;
