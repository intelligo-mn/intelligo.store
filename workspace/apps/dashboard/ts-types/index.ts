export enum PATH {
  PRODUCTS = "products",
  POPULAR_PRODUCTS = "popular-products",
  CATEGORIES = "categories",
  ORDERS = "orders",
  ORDER_STATUS = "order_status",
  COUPONS = "coupons",
  USERS = "users",
  ME = "me",
  TOKEN = "token",
  REGISTER = "register",
  CHECKOUT = "checkout/verify",
  ADDRESS = "address",
  TYPE = "types",
  CHANGE_PASSWORD = "change-password",
  FORGET_PASSWORD = "forget-password",
  VERIFY_FORGET_PASSWORD_TOKEN = "verify-forget-password-token",
  RESET_PASSWORD = "reset-password",
  LOGOUT = "logout",
  ANALYTICS = "analytics",
  SETTINGS = "settings",
  ATTACHMENTS = "attachments",
  TAXES = "taxes",
  SHIPPING = "shipping",
  BLOCK_USER = "users/ban-user",
  UNBLOCK_USER = "users/active-user",
}

export enum LIMIT {
  TEN = 10,
}

export enum PRODUCT_STATUS {
  PUBLISH = "publish",
  DRAFT = "draft",
}

export enum SHOP_TYPE {
  GROCERY = "grocery",
  MAKEUP = "makeup",
  BAGS = "bags",
  BOOK = "book",
  MEDICINE = "medicine",
  FURNITURE = "furniture",
  CLOTHING = "clothing",
  BAKERY = "bakery",
}

export enum SORT_TYPE {
  ASC = "asc",
  DESC = "desc",
}
export enum SEARCH_JOIN {
  AND = "and",
  OR = "or",
}

export enum OrderField {
  CreatedAt = "created_at",
  UpdatedAt = "updated_at",
}
