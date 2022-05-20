import Select from "@components/ui/select/select";
import Label from "@components/ui/label";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import cn from "classnames";
import { SortOrder } from "__generated__/__types__";
interface Props {
  className?: string;
  showLabel?: boolean;
  refetch: Function;
  options: {
    value: string;
    label: string;
  }[];
}

const SortFormGql: React.FC<Props> = ({
  options,
  refetch,
  className,
  showLabel = true,
}) => {
  const { t } = useTranslation("common");
  const [order, setOrder] = useState<SortOrder>(SortOrder.Desc);
  const [column, setColumn] = useState<string>();
  function onOrderChange({ value }: { value: string }) {
    setColumn(value);
    refetch({
      orderBy: [
        {
          column: value,
          order,
        },
      ],
    });
  }

  function onSortChange({ value }: { value: SortOrder }) {
    setOrder(value);
    refetch({
      orderBy: [
        {
          column,
          order: value,
        },
      ],
    });
  }

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

      {column && (
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
      )}
    </div>
  );
};

export default SortFormGql;
