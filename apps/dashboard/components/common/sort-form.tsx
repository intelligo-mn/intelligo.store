import Select from "@components/ui/select/select";
import cn from "classnames";
import Label from "@components/ui/label";
import { useTranslation } from "next-i18next";

interface Props {
  className?: string;
  showLabel?: boolean;
  refetch: Function;
  options: {
    id?: number;
    value: string;
    label: string;
  }[];
}

const SortForm: React.FC<Props> = ({
  refetch,
  options,
  className,
  showLabel = true,
}) => {
  const { t } = useTranslation();
  function onSortChange({ value }: { value: string }) {
    refetch({
      page: 1,
      sortedBy: value,
    });
  }
  function onOrderChange({ value }: { value: string }) {
    refetch({
      page: 1,
      orderBy: value,
    });
  }

  // const ascDesc = function onAscDescChange({ value }: { value: string }) {
  //   refetch({
  //     page: 1,
  //     sortedBy: value,
  //   });
  // }

  return (
    <div className={cn("flex items-end w-full", className)}>
      <div className="w-full">
        {showLabel && <Label>{t("filter-by-order")}</Label>}
        <Select
          options={options}
          onChange={onOrderChange}
          name="orderBy"
          placeholder={t("filter-by-order-placeholder")}
        />
      </div>

      <div className="w-[150px] ms-5">
        <Select
          options={[
            { id: 1, value: "ASC", label: "ASC" },
            { id: 2, value: "DESC", label: "DESC" },
          ]}
          onChange={onSortChange}
          defaultValue={{ id: 1, value: "DESC", label: "DESC" }}
          name="sortedBy"
        />
      </div>
    </div>
  );
};

export default SortForm;
