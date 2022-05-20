import omit from "lodash/omit";
interface Typename {
  __typename?: string;
}
export function omitTypename<T extends Typename>(data: T | undefined | null) {
  if (data?.__typename) {
    return omit(data, "__typename");
  }
  return data;
}
