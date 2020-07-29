// tslint:disable
export type Maybe<T> = T | null;

export interface OrderListOptions {
    filter?: Maybe<OrderFilterParameter>;

    skip?: Maybe<number>;

    sort?: Maybe<OrderSortParameter>;

    take?: Maybe<number>;
}

export interface OrderFilterParameter {
    active?: Maybe<BooleanOperators>;

    code?: Maybe<StringOperators>;

    createdAt?: Maybe<DateOperators>;

    currencyCode?: Maybe<StringOperators>;

    shipping?: Maybe<NumberOperators>;

    shippingWithTax?: Maybe<NumberOperators>;

    state?: Maybe<StringOperators>;

    subTotal?: Maybe<NumberOperators>;

    subTotalBeforeTax?: Maybe<NumberOperators>;

    total?: Maybe<NumberOperators>;

    totalBeforeTax?: Maybe<NumberOperators>;

    updatedAt?: Maybe<DateOperators>;
}

export interface BooleanOperators {
    eq?: Maybe<boolean>;
}

export interface StringOperators {
    contains?: Maybe<string>;

    eq?: Maybe<string>;
}

export interface DateOperators {
    after?: Maybe<DateTime>;

    before?: Maybe<DateTime>;

    between?: Maybe<DateRange>;

    eq?: Maybe<DateTime>;
}

export interface DateRange {
    end: DateTime;

    start: DateTime;
}

export interface NumberOperators {
    between?: Maybe<NumberRange>;

    eq?: Maybe<number>;

    gt?: Maybe<number>;

    gte?: Maybe<number>;

    lt?: Maybe<number>;

    lte?: Maybe<number>;
}

export interface NumberRange {
    end: number;

    start: number;
}

export interface OrderSortParameter {
    code?: Maybe<SortOrder>;

    createdAt?: Maybe<SortOrder>;

    id?: Maybe<SortOrder>;

    shipping?: Maybe<SortOrder>;

    shippingWithTax?: Maybe<SortOrder>;

    state?: Maybe<SortOrder>;

    subTotal?: Maybe<SortOrder>;

    subTotalBeforeTax?: Maybe<SortOrder>;

    total?: Maybe<SortOrder>;

    totalBeforeTax?: Maybe<SortOrder>;

    updatedAt?: Maybe<SortOrder>;
}

export interface HistoryEntryListOptions {
    filter?: Maybe<HistoryEntryFilterParameter>;

    skip?: Maybe<number>;

    sort?: Maybe<HistoryEntrySortParameter>;

    take?: Maybe<number>;
}

export interface HistoryEntryFilterParameter {
    createdAt?: Maybe<DateOperators>;

    isPublic?: Maybe<BooleanOperators>;

    type?: Maybe<StringOperators>;

    updatedAt?: Maybe<DateOperators>;
}

export interface HistoryEntrySortParameter {
    createdAt?: Maybe<SortOrder>;

    id?: Maybe<SortOrder>;

    updatedAt?: Maybe<SortOrder>;
}

export interface CustomerListOptions {
    filter?: Maybe<CustomerFilterParameter>;

    skip?: Maybe<number>;

    sort?: Maybe<CustomerSortParameter>;

    take?: Maybe<number>;
}

export interface CustomerFilterParameter {
    createdAt?: Maybe<DateOperators>;

    emailAddress?: Maybe<StringOperators>;

    firstName?: Maybe<StringOperators>;

    lastName?: Maybe<StringOperators>;

    phoneNumber?: Maybe<StringOperators>;

    title?: Maybe<StringOperators>;

    updatedAt?: Maybe<DateOperators>;
}

export interface CustomerSortParameter {
    createdAt?: Maybe<SortOrder>;

    emailAddress?: Maybe<SortOrder>;

    firstName?: Maybe<SortOrder>;

    id?: Maybe<SortOrder>;

    lastName?: Maybe<SortOrder>;

    phoneNumber?: Maybe<SortOrder>;

    title?: Maybe<SortOrder>;

    updatedAt?: Maybe<SortOrder>;
}

export interface ProductVariantListOptions {
    filter?: Maybe<ProductVariantFilterParameter>;

    skip?: Maybe<number>;

    sort?: Maybe<ProductVariantSortParameter>;

    take?: Maybe<number>;
}

export interface ProductVariantFilterParameter {
    createdAt?: Maybe<DateOperators>;

    currencyCode?: Maybe<StringOperators>;

    languageCode?: Maybe<StringOperators>;

    name?: Maybe<StringOperators>;

    price?: Maybe<NumberOperators>;

    priceIncludesTax?: Maybe<BooleanOperators>;

    priceWithTax?: Maybe<NumberOperators>;

    sku?: Maybe<StringOperators>;

    updatedAt?: Maybe<DateOperators>;
}

export interface ProductVariantSortParameter {
    createdAt?: Maybe<SortOrder>;

    id?: Maybe<SortOrder>;

    name?: Maybe<SortOrder>;

    price?: Maybe<SortOrder>;

    priceWithTax?: Maybe<SortOrder>;

    productId?: Maybe<SortOrder>;

    sku?: Maybe<SortOrder>;

    updatedAt?: Maybe<SortOrder>;
}

export interface CollectionListOptions {
    filter?: Maybe<CollectionFilterParameter>;

    skip?: Maybe<number>;

    sort?: Maybe<CollectionSortParameter>;

    take?: Maybe<number>;
}

export interface CollectionFilterParameter {
    createdAt?: Maybe<DateOperators>;

    description?: Maybe<StringOperators>;

    languageCode?: Maybe<StringOperators>;

    name?: Maybe<StringOperators>;

    position?: Maybe<NumberOperators>;

    slug?: Maybe<StringOperators>;

    updatedAt?: Maybe<DateOperators>;
}

export interface CollectionSortParameter {
    createdAt?: Maybe<SortOrder>;

    description?: Maybe<SortOrder>;

    id?: Maybe<SortOrder>;

    name?: Maybe<SortOrder>;

    position?: Maybe<SortOrder>;

    slug?: Maybe<SortOrder>;

    updatedAt?: Maybe<SortOrder>;
}

export interface ProductListOptions {
    filter?: Maybe<ProductFilterParameter>;

    skip?: Maybe<number>;

    sort?: Maybe<ProductSortParameter>;

    take?: Maybe<number>;
}

export interface ProductFilterParameter {
    createdAt?: Maybe<DateOperators>;

    description?: Maybe<StringOperators>;

    languageCode?: Maybe<StringOperators>;

    name?: Maybe<StringOperators>;

    slug?: Maybe<StringOperators>;

    updatedAt?: Maybe<DateOperators>;
}

export interface ProductSortParameter {
    createdAt?: Maybe<SortOrder>;

    description?: Maybe<SortOrder>;

    id?: Maybe<SortOrder>;

    name?: Maybe<SortOrder>;

    slug?: Maybe<SortOrder>;

    updatedAt?: Maybe<SortOrder>;
}

export interface SearchInput {
    collectionId?: Maybe<string>;

    facetValueIds?: Maybe<string[]>;

    facetValueOperator?: Maybe<LogicalOperator>;

    groupByProduct?: Maybe<boolean>;

    skip?: Maybe<number>;

    sort?: Maybe<SearchResultSortParameter>;

    take?: Maybe<number>;

    term?: Maybe<string>;
}

export interface SearchResultSortParameter {
    name?: Maybe<SortOrder>;

    price?: Maybe<SortOrder>;
}
/** Passed as input to the `addPaymentToOrder` mutation. */
export interface PaymentInput {
    /** This field should contain arbitrary data passed to the specified PaymentMethodHandler's `createPayment()` method as the "metadata" argument. For example, it could contain an ID for the payment and other data generated by the payment provider. */
    metadata: Json;
    /** This field should correspond to the `code` property of a PaymentMethodHandler. */
    method: string;
}

export interface CreateAddressInput {
    city?: Maybe<string>;

    company?: Maybe<string>;

    countryCode: string;

    customFields?: Maybe<Json>;

    defaultBillingAddress?: Maybe<boolean>;

    defaultShippingAddress?: Maybe<boolean>;

    fullName?: Maybe<string>;

    phoneNumber?: Maybe<string>;

    postalCode?: Maybe<string>;

    province?: Maybe<string>;

    streetLine1: string;

    streetLine2?: Maybe<string>;
}

export interface RegisterCustomerInput {
    emailAddress: string;

    firstName?: Maybe<string>;

    lastName?: Maybe<string>;

    password?: Maybe<string>;

    title?: Maybe<string>;
}

export interface CreateCustomerInput {
    customFields?: Maybe<Json>;

    emailAddress: string;

    firstName: string;

    lastName: string;

    phoneNumber?: Maybe<string>;

    title?: Maybe<string>;
}

export interface UpdateCustomerInput {
    customFields?: Maybe<Json>;

    firstName?: Maybe<string>;

    lastName?: Maybe<string>;

    phoneNumber?: Maybe<string>;

    title?: Maybe<string>;
}

export interface UpdateAddressInput {
    city?: Maybe<string>;

    company?: Maybe<string>;

    countryCode?: Maybe<string>;

    customFields?: Maybe<Json>;

    defaultBillingAddress?: Maybe<boolean>;

    defaultShippingAddress?: Maybe<boolean>;

    fullName?: Maybe<string>;

    id: string;

    phoneNumber?: Maybe<string>;

    postalCode?: Maybe<string>;

    province?: Maybe<string>;

    streetLine1?: Maybe<string>;

    streetLine2?: Maybe<string>;
}

export interface ConfigArgInput {
    name: string;

    type: string;

    value: string;
}

export interface ConfigurableOperationInput {
    arguments: ConfigArgInput[];

    code: string;
}
/** @description ISO 4217 currency code @docsCategory common */
export enum CurrencyCode {
    AED = "AED",
    AFN = "AFN",
    ALL = "ALL",
    AMD = "AMD",
    ANG = "ANG",
    AOA = "AOA",
    ARS = "ARS",
    AUD = "AUD",
    AWG = "AWG",
    AZN = "AZN",
    BAM = "BAM",
    BBD = "BBD",
    BDT = "BDT",
    BGN = "BGN",
    BHD = "BHD",
    BIF = "BIF",
    BMD = "BMD",
    BND = "BND",
    BOB = "BOB",
    BRL = "BRL",
    BSD = "BSD",
    BTN = "BTN",
    BWP = "BWP",
    BYN = "BYN",
    BZD = "BZD",
    CAD = "CAD",
    CDF = "CDF",
    CHF = "CHF",
    CLP = "CLP",
    CNY = "CNY",
    COP = "COP",
    CRC = "CRC",
    CUC = "CUC",
    CUP = "CUP",
    CVE = "CVE",
    CZK = "CZK",
    DJF = "DJF",
    DKK = "DKK",
    DOP = "DOP",
    DZD = "DZD",
    EGP = "EGP",
    ERN = "ERN",
    ETB = "ETB",
    EUR = "EUR",
    FJD = "FJD",
    FKP = "FKP",
    GBP = "GBP",
    GEL = "GEL",
    GHS = "GHS",
    GIP = "GIP",
    GMD = "GMD",
    GNF = "GNF",
    GTQ = "GTQ",
    GYD = "GYD",
    HKD = "HKD",
    HNL = "HNL",
    HRK = "HRK",
    HTG = "HTG",
    HUF = "HUF",
    IDR = "IDR",
    ILS = "ILS",
    INR = "INR",
    IQD = "IQD",
    IRR = "IRR",
    ISK = "ISK",
    JMD = "JMD",
    JOD = "JOD",
    JPY = "JPY",
    KES = "KES",
    KGS = "KGS",
    KHR = "KHR",
    KMF = "KMF",
    KPW = "KPW",
    KRW = "KRW",
    KWD = "KWD",
    KYD = "KYD",
    KZT = "KZT",
    LAK = "LAK",
    LBP = "LBP",
    LKR = "LKR",
    LRD = "LRD",
    LSL = "LSL",
    LYD = "LYD",
    MAD = "MAD",
    MDL = "MDL",
    MGA = "MGA",
    MKD = "MKD",
    MMK = "MMK",
    MNT = "MNT",
    MOP = "MOP",
    MRU = "MRU",
    MUR = "MUR",
    MVR = "MVR",
    MWK = "MWK",
    MXN = "MXN",
    MYR = "MYR",
    MZN = "MZN",
    NAD = "NAD",
    NGN = "NGN",
    NIO = "NIO",
    NOK = "NOK",
    NPR = "NPR",
    NZD = "NZD",
    OMR = "OMR",
    PAB = "PAB",
    PEN = "PEN",
    PGK = "PGK",
    PHP = "PHP",
    PKR = "PKR",
    PLN = "PLN",
    PYG = "PYG",
    QAR = "QAR",
    RON = "RON",
    RSD = "RSD",
    RUB = "RUB",
    RWF = "RWF",
    SAR = "SAR",
    SBD = "SBD",
    SCR = "SCR",
    SDG = "SDG",
    SEK = "SEK",
    SGD = "SGD",
    SHP = "SHP",
    SLL = "SLL",
    SOS = "SOS",
    SRD = "SRD",
    SSP = "SSP",
    STN = "STN",
    SVC = "SVC",
    SYP = "SYP",
    SZL = "SZL",
    THB = "THB",
    TJS = "TJS",
    TMT = "TMT",
    TND = "TND",
    TOP = "TOP",
    TRY = "TRY",
    TTD = "TTD",
    TWD = "TWD",
    TZS = "TZS",
    UAH = "UAH",
    UGX = "UGX",
    USD = "USD",
    UYU = "UYU",
    UZS = "UZS",
    VES = "VES",
    VND = "VND",
    VUV = "VUV",
    WST = "WST",
    XAF = "XAF",
    XCD = "XCD",
    XOF = "XOF",
    XPF = "XPF",
    YER = "YER",
    ZAR = "ZAR",
    ZMW = "ZMW",
    ZWL = "ZWL"
}
/** @description Languages in the form of a ISO 639-1 language code with optional region or script modifier (e.g. de_AT). The selection available is based on the [Unicode CLDR summary list](https://unicode-org.github.io/cldr-staging/charts/37/summary/root.html) and includes the major spoken languages of the world and any widely-used variants. @docsCategory common */
export enum LanguageCode {
    af = "af",
    ak = "ak",
    am = "am",
    ar = "ar",
    as = "as",
    az = "az",
    be = "be",
    bg = "bg",
    bm = "bm",
    bn = "bn",
    bo = "bo",
    br = "br",
    bs = "bs",
    ca = "ca",
    ce = "ce",
    co = "co",
    cs = "cs",
    cu = "cu",
    cy = "cy",
    da = "da",
    de = "de",
    de_AT = "de_AT",
    de_CH = "de_CH",
    dz = "dz",
    ee = "ee",
    el = "el",
    en = "en",
    en_AU = "en_AU",
    en_CA = "en_CA",
    en_GB = "en_GB",
    en_US = "en_US",
    eo = "eo",
    es = "es",
    es_ES = "es_ES",
    es_MX = "es_MX",
    et = "et",
    eu = "eu",
    fa = "fa",
    fa_AF = "fa_AF",
    ff = "ff",
    fi = "fi",
    fo = "fo",
    fr = "fr",
    fr_CA = "fr_CA",
    fr_CH = "fr_CH",
    fy = "fy",
    ga = "ga",
    gd = "gd",
    gl = "gl",
    gu = "gu",
    gv = "gv",
    ha = "ha",
    he = "he",
    hi = "hi",
    hr = "hr",
    ht = "ht",
    hu = "hu",
    hy = "hy",
    ia = "ia",
    id = "id",
    ig = "ig",
    ii = "ii",
    is = "is",
    it = "it",
    ja = "ja",
    jv = "jv",
    ka = "ka",
    ki = "ki",
    kk = "kk",
    kl = "kl",
    km = "km",
    kn = "kn",
    ko = "ko",
    ks = "ks",
    ku = "ku",
    kw = "kw",
    ky = "ky",
    la = "la",
    lb = "lb",
    lg = "lg",
    ln = "ln",
    lo = "lo",
    lt = "lt",
    lu = "lu",
    lv = "lv",
    mg = "mg",
    mi = "mi",
    mk = "mk",
    ml = "ml",
    mn = "mn",
    mr = "mr",
    ms = "ms",
    mt = "mt",
    my = "my",
    nb = "nb",
    nd = "nd",
    ne = "ne",
    nl = "nl",
    nl_BE = "nl_BE",
    nn = "nn",
    ny = "ny",
    om = "om",
    or = "or",
    os = "os",
    pa = "pa",
    pl = "pl",
    ps = "ps",
    pt = "pt",
    pt_BR = "pt_BR",
    pt_PT = "pt_PT",
    qu = "qu",
    rm = "rm",
    rn = "rn",
    ro = "ro",
    ro_MD = "ro_MD",
    ru = "ru",
    rw = "rw",
    sa = "sa",
    sd = "sd",
    se = "se",
    sg = "sg",
    si = "si",
    sk = "sk",
    sl = "sl",
    sm = "sm",
    sn = "sn",
    so = "so",
    sq = "sq",
    sr = "sr",
    st = "st",
    su = "su",
    sv = "sv",
    sw = "sw",
    sw_CD = "sw_CD",
    ta = "ta",
    te = "te",
    tg = "tg",
    th = "th",
    ti = "ti",
    tk = "tk",
    to = "to",
    tr = "tr",
    tt = "tt",
    ug = "ug",
    uk = "uk",
    ur = "ur",
    uz = "uz",
    vi = "vi",
    vo = "vo",
    wo = "wo",
    xh = "xh",
    yi = "yi",
    yo = "yo",
    zh = "zh",
    zh_Hans = "zh_Hans",
    zh_Hant = "zh_Hant",
    zu = "zu"
}

export enum SortOrder {
    ASC = "ASC",
    DESC = "DESC"
}

export enum AdjustmentType {
    PROMOTION = "PROMOTION",
    PROMOTION_REFUND = "PROMOTION_REFUND",
    REFUND = "REFUND",
    SHIPPING = "SHIPPING",
    SHIPPING_REFUND = "SHIPPING_REFUND",
    TAX = "TAX",
    TAX_REFUND = "TAX_REFUND"
}
/** " @description Permissions for administrators and customers. Used to control access to GraphQL resolvers via the {@link Allow} decorator. @docsCategory common */
export enum Permission {
    Authenticated = "Authenticated",
    CreateAdministrator = "CreateAdministrator",
    CreateCatalog = "CreateCatalog",
    CreateCustomer = "CreateCustomer",
    CreateOrder = "CreateOrder",
    CreatePromotion = "CreatePromotion",
    CreateSettings = "CreateSettings",
    DeleteAdministrator = "DeleteAdministrator",
    DeleteCatalog = "DeleteCatalog",
    DeleteCustomer = "DeleteCustomer",
    DeleteOrder = "DeleteOrder",
    DeletePromotion = "DeletePromotion",
    DeleteSettings = "DeleteSettings",
    Owner = "Owner",
    Public = "Public",
    ReadAdministrator = "ReadAdministrator",
    ReadCatalog = "ReadCatalog",
    ReadCustomer = "ReadCustomer",
    ReadOrder = "ReadOrder",
    ReadPromotion = "ReadPromotion",
    ReadSettings = "ReadSettings",
    SuperAdmin = "SuperAdmin",
    UpdateAdministrator = "UpdateAdministrator",
    UpdateCatalog = "UpdateCatalog",
    UpdateCustomer = "UpdateCustomer",
    UpdateOrder = "UpdateOrder",
    UpdatePromotion = "UpdatePromotion",
    UpdateSettings = "UpdateSettings"
}

export enum HistoryEntryType {
    CUSTOMER_ADDED_TO_GROUP = "CUSTOMER_ADDED_TO_GROUP",
    CUSTOMER_ADDRESS_CREATED = "CUSTOMER_ADDRESS_CREATED",
    CUSTOMER_ADDRESS_DELETED = "CUSTOMER_ADDRESS_DELETED",
    CUSTOMER_ADDRESS_UPDATED = "CUSTOMER_ADDRESS_UPDATED",
    CUSTOMER_DETAIL_UPDATED = "CUSTOMER_DETAIL_UPDATED",
    CUSTOMER_EMAIL_UPDATE_REQUESTED = "CUSTOMER_EMAIL_UPDATE_REQUESTED",
    CUSTOMER_EMAIL_UPDATE_VERIFIED = "CUSTOMER_EMAIL_UPDATE_VERIFIED",
    CUSTOMER_NOTE = "CUSTOMER_NOTE",
    CUSTOMER_PASSWORD_RESET_REQUESTED = "CUSTOMER_PASSWORD_RESET_REQUESTED",
    CUSTOMER_PASSWORD_RESET_VERIFIED = "CUSTOMER_PASSWORD_RESET_VERIFIED",
    CUSTOMER_PASSWORD_UPDATED = "CUSTOMER_PASSWORD_UPDATED",
    CUSTOMER_REGISTERED = "CUSTOMER_REGISTERED",
    CUSTOMER_REMOVED_FROM_GROUP = "CUSTOMER_REMOVED_FROM_GROUP",
    CUSTOMER_VERIFIED = "CUSTOMER_VERIFIED",
    ORDER_CANCELLATION = "ORDER_CANCELLATION",
    ORDER_COUPON_APPLIED = "ORDER_COUPON_APPLIED",
    ORDER_COUPON_REMOVED = "ORDER_COUPON_REMOVED",
    ORDER_FULLFILLMENT = "ORDER_FULLFILLMENT",
    ORDER_NOTE = "ORDER_NOTE",
    ORDER_PAYMENT_TRANSITION = "ORDER_PAYMENT_TRANSITION",
    ORDER_REFUND_TRANSITION = "ORDER_REFUND_TRANSITION",
    ORDER_STATE_TRANSITION = "ORDER_STATE_TRANSITION"
}

export enum AssetType {
    BINARY = "BINARY",
    IMAGE = "IMAGE",
    VIDEO = "VIDEO"
}

export enum LogicalOperator {
    AND = "AND",
    OR = "OR"
}

export enum StockMovementType {
    ADJUSTMENT = "ADJUSTMENT",
    CANCELLATION = "CANCELLATION",
    RETURN = "RETURN",
    SALE = "SALE"
}

export enum DeletionResult {
    DELETED = "DELETED",
    NOT_DELETED = "NOT_DELETED"
}

/** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
export type DateTime = any;

/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type Json = any;

/** The `Upload` scalar type represents a file upload. */
export type Upload = any;

// ====================================================
// Documents
// ====================================================

export namespace UpdateAddress {
    export type Variables = {
        input: UpdateAddressInput;
    };

    export type Mutation = {
        __typename?: "Mutation";

        updateCustomerAddress: UpdateCustomerAddress;
    };

    export type UpdateCustomerAddress = Address.Fragment;
}

export namespace ChangePassword {
    export type Variables = {
        old: string;
        new: string;
    };

    export type Mutation = {
        __typename?: "Mutation";

        updateCustomerPassword: Maybe<boolean>;
    };
}

export namespace ChangeEmailAddress {
    export type Variables = {
        password: string;
        emailAddress: string;
    };

    export type Mutation = {
        __typename?: "Mutation";

        requestUpdateCustomerEmailAddress: Maybe<boolean>;
    };
}

export namespace UpdateCustomerDetails {
    export type Variables = {
        input: UpdateCustomerInput;
    };

    export type Mutation = {
        __typename?: "Mutation";

        updateCustomer: UpdateCustomer;
    };

    export type UpdateCustomer = {
        __typename?: "Customer";

        id: string;

        firstName: string;

        lastName: string;

        emailAddress: string;

        phoneNumber: Maybe<string>;
    };
}

export namespace GetAccountOverview {
    export type Variables = {};

    export type Query = {
        __typename?: "Query";

        activeCustomer: Maybe<ActiveCustomer>;
    };

    export type ActiveCustomer = {
        __typename?: "Customer";

        id: string;

        title: Maybe<string>;

        firstName: string;

        lastName: string;

        emailAddress: string;
    };
}

export namespace GetOrder {
    export type Variables = {
        code: string;
    };

    export type Query = {
        __typename?: "Query";

        orderByCode: Maybe<OrderByCode>;
    };

    export type OrderByCode = {
        __typename?: "Order";

        shippingAddress: Maybe<ShippingAddress>;

        billingAddress: Maybe<BillingAddress>;
    } & Cart.Fragment;

    export type ShippingAddress = OrderAddress.Fragment;

    export type BillingAddress = OrderAddress.Fragment;
}

export namespace GetOrderList {
    export type Variables = {
        options?: Maybe<OrderListOptions>;
    };

    export type Query = {
        __typename?: "Query";

        activeCustomer: Maybe<ActiveCustomer>;
    };

    export type ActiveCustomer = {
        __typename?: "Customer";

        id: string;

        orders: Orders;
    };

    export type Orders = {
        __typename?: "OrderList";

        items: Items[];

        totalItems: number;
    };

    export type Items = {
        __typename?: "Order";

        id: string;

        updatedAt: DateTime;

        code: string;

        state: string;

        currencyCode: CurrencyCode;

        total: number;
    };
}

export namespace SignOut {
    export type Variables = {};

    export type Mutation = {
        __typename?: "Mutation";

        logout: boolean;
    };
}

export namespace VerifyChangeEmailAddress {
    export type Variables = {
        token: string;
    };

    export type Mutation = {
        __typename?: "Mutation";

        updateCustomerEmailAddress: Maybe<boolean>;
    };
}

export namespace RequestPasswordReset {
    export type Variables = {
        emailAddress: string;
    };

    export type Mutation = {
        __typename?: "Mutation";

        requestPasswordReset: Maybe<boolean>;
    };
}

export namespace Register {
    export type Variables = {
        input: RegisterCustomerInput;
    };

    export type Mutation = {
        __typename?: "Mutation";

        registerCustomerAccount: boolean;
    };
}

export namespace ResetPassword {
    export type Variables = {
        token: string;
        password: string;
    };

    export type Mutation = {
        __typename?: "Mutation";

        resetPassword: ResetPassword;
    };

    export type ResetPassword = {
        __typename?: "LoginResult";

        user: User;
    };

    export type User = {
        __typename?: "CurrentUser";

        id: string;

        identifier: string;
    };
}

export namespace Verify {
    export type Variables = {
        password: string;
        token: string;
    };

    export type Mutation = {
        __typename?: "Mutation";

        verifyCustomerAccount: VerifyCustomerAccount;
    };

    export type VerifyCustomerAccount = {
        __typename?: "LoginResult";

        user: User;
    };

    export type User = {
        __typename?: "CurrentUser";

        id: string;

        identifier: string;
    };
}

export namespace GetOrderByCode {
    export type Variables = {
        code: string;
    };

    export type Query = {
        __typename?: "Query";

        orderByCode: Maybe<OrderByCode>;
    };

    export type OrderByCode = {
        __typename?: "Order";

        updatedAt: DateTime;

        customer: Maybe<Customer>;
    } & Cart.Fragment;

    export type Customer = {
        __typename?: "Customer";

        id: string;

        emailAddress: string;

        firstName: string;

        lastName: string;

        user: Maybe<User>;
    };

    export type User = {
        __typename?: "User";

        id: string;

        identifier: string;

        verified: boolean;
    };
}

export namespace AddPayment {
    export type Variables = {
        input: PaymentInput;
    };

    export type Mutation = {
        __typename?: "Mutation";

        addPaymentToOrder: Maybe<AddPaymentToOrder>;
    };

    export type AddPaymentToOrder = Cart.Fragment;
}

export namespace GetNextOrderStates {
    export type Variables = {};

    export type Query = {
        __typename?: "Query";

        nextOrderStates: string[];
    };
}

export namespace TransitionToAddingItems {
    export type Variables = {};

    export type Mutation = {
        __typename?: "Mutation";

        transitionOrderToState: Maybe<TransitionOrderToState>;
    };

    export type TransitionOrderToState = Cart.Fragment;
}

export namespace GetShippingAddress {
    export type Variables = {};

    export type Query = {
        __typename?: "Query";

        activeOrder: Maybe<ActiveOrder>;
    };

    export type ActiveOrder = {
        __typename?: "Order";

        id: string;

        shippingAddress: Maybe<ShippingAddress>;
    };

    export type ShippingAddress = OrderAddress.Fragment;
}

export namespace SetShippingAddress {
    export type Variables = {
        input: CreateAddressInput;
    };

    export type Mutation = {
        __typename?: "Mutation";

        setOrderShippingAddress: Maybe<SetOrderShippingAddress>;
    };

    export type SetOrderShippingAddress = {
        __typename?: "Order";

        shippingAddress: Maybe<ShippingAddress>;
    } & Cart.Fragment;

    export type ShippingAddress = OrderAddress.Fragment;
}

export namespace GetEligibleShippingMethods {
    export type Variables = {};

    export type Query = {
        __typename?: "Query";

        eligibleShippingMethods: EligibleShippingMethods[];
    };

    export type EligibleShippingMethods = {
        __typename?: "ShippingMethodQuote";

        id: string;

        description: string;

        price: number;

        metadata: Maybe<Json>;
    };
}

export namespace SetShippingMethod {
    export type Variables = {
        id: string;
    };

    export type Mutation = {
        __typename?: "Mutation";

        setOrderShippingMethod: Maybe<SetOrderShippingMethod>;
    };

    export type SetOrderShippingMethod = Cart.Fragment;
}

export namespace SetCustomerForOrder {
    export type Variables = {
        input: CreateCustomerInput;
    };

    export type Mutation = {
        __typename?: "Mutation";

        setCustomerForOrder: Maybe<SetCustomerForOrder>;
    };

    export type SetCustomerForOrder = {
        __typename?: "Order";

        id: string;

        customer: Maybe<Customer>;
    };

    export type Customer = {
        __typename?: "Customer";

        id: string;

        emailAddress: string;

        firstName: string;

        lastName: string;
    };
}

export namespace TransitionToArrangingPayment {
    export type Variables = {};

    export type Mutation = {
        __typename?: "Mutation";

        transitionOrderToState: Maybe<TransitionOrderToState>;
    };

    export type TransitionOrderToState = Cart.Fragment;
}

export namespace GetOrderForCheckout {
    export type Variables = {};

    export type Query = {
        __typename?: "Query";

        activeOrder: Maybe<ActiveOrder>;
    };

    export type ActiveOrder = {
        __typename?: "Order";

        shippingAddress: Maybe<ShippingAddress>;
    } & Cart.Fragment;

    export type ShippingAddress = OrderAddress.Fragment;
}

export namespace GetCustomerAddresses {
    export type Variables = {};

    export type Query = {
        __typename?: "Query";

        activeCustomer: Maybe<ActiveCustomer>;
    };

    export type ActiveCustomer = {
        __typename?: "Customer";

        id: string;

        addresses: Maybe<Addresses[]>;
    };

    export type Addresses = Address.Fragment;
}

export namespace GetAvailableCountries {
    export type Variables = {};

    export type Query = {
        __typename?: "Query";

        availableCountries: AvailableCountries[];
    };

    export type AvailableCountries = Country.Fragment;
}

export namespace GetActiveCustomer {
    export type Variables = {};

    export type Query = {
        __typename?: "Query";

        activeCustomer: Maybe<ActiveCustomer>;
    };

    export type ActiveCustomer = {
        __typename?: "Customer";

        id: string;

        firstName: string;

        lastName: string;

        emailAddress: string;

        phoneNumber: Maybe<string>;
    };
}

export namespace GetCollections {
    export type Variables = {
        options?: Maybe<CollectionListOptions>;
    };

    export type Query = {
        __typename?: "Query";

        collections: Collections;
    };

    export type Collections = {
        __typename?: "CollectionList";

        items: Items[];
    };

    export type Items = {
        __typename?: "Collection";

        id: string;

        name: string;

        slug: string;

        parent: Maybe<Parent>;

        featuredAsset: Maybe<FeaturedAsset>;
    };

    export type Parent = {
        __typename?: "Collection";

        id: string;

        name: string;

        slug: string;
    };

    export type FeaturedAsset = Asset.Fragment;
}

export namespace GetActiveOrder {
    export type Variables = {};

    export type Query = {
        __typename?: "Query";

        activeOrder: Maybe<ActiveOrder>;
    };

    export type ActiveOrder = Cart.Fragment;
}

export namespace AdjustItemQuantity {
    export type Variables = {
        id: string;
        qty: number;
    };

    export type Mutation = {
        __typename?: "Mutation";

        adjustOrderLine: Maybe<AdjustOrderLine>;
    };

    export type AdjustOrderLine = Cart.Fragment;
}

export namespace RemoveItemFromCart {
    export type Variables = {
        id: string;
    };

    export type Mutation = {
        __typename?: "Mutation";

        removeOrderLine: Maybe<RemoveOrderLine>;
    };

    export type RemoveOrderLine = Cart.Fragment;
}

export namespace GetCartTotals {
    export type Variables = {};

    export type Query = {
        __typename?: "Query";

        activeOrder: Maybe<ActiveOrder>;
    };

    export type ActiveOrder = {
        __typename?: "Order";

        id: string;

        active: boolean;

        lines: Lines[];

        total: number;
    };

    export type Lines = {
        __typename?: "OrderLine";

        id: string;

        quantity: number;
    };
}

export namespace GetProductDetail {
    export type Variables = {
        slug: string;
    };

    export type Query = {
        __typename?: "Query";

        product: Maybe<Product>;
    };

    export type Product = {
        __typename?: "Product";

        id: string;

        name: string;

        description: string;

        variants: Variants[];

        featuredAsset: Maybe<FeaturedAsset>;

        assets: Assets[];

        collections: Collections[];
    };

    export type Variants = {
        __typename?: "ProductVariant";

        id: string;

        name: string;

        options: Options[];

        price: number;

        priceWithTax: number;

        sku: string;
    };

    export type Options = {
        __typename?: "ProductOption";

        code: string;

        name: string;
    };

    export type FeaturedAsset = Asset.Fragment;

    export type Assets = Asset.Fragment;

    export type Collections = {
        __typename?: "Collection";

        id: string;

        slug: string;

        breadcrumbs: Breadcrumbs[];
    };

    export type Breadcrumbs = {
        __typename?: "CollectionBreadcrumb";

        id: string;

        name: string;

        slug: string;
    };
}

export namespace AddToCart {
    export type Variables = {
        variantId: string;
        qty: number;
    };

    export type Mutation = {
        __typename?: "Mutation";

        addItemToOrder: Maybe<AddItemToOrder>;
    };

    export type AddItemToOrder = Cart.Fragment;
}

export namespace SearchProducts {
    export type Variables = {
        input: SearchInput;
    };

    export type Query = {
        __typename?: "Query";

        search: Search;
    };

    export type Search = {
        __typename?: "SearchResponse";

        items: Items[];

        totalItems: number;

        facetValues: FacetValues[];
    };

    export type Items = {
        __typename?: "SearchResult";

        productId: string;

        slug: string;

        productName: string;

        description: string;

        priceWithTax: PriceWithTax;

        productAsset: Maybe<ProductAsset>;
    };

    export type PriceWithTax = PriceRangeInlineFragment;

    export type PriceRangeInlineFragment = {
        __typename?: "PriceRange";

        min: number;

        max: number;
    };

    export type ProductAsset = {
        __typename?: "SearchResultAsset";

        id: string;

        preview: string;

        focalPoint: Maybe<FocalPoint>;
    };

    export type FocalPoint = {
        __typename?: "Coordinate";

        x: number;

        y: number;
    };

    export type FacetValues = {
        __typename?: "FacetValueResult";

        count: number;

        facetValue: FacetValue;
    };

    export type FacetValue = {
        __typename?: "FacetValue";

        id: string;

        name: string;

        facet: Facet;
    };

    export type Facet = {
        __typename?: "Facet";

        id: string;

        name: string;
    };
}

export namespace GetCollection {
    export type Variables = {
        id?: Maybe<string>;
        slug?: Maybe<string>;
    };

    export type Query = {
        __typename?: "Query";

        collection: Maybe<Collection>;
    };

    export type Collection = {
        __typename?: "Collection";

        id: string;

        name: string;

        slug: string;

        description: string;

        featuredAsset: Maybe<FeaturedAsset>;

        breadcrumbs: Breadcrumbs[];

        children: Maybe<Children[]>;
    };

    export type FeaturedAsset = Asset.Fragment;

    export type Breadcrumbs = {
        __typename?: "CollectionBreadcrumb";

        id: string;

        slug: string;

        name: string;
    };

    export type Children = {
        __typename?: "Collection";

        id: string;

        slug: string;

        featuredAsset: Maybe<_FeaturedAsset>;

        name: string;
    };

    export type _FeaturedAsset = Asset.Fragment;
}

export namespace CreateAddress {
    export type Variables = {
        input: CreateAddressInput;
    };

    export type Mutation = {
        __typename?: "Mutation";

        createCustomerAddress: CreateCustomerAddress;
    };

    export type CreateCustomerAddress = Address.Fragment;
}

export namespace SignIn {
    export type Variables = {
        emailAddress: string;
        password: string;
        rememberMe: boolean;
    };

    export type Mutation = {
        __typename?: "Mutation";

        login: Login;
    };

    export type Login = {
        __typename?: "LoginResult";

        user: User;
    };

    export type User = {
        __typename?: "CurrentUser";

        id: string;
    };
}

export namespace GetActiveChannel {
    export type Variables = {};

    export type Query = {
        __typename?: "Query";

        activeChannel: ActiveChannel;
    };

    export type ActiveChannel = {
        __typename?: "Channel";

        id: string;

        code: string;

        currencyCode: CurrencyCode;

        defaultLanguageCode: LanguageCode;
    };
}

export namespace Asset {
    export type Fragment = {
        __typename?: "Asset";

        id: string;

        width: number;

        height: number;

        name: string;

        preview: string;

        focalPoint: Maybe<FocalPoint>;
    };

    export type FocalPoint = {
        __typename?: "Coordinate";

        x: number;

        y: number;
    };
}

export namespace Cart {
    export type Fragment = {
        __typename?: "Order";

        id: string;

        code: string;

        state: string;

        active: boolean;

        lines: Lines[];

        subTotal: number;

        subTotalBeforeTax: number;

        totalBeforeTax: number;

        shipping: number;

        shippingMethod: Maybe<ShippingMethod>;

        total: number;

        adjustments: _Adjustments[];
    };

    export type Lines = {
        __typename?: "OrderLine";

        id: string;

        featuredAsset: Maybe<FeaturedAsset>;

        unitPrice: number;

        unitPriceWithTax: number;

        quantity: number;

        totalPrice: number;

        productVariant: ProductVariant;

        adjustments: Adjustments[];
    };

    export type FeaturedAsset = Asset.Fragment;

    export type ProductVariant = {
        __typename?: "ProductVariant";

        id: string;

        name: string;
    };

    export type Adjustments = {
        __typename?: "Adjustment";

        amount: number;

        description: string;

        adjustmentSource: string;

        type: AdjustmentType;
    };

    export type ShippingMethod = {
        __typename?: "ShippingMethod";

        id: string;

        code: string;

        description: string;
    };

    export type _Adjustments = {
        __typename?: "Adjustment";

        amount: number;

        description: string;

        adjustmentSource: string;

        type: AdjustmentType;
    };
}

export namespace Country {
    export type Fragment = {
        __typename?: "Country";

        id: string;

        code: string;

        name: string;

        enabled: boolean;
    };
}

export namespace OrderAddress {
    export type Fragment = {
        __typename?: "OrderAddress";

        fullName: Maybe<string>;

        company: Maybe<string>;

        streetLine1: Maybe<string>;

        streetLine2: Maybe<string>;

        city: Maybe<string>;

        province: Maybe<string>;

        postalCode: Maybe<string>;

        country: Maybe<string>;

        phoneNumber: Maybe<string>;
    };
}

export namespace Address {
    export type Fragment = {
        __typename?: "Address";

        id: string;

        fullName: Maybe<string>;

        company: Maybe<string>;

        streetLine1: string;

        streetLine2: Maybe<string>;

        city: Maybe<string>;

        province: Maybe<string>;

        postalCode: Maybe<string>;

        country: Country;

        phoneNumber: Maybe<string>;

        defaultShippingAddress: Maybe<boolean>;

        defaultBillingAddress: Maybe<boolean>;
    };

    export type Country = {
        __typename?: "Country";

        id: string;

        code: string;

        name: string;
    };
}
