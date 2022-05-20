import {
  Maybe,
  ProductStatus,
  QueryCategoriesHasTypeColumn,
  QueryProductsHasAuthorColumn,
  QueryProductsHasManufacturerColumn,
  QueryProductsHasTagsColumn,
  QueryProductsHasTypeColumn,
  QueryProductsOrderByColumn,
  SortOrder,
  SqlOperator,
} from '__generated__/__types__';
export interface IGetProducts {
  type?: Maybe<string>;
  limit: number;
  text?: string;
  shop_id?: number;
  categories?: string;
  author?: string;
  page?: number;
  status?: ProductStatus;
  orderBy?: QueryProductsOrderByColumn;
  sortedBy?: SortOrder;
  manufacturer?: string;
  tags?: string;
  price?: string;
  searchQuery?: string;
}

export const getProducts = ({
  searchQuery,
  type,
  limit,
  text,
  categories,
  shop_id,
  price,
  manufacturer,
  author,
  tags,
  page = 1,
  status = ProductStatus.Publish,
  orderBy = QueryProductsOrderByColumn.CreatedAt,
  sortedBy = SortOrder.Asc,
}: IGetProducts) => {
  return {
    ...(!shop_id &&
      !author &&
      !manufacturer &&
      type && {
        hasType: {
          column: QueryProductsHasTypeColumn.Slug,
          operator: SqlOperator.Eq,
          value: type,
        },
      }),
    ...(shop_id && { shop_id: shop_id }),
    ...(text && { text: `%${text}%` }),
    ...(searchQuery && { text: `%${searchQuery}%` }),
    ...(categories && {
      hasCategories: {
        column: QueryCategoriesHasTypeColumn.Slug,
        operator: SqlOperator.In,
        value: categories.split(','),
      },
    }),
    ...(manufacturer && {
      hasManufacturer: {
        column: QueryProductsHasManufacturerColumn.Slug,
        operator: SqlOperator.In,
        value: manufacturer.split(','),
      },
    }),
    ...(tags && {
      hasTags: {
        column: QueryProductsHasTagsColumn.Slug,
        operator: SqlOperator.In,
        value: tags.split(','),
      },
    }),
    ...(author && {
      hasAuthor: {
        column: QueryProductsHasAuthorColumn.Slug,
        operator: SqlOperator.In,
        value: author.split(','),
      },
    }),
    ...(orderBy && {
      orderBy: [{ column: orderBy.toUpperCase(), order: sortedBy }],
    }),
    page,
    status,
    first: limit,
    ...(price && {
      min_price: {
        from: +price.split(',')[0],
        to: +price.split(',')[1],
      },
    }),
  };
};
