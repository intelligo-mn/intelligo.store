import SelectInput from "@components/ui/select-input";
import Label from "@components/ui/label";
import { Control } from "react-hook-form";
import { useTranslation } from "next-i18next";
import { useAuthorsQuery } from "@data/author/use-authors.query";

interface Props {
  control: Control<any>;
}

const ProductAuthorInput = ({ control }: Props) => {
  const { t } = useTranslation();

  const { data, isLoading: loading } = useAuthorsQuery({
    limit: 1000,
    is_approved: true,
  });

  return (
    <div className="mb-5">
      <Label>{t("common:text-authors")}</Label>
      <SelectInput
        name="author"
        control={control}
        getOptionLabel={(option: any) => option.name}
        getOptionValue={(option: any) => option.id}
        // @ts-ignore
        options={data?.authors?.data ?? []}
        isLoading={loading}
      />
    </div>
  );
};

export default ProductAuthorInput;
