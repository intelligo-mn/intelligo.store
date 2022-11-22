import { CheckBox } from "@components/ui/checkbox";
import { useRouter } from "next/router";
import React from "react";
import { AttributeValue, Attribute } from "@framework/types";

type Props = {
  attribute: Attribute
}

export const VariationFilter: React.FC<Props> = ({ attribute }) => {
  const router = useRouter();
  const { pathname, query } = router;
  const selectedAttribute = query?.variations ? (query.variations as string).split(",") : [];
  const [formState, setFormState] = React.useState<string[]>(selectedAttribute);

  React.useEffect(() => {
    setFormState(selectedAttribute);
  }, [query?.variations]);

  function handleItemClick(e: React.FormEvent<HTMLInputElement>): void {
    const { value } = e.currentTarget;
    let currentFormState = formState.includes(value)
      ? formState.filter((i) => i !== value)
      : [...formState, value];
    // setFormState(currentFormState);
    const { variations, ...restQuery } = query;
    router.push(
      {
        pathname,
        query: {
          ...restQuery,
          ...(!!currentFormState.length
            ? { variations: currentFormState.join(",") }
            : {}),
        },
      },
      undefined,
      { scroll: false }
    );
  }

  return (
    <div className="block border-b border-gray-300 pb-7 mb-7">
      <h3 className="text-heading text-sm md:text-base font-semibold mb-7">
        {attribute.name}
      </h3>
      <div className="mt-2 flex flex-col space-y-4">
        {attribute.values?.map((item: AttributeValue) => (
          <CheckBox
            key={item.id}
            label={item.value}
            name={item.value.toLowerCase()}
            checked={formState.includes(item.value)}
            value={item.value}
            onChange={handleItemClick}
          />
        ))}
      </div>
    </div>
  );
};
