import type {
  Attachment,
  Author,
  AuthorPaginator,
  AuthorQueryOptions,
  AuthResponse,
  CategoryPaginator,
  CategoryQueryOptions,
  ChangePasswordUserInput,
  CheckoutVerificationInput,
  CouponPaginator,
  CouponQueryOptions,
  CreateContactUsInput,
  CreateOrderInput,
  CreateRefundInput,
  DownloadableFilePaginator,
  ForgotPasswordUserInput,
  LoginUserInput,
  Manufacturer,
  ManufacturerPaginator,
  ManufacturerQueryOptions,
  Order,
  OrderPaginator,
  OrderQueryOptions,
  OrderStatusPaginator,
  OtpLoginInputType,
  OTPResponse,
  PasswordChangeResponse,
  PopularProductQueryOptions,
  Product,
  ProductPaginator,
  ProductQueryOptions,
  QueryOptions,
  Refund,
  RefundPaginator,
  RegisterUserInput,
  ResetPasswordUserInput,
  SendOtpCodeInputType,
  Settings,
  Shop,
  ShopPaginator,
  ShopQueryOptions,
  SocialLoginInputType,
  TagPaginator,
  TagQueryOptions,
  Type,
  TypeQueryOptions,
  UpdateUserInput,
  User,
  VerifiedCheckoutData,
  VerifyCouponInputType,
  VerifyCouponResponse,
  VerifyForgotPasswordUserInput,
  VerifyOtpInputType,
} from '@/types';
import { API_ENDPOINTS } from './api-endpoints';
import { HttpClient } from './http-client';
import { OTPVerifyResponse } from '@/types';

class Client {
  products = {
    all: ({
      type,
      categories,
      name,
      shop_id,
      author,
      manufacturer,
      min_price,
      max_price,
      tags,
      ...params
    }: Partial<ProductQueryOptions>) =>
      HttpClient.get<ProductPaginator>(API_ENDPOINTS.PRODUCTS, {
        searchJoin: 'and',
        with: 'type;author',
        ...params,
        search: HttpClient.formatSearchParams({
          type,
          categories,
          name,
          shop_id,
          author,
          manufacturer,
          min_price,
          max_price,
          tags,
        }),
      }),
    popular: (params: Partial<PopularProductQueryOptions>) =>
      HttpClient.get<Product[]>(API_ENDPOINTS.PRODUCTS_POPULAR, params),
    get: (slug: string) =>
      HttpClient.get<Product>(`${API_ENDPOINTS.PRODUCTS}/${slug}`),
  };
  categories = {
    all: ({ type, ...params }: Partial<CategoryQueryOptions>) =>
      HttpClient.get<CategoryPaginator>(API_ENDPOINTS.CATEGORIES, {
        searchJoin: 'and',
        ...params,
        ...(type && { search: HttpClient.formatSearchParams({ type }) }),
      }),
  };
  tags = {
    all: (params: Partial<TagQueryOptions>) =>
      HttpClient.get<TagPaginator>(API_ENDPOINTS.TAGS, params),
  };
  types = {
    all: (params?: Partial<TypeQueryOptions>) =>
      HttpClient.get<Type[]>(API_ENDPOINTS.TYPES, params),
    get: (slug: string) =>
      HttpClient.get<Type>(`${API_ENDPOINTS.TYPES}/${slug}`),
  };
  shops = {
    all: (params: Partial<ShopQueryOptions>) =>
      HttpClient.get<ShopPaginator>(API_ENDPOINTS.SHOPS, params),
    get: (slug: string) =>
      HttpClient.get<Shop>(`${API_ENDPOINTS.SHOPS}/${slug}`),
  };
  authors = {
    all: (params: Partial<AuthorQueryOptions>) =>
      HttpClient.get<AuthorPaginator>(API_ENDPOINTS.AUTHORS, params),
    top: (params: Pick<QueryOptions, 'limit'>) =>
      HttpClient.get<Author[]>(API_ENDPOINTS.AUTHORS_TOP, params),
    get: (slug: string) =>
      HttpClient.get<Author>(`${API_ENDPOINTS.AUTHORS}/${slug}`),
  };
  manufacturers = {
    all: (params: Partial<ManufacturerQueryOptions>) =>
      HttpClient.get<ManufacturerPaginator>(
        API_ENDPOINTS.MANUFACTURERS,
        params
      ),
    top: (params: Pick<QueryOptions, 'limit'>) =>
      HttpClient.get<Manufacturer[]>(API_ENDPOINTS.MANUFACTURERS_TOP, params),
    get: (slug: string) =>
      HttpClient.get<Manufacturer>(`${API_ENDPOINTS.MANUFACTURERS}/${slug}`),
  };
  coupons = {
    all: (params: Partial<CouponQueryOptions>) =>
      HttpClient.get<CouponPaginator>(API_ENDPOINTS.COUPONS, params),
    verify: (input: VerifyCouponInputType) =>
      HttpClient.post<VerifyCouponResponse>(
        API_ENDPOINTS.COUPONS_VERIFY,
        input
      ),
  };
  orders = {
    all: (params: Partial<OrderQueryOptions>) =>
      HttpClient.get<OrderPaginator>(API_ENDPOINTS.ORDERS, params),
    get: (tracking_number: string) =>
      HttpClient.get<Order>(`${API_ENDPOINTS.ORDERS}/${tracking_number}`),
    create: (input: CreateOrderInput) =>
      HttpClient.post<Order>(API_ENDPOINTS.ORDERS, input),
    statuses: (params: Pick<QueryOptions, 'limit'>) =>
      HttpClient.get<OrderStatusPaginator>(API_ENDPOINTS.ORDERS_STATUS, params),
    refunds: (params: Pick<QueryOptions, 'limit'>) =>
      HttpClient.get<RefundPaginator>(API_ENDPOINTS.ORDERS_REFUNDS, params),
    createRefund: (input: CreateRefundInput) =>
      HttpClient.post<Refund>(API_ENDPOINTS.ORDERS_REFUNDS, input),

    downloadable: (query?: OrderQueryOptions) =>
      HttpClient.get<DownloadableFilePaginator>(
        API_ENDPOINTS.ORDERS_DOWNLOADS,
        query
      ),
    verify: (input: CheckoutVerificationInput) =>
      HttpClient.post<VerifiedCheckoutData>(
        API_ENDPOINTS.ORDERS_CHECKOUT_VERIFY,
        input
      ),
    generateDownloadLink: (input: { digital_file_id: string }) =>
      HttpClient.post<string>(
        API_ENDPOINTS.GENERATE_DOWNLOADABLE_PRODUCT_LINK,
        input
      ),
  };
  users = {
    me: () => HttpClient.get<User>(API_ENDPOINTS.USERS_ME),
    update: (user: UpdateUserInput) =>
      HttpClient.put<User>(`${API_ENDPOINTS.USERS}/${user.id}`, user),
    login: (input: LoginUserInput) =>
      HttpClient.post<AuthResponse>(API_ENDPOINTS.USERS_LOGIN, input),
    socialLogin: (input: SocialLoginInputType) =>
      HttpClient.post<AuthResponse>(API_ENDPOINTS.SOCIAL_LOGIN, input),
    sendOtpCode: (input: SendOtpCodeInputType) =>
      HttpClient.post<OTPResponse>(API_ENDPOINTS.SEND_OTP_CODE, input),
    verifyOtpCode: (input: VerifyOtpInputType) =>
      HttpClient.post<OTPVerifyResponse>(API_ENDPOINTS.VERIFY_OTP_CODE, input),
    OtpLogin: (input: OtpLoginInputType) =>
      HttpClient.post<AuthResponse>(API_ENDPOINTS.OTP_LOGIN, input),
    register: (input: RegisterUserInput) =>
      HttpClient.post<AuthResponse>(API_ENDPOINTS.USERS_REGISTER, input),
    forgotPassword: (input: ForgotPasswordUserInput) =>
      HttpClient.post<PasswordChangeResponse>(
        API_ENDPOINTS.USERS_FORGOT_PASSWORD,
        input
      ),
    verifyForgotPasswordToken: (input: VerifyForgotPasswordUserInput) =>
      HttpClient.post<PasswordChangeResponse>(
        API_ENDPOINTS.USERS_VERIFY_FORGOT_PASSWORD_TOKEN,
        input
      ),
    resetPassword: (input: ResetPasswordUserInput) =>
      HttpClient.post<PasswordChangeResponse>(
        API_ENDPOINTS.USERS_RESET_PASSWORD,
        input
      ),
    changePassword: (input: ChangePasswordUserInput) =>
      HttpClient.post<PasswordChangeResponse>(
        API_ENDPOINTS.USERS_CHANGE_PASSWORD,
        input
      ),
    logout: () => HttpClient.post<boolean>(API_ENDPOINTS.USERS_LOGOUT, {}),
    deleteAddress: ({ id }: { id: string }) =>
      HttpClient.delete<boolean>(`${API_ENDPOINTS.USERS_ADDRESS}/${id}`),
    subscribe: (input: { email: string }) =>
      HttpClient.post<any>(API_ENDPOINTS.USERS_SUBSCRIBE_TO_NEWSLETTER, input),
    contactUs: (input: CreateContactUsInput) =>
      HttpClient.post<any>(API_ENDPOINTS.USERS_CONTACT_US, input),
  };
  settings = {
    //FIXME: check this async function
    all: async () => HttpClient.get<Settings>(API_ENDPOINTS.SETTINGS),
    upload: (input: File[]) => {
      let formData = new FormData();
      input.forEach((attachment) => {
        formData.append('attachment[]', attachment);
      });
      return HttpClient.post<Attachment[]>(API_ENDPOINTS.UPLOADS, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
  };
}

export default new Client();
