import {
  Maybe,
  QueryCategoriesHasTypeColumn,
  QueryCategoriesOrderByColumn,
  SortOrder,
  SqlOperator,
} from '__generated__/__types__';

export interface IGetCategory {
  type: Maybe<string> | undefined;
  limit?: number;
  name?: string;
  parent?: string | null;
  page?: number;
  orderField?: QueryCategoriesOrderByColumn;
  sortOrder?: SortOrder;
}

export const getCategories = ({
  type,
  limit,
  name,
  parent,
  page = 1,
  orderField,
  sortOrder = SortOrder.Desc,
}: IGetCategory) => {
  return {
    ...(type && {
      hasType: {
        column: QueryCategoriesHasTypeColumn.Slug,
        operator: SqlOperator.Eq,
        value: type,
      },
    }),
    ...(orderField && { orderBy: [{ column: orderField, order: sortOrder }] }),
    ...(name && { name }),
    ...(parent !== undefined && { parent }),
    page,
    first: limit,
  };
};
