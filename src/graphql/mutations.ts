/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createWithdraw = /* GraphQL */ `
  mutation CreateWithdraw(
    $input: CreateWithdrawInput!
    $condition: ModelWithdrawConditionInput
  ) {
    createWithdraw(input: $input, condition: $condition) {
      id
      amount
      status
      paymentMethod
      details
      note
      organizationID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateWithdraw = /* GraphQL */ `
  mutation UpdateWithdraw(
    $input: UpdateWithdrawInput!
    $condition: ModelWithdrawConditionInput
  ) {
    updateWithdraw(input: $input, condition: $condition) {
      id
      amount
      status
      paymentMethod
      details
      note
      organizationID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteWithdraw = /* GraphQL */ `
  mutation DeleteWithdraw(
    $input: DeleteWithdrawInput!
    $condition: ModelWithdrawConditionInput
  ) {
    deleteWithdraw(input: $input, condition: $condition) {
      id
      amount
      status
      paymentMethod
      details
      note
      organizationID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createBanner = /* GraphQL */ `
  mutation CreateBanner(
    $input: CreateBannerInput!
    $condition: ModelBannerConditionInput
  ) {
    createBanner(input: $input, condition: $condition) {
      id
      title
      description
      image {
        thumbnail
        original
      }
      typeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateBanner = /* GraphQL */ `
  mutation UpdateBanner(
    $input: UpdateBannerInput!
    $condition: ModelBannerConditionInput
  ) {
    updateBanner(input: $input, condition: $condition) {
      id
      title
      description
      image {
        thumbnail
        original
      }
      typeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteBanner = /* GraphQL */ `
  mutation DeleteBanner(
    $input: DeleteBannerInput!
    $condition: ModelBannerConditionInput
  ) {
    deleteBanner(input: $input, condition: $condition) {
      id
      title
      description
      image {
        thumbnail
        original
      }
      typeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createType = /* GraphQL */ `
  mutation CreateType(
    $input: CreateTypeInput!
    $condition: ModelTypeConditionInput
  ) {
    createType(input: $input, condition: $condition) {
      id
      name
      slug
      promotionalSliders
      settings {
        isHome
        layoutType
        productCard
      }
      icon
      banners {
        items {
          id
          title
          description
          image {
            thumbnail
            original
          }
          typeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      categories {
        items {
          id
          name
          slug
          details
          image {
            thumbnail
            original
          }
          icon
          entities {
            items {
              id
              entityID
              categoryID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          typeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      entities {
        items {
          id
          name
          slug
          entityType
          description
          inStock
          isTaxable
          salePrice
          maxPrice
          minPrice
          sku
          gallery {
            thumbnail
            original
          }
          image {
            thumbnail
            original
          }
          status
          height
          lenght
          width
          price
          quantity
          unit
          categories {
            items {
              id
              entityID
              categoryID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          orderID
          organizationID
          tagID
          typeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      tags {
        items {
          id
          name
          slug
          details
          image {
            thumbnail
            original
          }
          icon
          entities {
            items {
              id
              name
              slug
              entityType
              description
              inStock
              isTaxable
              salePrice
              maxPrice
              minPrice
              sku
              status
              height
              lenght
              width
              price
              quantity
              unit
              orderID
              organizationID
              tagID
              typeID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          typeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateType = /* GraphQL */ `
  mutation UpdateType(
    $input: UpdateTypeInput!
    $condition: ModelTypeConditionInput
  ) {
    updateType(input: $input, condition: $condition) {
      id
      name
      slug
      promotionalSliders
      settings {
        isHome
        layoutType
        productCard
      }
      icon
      banners {
        items {
          id
          title
          description
          image {
            thumbnail
            original
          }
          typeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      categories {
        items {
          id
          name
          slug
          details
          image {
            thumbnail
            original
          }
          icon
          entities {
            items {
              id
              entityID
              categoryID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          typeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      entities {
        items {
          id
          name
          slug
          entityType
          description
          inStock
          isTaxable
          salePrice
          maxPrice
          minPrice
          sku
          gallery {
            thumbnail
            original
          }
          image {
            thumbnail
            original
          }
          status
          height
          lenght
          width
          price
          quantity
          unit
          categories {
            items {
              id
              entityID
              categoryID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          orderID
          organizationID
          tagID
          typeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      tags {
        items {
          id
          name
          slug
          details
          image {
            thumbnail
            original
          }
          icon
          entities {
            items {
              id
              name
              slug
              entityType
              description
              inStock
              isTaxable
              salePrice
              maxPrice
              minPrice
              sku
              status
              height
              lenght
              width
              price
              quantity
              unit
              orderID
              organizationID
              tagID
              typeID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          typeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteType = /* GraphQL */ `
  mutation DeleteType(
    $input: DeleteTypeInput!
    $condition: ModelTypeConditionInput
  ) {
    deleteType(input: $input, condition: $condition) {
      id
      name
      slug
      promotionalSliders
      settings {
        isHome
        layoutType
        productCard
      }
      icon
      banners {
        items {
          id
          title
          description
          image {
            thumbnail
            original
          }
          typeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      categories {
        items {
          id
          name
          slug
          details
          image {
            thumbnail
            original
          }
          icon
          entities {
            items {
              id
              entityID
              categoryID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          typeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      entities {
        items {
          id
          name
          slug
          entityType
          description
          inStock
          isTaxable
          salePrice
          maxPrice
          minPrice
          sku
          gallery {
            thumbnail
            original
          }
          image {
            thumbnail
            original
          }
          status
          height
          lenght
          width
          price
          quantity
          unit
          categories {
            items {
              id
              entityID
              categoryID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          orderID
          organizationID
          tagID
          typeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      tags {
        items {
          id
          name
          slug
          details
          image {
            thumbnail
            original
          }
          icon
          entities {
            items {
              id
              name
              slug
              entityType
              description
              inStock
              isTaxable
              salePrice
              maxPrice
              minPrice
              sku
              status
              height
              lenght
              width
              price
              quantity
              unit
              orderID
              organizationID
              tagID
              typeID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          typeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      id
      name
      slug
      details
      image {
        thumbnail
        original
      }
      icon
      entities {
        items {
          id
          name
          slug
          entityType
          description
          inStock
          isTaxable
          salePrice
          maxPrice
          minPrice
          sku
          gallery {
            thumbnail
            original
          }
          image {
            thumbnail
            original
          }
          status
          height
          lenght
          width
          price
          quantity
          unit
          categories {
            items {
              id
              entityID
              categoryID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          orderID
          organizationID
          tagID
          typeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      typeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      id
      name
      slug
      details
      image {
        thumbnail
        original
      }
      icon
      entities {
        items {
          id
          name
          slug
          entityType
          description
          inStock
          isTaxable
          salePrice
          maxPrice
          minPrice
          sku
          gallery {
            thumbnail
            original
          }
          image {
            thumbnail
            original
          }
          status
          height
          lenght
          width
          price
          quantity
          unit
          categories {
            items {
              id
              entityID
              categoryID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          orderID
          organizationID
          tagID
          typeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      typeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      id
      name
      slug
      details
      image {
        thumbnail
        original
      }
      icon
      entities {
        items {
          id
          name
          slug
          entityType
          description
          inStock
          isTaxable
          salePrice
          maxPrice
          minPrice
          sku
          gallery {
            thumbnail
            original
          }
          image {
            thumbnail
            original
          }
          status
          height
          lenght
          width
          price
          quantity
          unit
          categories {
            items {
              id
              entityID
              categoryID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          orderID
          organizationID
          tagID
          typeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      typeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createBalance = /* GraphQL */ `
  mutation CreateBalance(
    $input: CreateBalanceInput!
    $condition: ModelBalanceConditionInput
  ) {
    createBalance(input: $input, condition: $condition) {
      id
      adminCommissionRate
      totalEarnings
      withdrawnAmount
      currentBalance
      paymentInfo {
        account
        name
        email
        bank
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateBalance = /* GraphQL */ `
  mutation UpdateBalance(
    $input: UpdateBalanceInput!
    $condition: ModelBalanceConditionInput
  ) {
    updateBalance(input: $input, condition: $condition) {
      id
      adminCommissionRate
      totalEarnings
      withdrawnAmount
      currentBalance
      paymentInfo {
        account
        name
        email
        bank
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteBalance = /* GraphQL */ `
  mutation DeleteBalance(
    $input: DeleteBalanceInput!
    $condition: ModelBalanceConditionInput
  ) {
    deleteBalance(input: $input, condition: $condition) {
      id
      adminCommissionRate
      totalEarnings
      withdrawnAmount
      currentBalance
      paymentInfo {
        account
        name
        email
        bank
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createOrganization = /* GraphQL */ `
  mutation CreateOrganization(
    $input: CreateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    createOrganization(input: $input, condition: $condition) {
      id
      isActive
      name
      slug
      description
      coverImage {
        thumbnail
        original
      }
      logo {
        thumbnail
        original
      }
      address {
        streetAddress
        country
        city
        state
        zip
      }
      settings
      attributes {
        items {
          id
          name
          slug
          values {
            items {
              id
              value
              meta
              attributeID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          organizationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      orders {
        items {
          id
          trakingNumber
          amount
          paidTotal
          discount
          deliveryFee
          deliveryTime
          billingAddress {
            streetAddress
            country
            city
            state
            zip
          }
          shippingAddress {
            streetAddress
            country
            city
            state
            zip
          }
          paymentGateway
          couponID
          entities {
            items {
              id
              name
              slug
              entityType
              description
              inStock
              isTaxable
              salePrice
              maxPrice
              minPrice
              sku
              status
              height
              lenght
              width
              price
              quantity
              unit
              orderID
              organizationID
              tagID
              typeID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          userID
          organizationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      entities {
        items {
          id
          name
          slug
          entityType
          description
          inStock
          isTaxable
          salePrice
          maxPrice
          minPrice
          sku
          gallery {
            thumbnail
            original
          }
          image {
            thumbnail
            original
          }
          status
          height
          lenght
          width
          price
          quantity
          unit
          categories {
            items {
              id
              entityID
              categoryID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          orderID
          organizationID
          tagID
          typeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      staffs {
        items {
          id
          name
          email
          isActiive
          orders {
            items {
              id
              trakingNumber
              amount
              paidTotal
              discount
              deliveryFee
              deliveryTime
              paymentGateway
              couponID
              userID
              organizationID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          organizationID
          organizations {
            items {
              id
              organizationID
              userID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      balance {
        id
        adminCommissionRate
        totalEarnings
        withdrawnAmount
        currentBalance
        paymentInfo {
          account
          name
          email
          bank
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      withdraws {
        items {
          id
          amount
          status
          paymentMethod
          details
          note
          organizationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      users {
        items {
          id
          organizationID
          userID
          organization {
            id
            isActive
            name
            slug
            description
            coverImage {
              thumbnail
              original
            }
            logo {
              thumbnail
              original
            }
            address {
              streetAddress
              country
              city
              state
              zip
            }
            settings
            attributes {
              nextToken
              startedAt
            }
            orders {
              nextToken
              startedAt
            }
            entities {
              nextToken
              startedAt
            }
            staffs {
              nextToken
              startedAt
            }
            balance {
              id
              adminCommissionRate
              totalEarnings
              withdrawnAmount
              currentBalance
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            withdraws {
              nextToken
              startedAt
            }
            users {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            organizationBalanceId
          }
          user {
            id
            name
            email
            isActiive
            orders {
              nextToken
              startedAt
            }
            organizationID
            organizations {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      organizationBalanceId
    }
  }
`;
export const updateOrganization = /* GraphQL */ `
  mutation UpdateOrganization(
    $input: UpdateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    updateOrganization(input: $input, condition: $condition) {
      id
      isActive
      name
      slug
      description
      coverImage {
        thumbnail
        original
      }
      logo {
        thumbnail
        original
      }
      address {
        streetAddress
        country
        city
        state
        zip
      }
      settings
      attributes {
        items {
          id
          name
          slug
          values {
            items {
              id
              value
              meta
              attributeID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          organizationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      orders {
        items {
          id
          trakingNumber
          amount
          paidTotal
          discount
          deliveryFee
          deliveryTime
          billingAddress {
            streetAddress
            country
            city
            state
            zip
          }
          shippingAddress {
            streetAddress
            country
            city
            state
            zip
          }
          paymentGateway
          couponID
          entities {
            items {
              id
              name
              slug
              entityType
              description
              inStock
              isTaxable
              salePrice
              maxPrice
              minPrice
              sku
              status
              height
              lenght
              width
              price
              quantity
              unit
              orderID
              organizationID
              tagID
              typeID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          userID
          organizationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      entities {
        items {
          id
          name
          slug
          entityType
          description
          inStock
          isTaxable
          salePrice
          maxPrice
          minPrice
          sku
          gallery {
            thumbnail
            original
          }
          image {
            thumbnail
            original
          }
          status
          height
          lenght
          width
          price
          quantity
          unit
          categories {
            items {
              id
              entityID
              categoryID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          orderID
          organizationID
          tagID
          typeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      staffs {
        items {
          id
          name
          email
          isActiive
          orders {
            items {
              id
              trakingNumber
              amount
              paidTotal
              discount
              deliveryFee
              deliveryTime
              paymentGateway
              couponID
              userID
              organizationID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          organizationID
          organizations {
            items {
              id
              organizationID
              userID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      balance {
        id
        adminCommissionRate
        totalEarnings
        withdrawnAmount
        currentBalance
        paymentInfo {
          account
          name
          email
          bank
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      withdraws {
        items {
          id
          amount
          status
          paymentMethod
          details
          note
          organizationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      users {
        items {
          id
          organizationID
          userID
          organization {
            id
            isActive
            name
            slug
            description
            coverImage {
              thumbnail
              original
            }
            logo {
              thumbnail
              original
            }
            address {
              streetAddress
              country
              city
              state
              zip
            }
            settings
            attributes {
              nextToken
              startedAt
            }
            orders {
              nextToken
              startedAt
            }
            entities {
              nextToken
              startedAt
            }
            staffs {
              nextToken
              startedAt
            }
            balance {
              id
              adminCommissionRate
              totalEarnings
              withdrawnAmount
              currentBalance
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            withdraws {
              nextToken
              startedAt
            }
            users {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            organizationBalanceId
          }
          user {
            id
            name
            email
            isActiive
            orders {
              nextToken
              startedAt
            }
            organizationID
            organizations {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      organizationBalanceId
    }
  }
`;
export const deleteOrganization = /* GraphQL */ `
  mutation DeleteOrganization(
    $input: DeleteOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    deleteOrganization(input: $input, condition: $condition) {
      id
      isActive
      name
      slug
      description
      coverImage {
        thumbnail
        original
      }
      logo {
        thumbnail
        original
      }
      address {
        streetAddress
        country
        city
        state
        zip
      }
      settings
      attributes {
        items {
          id
          name
          slug
          values {
            items {
              id
              value
              meta
              attributeID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          organizationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      orders {
        items {
          id
          trakingNumber
          amount
          paidTotal
          discount
          deliveryFee
          deliveryTime
          billingAddress {
            streetAddress
            country
            city
            state
            zip
          }
          shippingAddress {
            streetAddress
            country
            city
            state
            zip
          }
          paymentGateway
          couponID
          entities {
            items {
              id
              name
              slug
              entityType
              description
              inStock
              isTaxable
              salePrice
              maxPrice
              minPrice
              sku
              status
              height
              lenght
              width
              price
              quantity
              unit
              orderID
              organizationID
              tagID
              typeID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          userID
          organizationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      entities {
        items {
          id
          name
          slug
          entityType
          description
          inStock
          isTaxable
          salePrice
          maxPrice
          minPrice
          sku
          gallery {
            thumbnail
            original
          }
          image {
            thumbnail
            original
          }
          status
          height
          lenght
          width
          price
          quantity
          unit
          categories {
            items {
              id
              entityID
              categoryID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          orderID
          organizationID
          tagID
          typeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      staffs {
        items {
          id
          name
          email
          isActiive
          orders {
            items {
              id
              trakingNumber
              amount
              paidTotal
              discount
              deliveryFee
              deliveryTime
              paymentGateway
              couponID
              userID
              organizationID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          organizationID
          organizations {
            items {
              id
              organizationID
              userID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      balance {
        id
        adminCommissionRate
        totalEarnings
        withdrawnAmount
        currentBalance
        paymentInfo {
          account
          name
          email
          bank
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      withdraws {
        items {
          id
          amount
          status
          paymentMethod
          details
          note
          organizationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      users {
        items {
          id
          organizationID
          userID
          organization {
            id
            isActive
            name
            slug
            description
            coverImage {
              thumbnail
              original
            }
            logo {
              thumbnail
              original
            }
            address {
              streetAddress
              country
              city
              state
              zip
            }
            settings
            attributes {
              nextToken
              startedAt
            }
            orders {
              nextToken
              startedAt
            }
            entities {
              nextToken
              startedAt
            }
            staffs {
              nextToken
              startedAt
            }
            balance {
              id
              adminCommissionRate
              totalEarnings
              withdrawnAmount
              currentBalance
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            withdraws {
              nextToken
              startedAt
            }
            users {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            organizationBalanceId
          }
          user {
            id
            name
            email
            isActiive
            orders {
              nextToken
              startedAt
            }
            organizationID
            organizations {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      organizationBalanceId
    }
  }
`;
export const createShipping = /* GraphQL */ `
  mutation CreateShipping(
    $input: CreateShippingInput!
    $condition: ModelShippingConditionInput
  ) {
    createShipping(input: $input, condition: $condition) {
      id
      name
      amount
      isGlobal
      type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateShipping = /* GraphQL */ `
  mutation UpdateShipping(
    $input: UpdateShippingInput!
    $condition: ModelShippingConditionInput
  ) {
    updateShipping(input: $input, condition: $condition) {
      id
      name
      amount
      isGlobal
      type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteShipping = /* GraphQL */ `
  mutation DeleteShipping(
    $input: DeleteShippingInput!
    $condition: ModelShippingConditionInput
  ) {
    deleteShipping(input: $input, condition: $condition) {
      id
      name
      amount
      isGlobal
      type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
      id
      avatar {
        thumbnail
        original
      }
      bio
      socials {
        type
        link
      }
      contact
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
      id
      avatar {
        thumbnail
        original
      }
      bio
      socials {
        type
        link
      }
      contact
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
      id
      avatar {
        thumbnail
        original
      }
      bio
      socials {
        type
        link
      }
      contact
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createEntityVariation = /* GraphQL */ `
  mutation CreateEntityVariation(
    $input: CreateEntityVariationInput!
    $condition: ModelEntityVariationConditionInput
  ) {
    createEntityVariation(input: $input, condition: $condition) {
      id
      title
      price
      sku
      isDisable
      salePrice
      quantity
      options {
        name
        value
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateEntityVariation = /* GraphQL */ `
  mutation UpdateEntityVariation(
    $input: UpdateEntityVariationInput!
    $condition: ModelEntityVariationConditionInput
  ) {
    updateEntityVariation(input: $input, condition: $condition) {
      id
      title
      price
      sku
      isDisable
      salePrice
      quantity
      options {
        name
        value
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteEntityVariation = /* GraphQL */ `
  mutation DeleteEntityVariation(
    $input: DeleteEntityVariationInput!
    $condition: ModelEntityVariationConditionInput
  ) {
    deleteEntityVariation(input: $input, condition: $condition) {
      id
      title
      price
      sku
      isDisable
      salePrice
      quantity
      options {
        name
        value
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createEntity = /* GraphQL */ `
  mutation CreateEntity(
    $input: CreateEntityInput!
    $condition: ModelEntityConditionInput
  ) {
    createEntity(input: $input, condition: $condition) {
      id
      name
      slug
      entityType
      description
      inStock
      isTaxable
      salePrice
      maxPrice
      minPrice
      sku
      gallery {
        thumbnail
        original
      }
      image {
        thumbnail
        original
      }
      status
      height
      lenght
      width
      price
      quantity
      unit
      categories {
        items {
          id
          entityID
          categoryID
          entity {
            id
            name
            slug
            entityType
            description
            inStock
            isTaxable
            salePrice
            maxPrice
            minPrice
            sku
            gallery {
              thumbnail
              original
            }
            image {
              thumbnail
              original
            }
            status
            height
            lenght
            width
            price
            quantity
            unit
            categories {
              nextToken
              startedAt
            }
            orderID
            organizationID
            tagID
            typeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          category {
            id
            name
            slug
            details
            image {
              thumbnail
              original
            }
            icon
            entities {
              nextToken
              startedAt
            }
            typeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      orderID
      organizationID
      tagID
      typeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateEntity = /* GraphQL */ `
  mutation UpdateEntity(
    $input: UpdateEntityInput!
    $condition: ModelEntityConditionInput
  ) {
    updateEntity(input: $input, condition: $condition) {
      id
      name
      slug
      entityType
      description
      inStock
      isTaxable
      salePrice
      maxPrice
      minPrice
      sku
      gallery {
        thumbnail
        original
      }
      image {
        thumbnail
        original
      }
      status
      height
      lenght
      width
      price
      quantity
      unit
      categories {
        items {
          id
          entityID
          categoryID
          entity {
            id
            name
            slug
            entityType
            description
            inStock
            isTaxable
            salePrice
            maxPrice
            minPrice
            sku
            gallery {
              thumbnail
              original
            }
            image {
              thumbnail
              original
            }
            status
            height
            lenght
            width
            price
            quantity
            unit
            categories {
              nextToken
              startedAt
            }
            orderID
            organizationID
            tagID
            typeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          category {
            id
            name
            slug
            details
            image {
              thumbnail
              original
            }
            icon
            entities {
              nextToken
              startedAt
            }
            typeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      orderID
      organizationID
      tagID
      typeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteEntity = /* GraphQL */ `
  mutation DeleteEntity(
    $input: DeleteEntityInput!
    $condition: ModelEntityConditionInput
  ) {
    deleteEntity(input: $input, condition: $condition) {
      id
      name
      slug
      entityType
      description
      inStock
      isTaxable
      salePrice
      maxPrice
      minPrice
      sku
      gallery {
        thumbnail
        original
      }
      image {
        thumbnail
        original
      }
      status
      height
      lenght
      width
      price
      quantity
      unit
      categories {
        items {
          id
          entityID
          categoryID
          entity {
            id
            name
            slug
            entityType
            description
            inStock
            isTaxable
            salePrice
            maxPrice
            minPrice
            sku
            gallery {
              thumbnail
              original
            }
            image {
              thumbnail
              original
            }
            status
            height
            lenght
            width
            price
            quantity
            unit
            categories {
              nextToken
              startedAt
            }
            orderID
            organizationID
            tagID
            typeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          category {
            id
            name
            slug
            details
            image {
              thumbnail
              original
            }
            icon
            entities {
              nextToken
              startedAt
            }
            typeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      orderID
      organizationID
      tagID
      typeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      trakingNumber
      amount
      paidTotal
      discount
      deliveryFee
      deliveryTime
      billingAddress {
        streetAddress
        country
        city
        state
        zip
      }
      shippingAddress {
        streetAddress
        country
        city
        state
        zip
      }
      paymentGateway
      couponID
      entities {
        items {
          id
          name
          slug
          entityType
          description
          inStock
          isTaxable
          salePrice
          maxPrice
          minPrice
          sku
          gallery {
            thumbnail
            original
          }
          image {
            thumbnail
            original
          }
          status
          height
          lenght
          width
          price
          quantity
          unit
          categories {
            items {
              id
              entityID
              categoryID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          orderID
          organizationID
          tagID
          typeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      userID
      organizationID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      trakingNumber
      amount
      paidTotal
      discount
      deliveryFee
      deliveryTime
      billingAddress {
        streetAddress
        country
        city
        state
        zip
      }
      shippingAddress {
        streetAddress
        country
        city
        state
        zip
      }
      paymentGateway
      couponID
      entities {
        items {
          id
          name
          slug
          entityType
          description
          inStock
          isTaxable
          salePrice
          maxPrice
          minPrice
          sku
          gallery {
            thumbnail
            original
          }
          image {
            thumbnail
            original
          }
          status
          height
          lenght
          width
          price
          quantity
          unit
          categories {
            items {
              id
              entityID
              categoryID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          orderID
          organizationID
          tagID
          typeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      userID
      organizationID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      trakingNumber
      amount
      paidTotal
      discount
      deliveryFee
      deliveryTime
      billingAddress {
        streetAddress
        country
        city
        state
        zip
      }
      shippingAddress {
        streetAddress
        country
        city
        state
        zip
      }
      paymentGateway
      couponID
      entities {
        items {
          id
          name
          slug
          entityType
          description
          inStock
          isTaxable
          salePrice
          maxPrice
          minPrice
          sku
          gallery {
            thumbnail
            original
          }
          image {
            thumbnail
            original
          }
          status
          height
          lenght
          width
          price
          quantity
          unit
          categories {
            items {
              id
              entityID
              categoryID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          orderID
          organizationID
          tagID
          typeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      userID
      organizationID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCoupon = /* GraphQL */ `
  mutation CreateCoupon(
    $input: CreateCouponInput!
    $condition: ModelCouponConditionInput
  ) {
    createCoupon(input: $input, condition: $condition) {
      id
      code
      description
      type
      image {
        thumbnail
        original
      }
      isValid
      amount
      activeFrom
      expireAt
      orders {
        items {
          id
          trakingNumber
          amount
          paidTotal
          discount
          deliveryFee
          deliveryTime
          billingAddress {
            streetAddress
            country
            city
            state
            zip
          }
          shippingAddress {
            streetAddress
            country
            city
            state
            zip
          }
          paymentGateway
          couponID
          entities {
            items {
              id
              name
              slug
              entityType
              description
              inStock
              isTaxable
              salePrice
              maxPrice
              minPrice
              sku
              status
              height
              lenght
              width
              price
              quantity
              unit
              orderID
              organizationID
              tagID
              typeID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          userID
          organizationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCoupon = /* GraphQL */ `
  mutation UpdateCoupon(
    $input: UpdateCouponInput!
    $condition: ModelCouponConditionInput
  ) {
    updateCoupon(input: $input, condition: $condition) {
      id
      code
      description
      type
      image {
        thumbnail
        original
      }
      isValid
      amount
      activeFrom
      expireAt
      orders {
        items {
          id
          trakingNumber
          amount
          paidTotal
          discount
          deliveryFee
          deliveryTime
          billingAddress {
            streetAddress
            country
            city
            state
            zip
          }
          shippingAddress {
            streetAddress
            country
            city
            state
            zip
          }
          paymentGateway
          couponID
          entities {
            items {
              id
              name
              slug
              entityType
              description
              inStock
              isTaxable
              salePrice
              maxPrice
              minPrice
              sku
              status
              height
              lenght
              width
              price
              quantity
              unit
              orderID
              organizationID
              tagID
              typeID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          userID
          organizationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCoupon = /* GraphQL */ `
  mutation DeleteCoupon(
    $input: DeleteCouponInput!
    $condition: ModelCouponConditionInput
  ) {
    deleteCoupon(input: $input, condition: $condition) {
      id
      code
      description
      type
      image {
        thumbnail
        original
      }
      isValid
      amount
      activeFrom
      expireAt
      orders {
        items {
          id
          trakingNumber
          amount
          paidTotal
          discount
          deliveryFee
          deliveryTime
          billingAddress {
            streetAddress
            country
            city
            state
            zip
          }
          shippingAddress {
            streetAddress
            country
            city
            state
            zip
          }
          paymentGateway
          couponID
          entities {
            items {
              id
              name
              slug
              entityType
              description
              inStock
              isTaxable
              salePrice
              maxPrice
              minPrice
              sku
              status
              height
              lenght
              width
              price
              quantity
              unit
              orderID
              organizationID
              tagID
              typeID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          userID
          organizationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createContact = /* GraphQL */ `
  mutation CreateContact(
    $input: CreateContactInput!
    $condition: ModelContactConditionInput
  ) {
    createContact(input: $input, condition: $condition) {
      id
      subject
      email
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateContact = /* GraphQL */ `
  mutation UpdateContact(
    $input: UpdateContactInput!
    $condition: ModelContactConditionInput
  ) {
    updateContact(input: $input, condition: $condition) {
      id
      subject
      email
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteContact = /* GraphQL */ `
  mutation DeleteContact(
    $input: DeleteContactInput!
    $condition: ModelContactConditionInput
  ) {
    deleteContact(input: $input, condition: $condition) {
      id
      subject
      email
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      slug
      details
      image {
        thumbnail
        original
      }
      icon
      entities {
        items {
          id
          entityID
          categoryID
          entity {
            id
            name
            slug
            entityType
            description
            inStock
            isTaxable
            salePrice
            maxPrice
            minPrice
            sku
            gallery {
              thumbnail
              original
            }
            image {
              thumbnail
              original
            }
            status
            height
            lenght
            width
            price
            quantity
            unit
            categories {
              nextToken
              startedAt
            }
            orderID
            organizationID
            tagID
            typeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          category {
            id
            name
            slug
            details
            image {
              thumbnail
              original
            }
            icon
            entities {
              nextToken
              startedAt
            }
            typeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      typeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      slug
      details
      image {
        thumbnail
        original
      }
      icon
      entities {
        items {
          id
          entityID
          categoryID
          entity {
            id
            name
            slug
            entityType
            description
            inStock
            isTaxable
            salePrice
            maxPrice
            minPrice
            sku
            gallery {
              thumbnail
              original
            }
            image {
              thumbnail
              original
            }
            status
            height
            lenght
            width
            price
            quantity
            unit
            categories {
              nextToken
              startedAt
            }
            orderID
            organizationID
            tagID
            typeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          category {
            id
            name
            slug
            details
            image {
              thumbnail
              original
            }
            icon
            entities {
              nextToken
              startedAt
            }
            typeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      typeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      slug
      details
      image {
        thumbnail
        original
      }
      icon
      entities {
        items {
          id
          entityID
          categoryID
          entity {
            id
            name
            slug
            entityType
            description
            inStock
            isTaxable
            salePrice
            maxPrice
            minPrice
            sku
            gallery {
              thumbnail
              original
            }
            image {
              thumbnail
              original
            }
            status
            height
            lenght
            width
            price
            quantity
            unit
            categories {
              nextToken
              startedAt
            }
            orderID
            organizationID
            tagID
            typeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          category {
            id
            name
            slug
            details
            image {
              thumbnail
              original
            }
            icon
            entities {
              nextToken
              startedAt
            }
            typeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      typeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createAttributeValue = /* GraphQL */ `
  mutation CreateAttributeValue(
    $input: CreateAttributeValueInput!
    $condition: ModelAttributeValueConditionInput
  ) {
    createAttributeValue(input: $input, condition: $condition) {
      id
      value
      meta
      attributeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateAttributeValue = /* GraphQL */ `
  mutation UpdateAttributeValue(
    $input: UpdateAttributeValueInput!
    $condition: ModelAttributeValueConditionInput
  ) {
    updateAttributeValue(input: $input, condition: $condition) {
      id
      value
      meta
      attributeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteAttributeValue = /* GraphQL */ `
  mutation DeleteAttributeValue(
    $input: DeleteAttributeValueInput!
    $condition: ModelAttributeValueConditionInput
  ) {
    deleteAttributeValue(input: $input, condition: $condition) {
      id
      value
      meta
      attributeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createAttribute = /* GraphQL */ `
  mutation CreateAttribute(
    $input: CreateAttributeInput!
    $condition: ModelAttributeConditionInput
  ) {
    createAttribute(input: $input, condition: $condition) {
      id
      name
      slug
      values {
        items {
          id
          value
          meta
          attributeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      organizationID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateAttribute = /* GraphQL */ `
  mutation UpdateAttribute(
    $input: UpdateAttributeInput!
    $condition: ModelAttributeConditionInput
  ) {
    updateAttribute(input: $input, condition: $condition) {
      id
      name
      slug
      values {
        items {
          id
          value
          meta
          attributeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      organizationID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteAttribute = /* GraphQL */ `
  mutation DeleteAttribute(
    $input: DeleteAttributeInput!
    $condition: ModelAttributeConditionInput
  ) {
    deleteAttribute(input: $input, condition: $condition) {
      id
      name
      slug
      values {
        items {
          id
          value
          meta
          attributeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      organizationID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      email
      isActiive
      orders {
        items {
          id
          trakingNumber
          amount
          paidTotal
          discount
          deliveryFee
          deliveryTime
          billingAddress {
            streetAddress
            country
            city
            state
            zip
          }
          shippingAddress {
            streetAddress
            country
            city
            state
            zip
          }
          paymentGateway
          couponID
          entities {
            items {
              id
              name
              slug
              entityType
              description
              inStock
              isTaxable
              salePrice
              maxPrice
              minPrice
              sku
              status
              height
              lenght
              width
              price
              quantity
              unit
              orderID
              organizationID
              tagID
              typeID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          userID
          organizationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      organizationID
      organizations {
        items {
          id
          organizationID
          userID
          organization {
            id
            isActive
            name
            slug
            description
            coverImage {
              thumbnail
              original
            }
            logo {
              thumbnail
              original
            }
            address {
              streetAddress
              country
              city
              state
              zip
            }
            settings
            attributes {
              nextToken
              startedAt
            }
            orders {
              nextToken
              startedAt
            }
            entities {
              nextToken
              startedAt
            }
            staffs {
              nextToken
              startedAt
            }
            balance {
              id
              adminCommissionRate
              totalEarnings
              withdrawnAmount
              currentBalance
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            withdraws {
              nextToken
              startedAt
            }
            users {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            organizationBalanceId
          }
          user {
            id
            name
            email
            isActiive
            orders {
              nextToken
              startedAt
            }
            organizationID
            organizations {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      email
      isActiive
      orders {
        items {
          id
          trakingNumber
          amount
          paidTotal
          discount
          deliveryFee
          deliveryTime
          billingAddress {
            streetAddress
            country
            city
            state
            zip
          }
          shippingAddress {
            streetAddress
            country
            city
            state
            zip
          }
          paymentGateway
          couponID
          entities {
            items {
              id
              name
              slug
              entityType
              description
              inStock
              isTaxable
              salePrice
              maxPrice
              minPrice
              sku
              status
              height
              lenght
              width
              price
              quantity
              unit
              orderID
              organizationID
              tagID
              typeID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          userID
          organizationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      organizationID
      organizations {
        items {
          id
          organizationID
          userID
          organization {
            id
            isActive
            name
            slug
            description
            coverImage {
              thumbnail
              original
            }
            logo {
              thumbnail
              original
            }
            address {
              streetAddress
              country
              city
              state
              zip
            }
            settings
            attributes {
              nextToken
              startedAt
            }
            orders {
              nextToken
              startedAt
            }
            entities {
              nextToken
              startedAt
            }
            staffs {
              nextToken
              startedAt
            }
            balance {
              id
              adminCommissionRate
              totalEarnings
              withdrawnAmount
              currentBalance
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            withdraws {
              nextToken
              startedAt
            }
            users {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            organizationBalanceId
          }
          user {
            id
            name
            email
            isActiive
            orders {
              nextToken
              startedAt
            }
            organizationID
            organizations {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      email
      isActiive
      orders {
        items {
          id
          trakingNumber
          amount
          paidTotal
          discount
          deliveryFee
          deliveryTime
          billingAddress {
            streetAddress
            country
            city
            state
            zip
          }
          shippingAddress {
            streetAddress
            country
            city
            state
            zip
          }
          paymentGateway
          couponID
          entities {
            items {
              id
              name
              slug
              entityType
              description
              inStock
              isTaxable
              salePrice
              maxPrice
              minPrice
              sku
              status
              height
              lenght
              width
              price
              quantity
              unit
              orderID
              organizationID
              tagID
              typeID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          userID
          organizationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      organizationID
      organizations {
        items {
          id
          organizationID
          userID
          organization {
            id
            isActive
            name
            slug
            description
            coverImage {
              thumbnail
              original
            }
            logo {
              thumbnail
              original
            }
            address {
              streetAddress
              country
              city
              state
              zip
            }
            settings
            attributes {
              nextToken
              startedAt
            }
            orders {
              nextToken
              startedAt
            }
            entities {
              nextToken
              startedAt
            }
            staffs {
              nextToken
              startedAt
            }
            balance {
              id
              adminCommissionRate
              totalEarnings
              withdrawnAmount
              currentBalance
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            withdraws {
              nextToken
              startedAt
            }
            users {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            organizationBalanceId
          }
          user {
            id
            name
            email
            isActiive
            orders {
              nextToken
              startedAt
            }
            organizationID
            organizations {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
      id
      title
      default
      address {
        streetAddress
        country
        city
        state
        zip
      }
      type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
      id
      title
      default
      address {
        streetAddress
        country
        city
        state
        zip
      }
      type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
      id
      title
      default
      address {
        streetAddress
        country
        city
        state
        zip
      }
      type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createUserOrganization = /* GraphQL */ `
  mutation CreateUserOrganization(
    $input: CreateUserOrganizationInput!
    $condition: ModelUserOrganizationConditionInput
  ) {
    createUserOrganization(input: $input, condition: $condition) {
      id
      organizationID
      userID
      organization {
        id
        isActive
        name
        slug
        description
        coverImage {
          thumbnail
          original
        }
        logo {
          thumbnail
          original
        }
        address {
          streetAddress
          country
          city
          state
          zip
        }
        settings
        attributes {
          items {
            id
            name
            slug
            values {
              nextToken
              startedAt
            }
            organizationID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        orders {
          items {
            id
            trakingNumber
            amount
            paidTotal
            discount
            deliveryFee
            deliveryTime
            billingAddress {
              streetAddress
              country
              city
              state
              zip
            }
            shippingAddress {
              streetAddress
              country
              city
              state
              zip
            }
            paymentGateway
            couponID
            entities {
              nextToken
              startedAt
            }
            userID
            organizationID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        entities {
          items {
            id
            name
            slug
            entityType
            description
            inStock
            isTaxable
            salePrice
            maxPrice
            minPrice
            sku
            gallery {
              thumbnail
              original
            }
            image {
              thumbnail
              original
            }
            status
            height
            lenght
            width
            price
            quantity
            unit
            categories {
              nextToken
              startedAt
            }
            orderID
            organizationID
            tagID
            typeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        staffs {
          items {
            id
            name
            email
            isActiive
            orders {
              nextToken
              startedAt
            }
            organizationID
            organizations {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        balance {
          id
          adminCommissionRate
          totalEarnings
          withdrawnAmount
          currentBalance
          paymentInfo {
            account
            name
            email
            bank
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        withdraws {
          items {
            id
            amount
            status
            paymentMethod
            details
            note
            organizationID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        users {
          items {
            id
            organizationID
            userID
            organization {
              id
              isActive
              name
              slug
              description
              settings
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              organizationBalanceId
            }
            user {
              id
              name
              email
              isActiive
              organizationID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        organizationBalanceId
      }
      user {
        id
        name
        email
        isActiive
        orders {
          items {
            id
            trakingNumber
            amount
            paidTotal
            discount
            deliveryFee
            deliveryTime
            billingAddress {
              streetAddress
              country
              city
              state
              zip
            }
            shippingAddress {
              streetAddress
              country
              city
              state
              zip
            }
            paymentGateway
            couponID
            entities {
              nextToken
              startedAt
            }
            userID
            organizationID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        organizationID
        organizations {
          items {
            id
            organizationID
            userID
            organization {
              id
              isActive
              name
              slug
              description
              settings
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              organizationBalanceId
            }
            user {
              id
              name
              email
              isActiive
              organizationID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUserOrganization = /* GraphQL */ `
  mutation UpdateUserOrganization(
    $input: UpdateUserOrganizationInput!
    $condition: ModelUserOrganizationConditionInput
  ) {
    updateUserOrganization(input: $input, condition: $condition) {
      id
      organizationID
      userID
      organization {
        id
        isActive
        name
        slug
        description
        coverImage {
          thumbnail
          original
        }
        logo {
          thumbnail
          original
        }
        address {
          streetAddress
          country
          city
          state
          zip
        }
        settings
        attributes {
          items {
            id
            name
            slug
            values {
              nextToken
              startedAt
            }
            organizationID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        orders {
          items {
            id
            trakingNumber
            amount
            paidTotal
            discount
            deliveryFee
            deliveryTime
            billingAddress {
              streetAddress
              country
              city
              state
              zip
            }
            shippingAddress {
              streetAddress
              country
              city
              state
              zip
            }
            paymentGateway
            couponID
            entities {
              nextToken
              startedAt
            }
            userID
            organizationID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        entities {
          items {
            id
            name
            slug
            entityType
            description
            inStock
            isTaxable
            salePrice
            maxPrice
            minPrice
            sku
            gallery {
              thumbnail
              original
            }
            image {
              thumbnail
              original
            }
            status
            height
            lenght
            width
            price
            quantity
            unit
            categories {
              nextToken
              startedAt
            }
            orderID
            organizationID
            tagID
            typeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        staffs {
          items {
            id
            name
            email
            isActiive
            orders {
              nextToken
              startedAt
            }
            organizationID
            organizations {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        balance {
          id
          adminCommissionRate
          totalEarnings
          withdrawnAmount
          currentBalance
          paymentInfo {
            account
            name
            email
            bank
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        withdraws {
          items {
            id
            amount
            status
            paymentMethod
            details
            note
            organizationID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        users {
          items {
            id
            organizationID
            userID
            organization {
              id
              isActive
              name
              slug
              description
              settings
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              organizationBalanceId
            }
            user {
              id
              name
              email
              isActiive
              organizationID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        organizationBalanceId
      }
      user {
        id
        name
        email
        isActiive
        orders {
          items {
            id
            trakingNumber
            amount
            paidTotal
            discount
            deliveryFee
            deliveryTime
            billingAddress {
              streetAddress
              country
              city
              state
              zip
            }
            shippingAddress {
              streetAddress
              country
              city
              state
              zip
            }
            paymentGateway
            couponID
            entities {
              nextToken
              startedAt
            }
            userID
            organizationID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        organizationID
        organizations {
          items {
            id
            organizationID
            userID
            organization {
              id
              isActive
              name
              slug
              description
              settings
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              organizationBalanceId
            }
            user {
              id
              name
              email
              isActiive
              organizationID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUserOrganization = /* GraphQL */ `
  mutation DeleteUserOrganization(
    $input: DeleteUserOrganizationInput!
    $condition: ModelUserOrganizationConditionInput
  ) {
    deleteUserOrganization(input: $input, condition: $condition) {
      id
      organizationID
      userID
      organization {
        id
        isActive
        name
        slug
        description
        coverImage {
          thumbnail
          original
        }
        logo {
          thumbnail
          original
        }
        address {
          streetAddress
          country
          city
          state
          zip
        }
        settings
        attributes {
          items {
            id
            name
            slug
            values {
              nextToken
              startedAt
            }
            organizationID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        orders {
          items {
            id
            trakingNumber
            amount
            paidTotal
            discount
            deliveryFee
            deliveryTime
            billingAddress {
              streetAddress
              country
              city
              state
              zip
            }
            shippingAddress {
              streetAddress
              country
              city
              state
              zip
            }
            paymentGateway
            couponID
            entities {
              nextToken
              startedAt
            }
            userID
            organizationID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        entities {
          items {
            id
            name
            slug
            entityType
            description
            inStock
            isTaxable
            salePrice
            maxPrice
            minPrice
            sku
            gallery {
              thumbnail
              original
            }
            image {
              thumbnail
              original
            }
            status
            height
            lenght
            width
            price
            quantity
            unit
            categories {
              nextToken
              startedAt
            }
            orderID
            organizationID
            tagID
            typeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        staffs {
          items {
            id
            name
            email
            isActiive
            orders {
              nextToken
              startedAt
            }
            organizationID
            organizations {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        balance {
          id
          adminCommissionRate
          totalEarnings
          withdrawnAmount
          currentBalance
          paymentInfo {
            account
            name
            email
            bank
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        withdraws {
          items {
            id
            amount
            status
            paymentMethod
            details
            note
            organizationID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        users {
          items {
            id
            organizationID
            userID
            organization {
              id
              isActive
              name
              slug
              description
              settings
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              organizationBalanceId
            }
            user {
              id
              name
              email
              isActiive
              organizationID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        organizationBalanceId
      }
      user {
        id
        name
        email
        isActiive
        orders {
          items {
            id
            trakingNumber
            amount
            paidTotal
            discount
            deliveryFee
            deliveryTime
            billingAddress {
              streetAddress
              country
              city
              state
              zip
            }
            shippingAddress {
              streetAddress
              country
              city
              state
              zip
            }
            paymentGateway
            couponID
            entities {
              nextToken
              startedAt
            }
            userID
            organizationID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        organizationID
        organizations {
          items {
            id
            organizationID
            userID
            organization {
              id
              isActive
              name
              slug
              description
              settings
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              organizationBalanceId
            }
            user {
              id
              name
              email
              isActiive
              organizationID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createEntityCategory = /* GraphQL */ `
  mutation CreateEntityCategory(
    $input: CreateEntityCategoryInput!
    $condition: ModelEntityCategoryConditionInput
  ) {
    createEntityCategory(input: $input, condition: $condition) {
      id
      entityID
      categoryID
      entity {
        id
        name
        slug
        entityType
        description
        inStock
        isTaxable
        salePrice
        maxPrice
        minPrice
        sku
        gallery {
          thumbnail
          original
        }
        image {
          thumbnail
          original
        }
        status
        height
        lenght
        width
        price
        quantity
        unit
        categories {
          items {
            id
            entityID
            categoryID
            entity {
              id
              name
              slug
              entityType
              description
              inStock
              isTaxable
              salePrice
              maxPrice
              minPrice
              sku
              status
              height
              lenght
              width
              price
              quantity
              unit
              orderID
              organizationID
              tagID
              typeID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            category {
              id
              name
              slug
              details
              icon
              typeID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        orderID
        organizationID
        tagID
        typeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      category {
        id
        name
        slug
        details
        image {
          thumbnail
          original
        }
        icon
        entities {
          items {
            id
            entityID
            categoryID
            entity {
              id
              name
              slug
              entityType
              description
              inStock
              isTaxable
              salePrice
              maxPrice
              minPrice
              sku
              status
              height
              lenght
              width
              price
              quantity
              unit
              orderID
              organizationID
              tagID
              typeID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            category {
              id
              name
              slug
              details
              icon
              typeID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        typeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateEntityCategory = /* GraphQL */ `
  mutation UpdateEntityCategory(
    $input: UpdateEntityCategoryInput!
    $condition: ModelEntityCategoryConditionInput
  ) {
    updateEntityCategory(input: $input, condition: $condition) {
      id
      entityID
      categoryID
      entity {
        id
        name
        slug
        entityType
        description
        inStock
        isTaxable
        salePrice
        maxPrice
        minPrice
        sku
        gallery {
          thumbnail
          original
        }
        image {
          thumbnail
          original
        }
        status
        height
        lenght
        width
        price
        quantity
        unit
        categories {
          items {
            id
            entityID
            categoryID
            entity {
              id
              name
              slug
              entityType
              description
              inStock
              isTaxable
              salePrice
              maxPrice
              minPrice
              sku
              status
              height
              lenght
              width
              price
              quantity
              unit
              orderID
              organizationID
              tagID
              typeID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            category {
              id
              name
              slug
              details
              icon
              typeID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        orderID
        organizationID
        tagID
        typeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      category {
        id
        name
        slug
        details
        image {
          thumbnail
          original
        }
        icon
        entities {
          items {
            id
            entityID
            categoryID
            entity {
              id
              name
              slug
              entityType
              description
              inStock
              isTaxable
              salePrice
              maxPrice
              minPrice
              sku
              status
              height
              lenght
              width
              price
              quantity
              unit
              orderID
              organizationID
              tagID
              typeID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            category {
              id
              name
              slug
              details
              icon
              typeID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        typeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteEntityCategory = /* GraphQL */ `
  mutation DeleteEntityCategory(
    $input: DeleteEntityCategoryInput!
    $condition: ModelEntityCategoryConditionInput
  ) {
    deleteEntityCategory(input: $input, condition: $condition) {
      id
      entityID
      categoryID
      entity {
        id
        name
        slug
        entityType
        description
        inStock
        isTaxable
        salePrice
        maxPrice
        minPrice
        sku
        gallery {
          thumbnail
          original
        }
        image {
          thumbnail
          original
        }
        status
        height
        lenght
        width
        price
        quantity
        unit
        categories {
          items {
            id
            entityID
            categoryID
            entity {
              id
              name
              slug
              entityType
              description
              inStock
              isTaxable
              salePrice
              maxPrice
              minPrice
              sku
              status
              height
              lenght
              width
              price
              quantity
              unit
              orderID
              organizationID
              tagID
              typeID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            category {
              id
              name
              slug
              details
              icon
              typeID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        orderID
        organizationID
        tagID
        typeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      category {
        id
        name
        slug
        details
        image {
          thumbnail
          original
        }
        icon
        entities {
          items {
            id
            entityID
            categoryID
            entity {
              id
              name
              slug
              entityType
              description
              inStock
              isTaxable
              salePrice
              maxPrice
              minPrice
              sku
              status
              height
              lenght
              width
              price
              quantity
              unit
              orderID
              organizationID
              tagID
              typeID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            category {
              id
              name
              slug
              details
              icon
              typeID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        typeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
