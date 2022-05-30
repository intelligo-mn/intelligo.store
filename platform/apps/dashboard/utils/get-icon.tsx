type Props = {
  iconList: any;
  iconName: string;
  [key: string]: unknown;
};
export const getIcon = ({ iconList, iconName, ...rest }: Props) => {
  const TagName = iconList[iconName];
  return !!TagName ? (
    <TagName {...rest} />
  ) : (
    <p className="text-sm text-red-500">{iconName} is not a valid icon</p>
  );
};
