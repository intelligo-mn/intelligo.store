type Props = {
  iconList: any;
  iconName: string;
  [key: string]: unknown;
};
export const getIcon = ({ iconList, iconName, ...rest }: Props) => {
  const TagName = iconList[iconName];
  return !!TagName ? <TagName {...rest} /> : null;
};
