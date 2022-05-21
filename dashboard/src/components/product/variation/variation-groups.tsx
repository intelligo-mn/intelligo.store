import Attribute from "@components/ui/attribute";
import Scrollbar from "@components/ui/scrollbar";
import { useAttributes } from "./attributes.context";

interface Props {
  variations: any;
}
const VariationGroups: React.FC<Props> = ({ variations }) => {
  const { attributes, setAttributes } = useAttributes();
  const replaceHyphens = (str: string) => {
    return str.replace(/-/g, " ");
  };
  return (
    <>
      {Object.keys(variations).map((variationName, index) => (
        <div
          className="py-4 border-b border-border-200  border-opacity-70 first:pt-0 flex items-center last:pb-0 last:border-b-0"
          key={index}
        >
          <span className="text-sm font-semibold text-heading leading-none capitalize me-4 min-w-[60px] inline-block whitespace-nowrap">
            {replaceHyphens(variationName)}:
          </span>
          <div className="w-full overflow-hidden -mb-5">
            <Scrollbar className="w-full pb-5">
              <div className="w-full flex space-s-4">
                {variations[variationName].map((attribute: any) => (
                  <Attribute
                    className={variationName}
                    color={attribute.meta ? attribute.meta : attribute?.value}
                    active={attributes[variationName] === attribute.value}
                    value={attribute.value}
                    key={attribute.id}
                    onClick={() =>
                      setAttributes((prev: any) => ({
                        ...prev,
                        [variationName]: attribute.value,
                      }))
                    }
                  />
                ))}
              </div>
            </Scrollbar>
          </div>
        </div>
      ))}
    </>
  );
};

export default VariationGroups;
