/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWithdraw = /* GraphQL */ `
  query GetWithdraw($id: ID!) {
    getWithdraw(id: $id) {
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
export const listWithdraws = /* GraphQL */ `
  query ListWithdraws(
    $filter: ModelWithdrawFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWithdraws(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncWithdraws = /* GraphQL */ `
  query SyncWithdraws(
    $filter: ModelWithdrawFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWithdraws(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getBanner = /* GraphQL */ `
  query GetBanner($id: ID!) {
    getBanner(id: $id) {
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
export const listBanners = /* GraphQL */ `
  query ListBanners(
    $filter: ModelBannerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBanners(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncBanners = /* GraphQL */ `
  query SyncBanners(
    $filter: ModelBannerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBanners(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getType = /* GraphQL */ `
  query GetType($id: ID!) {
    getType(id: $id) {
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
export const listTypes = /* GraphQL */ `
  query ListTypes(
    $filter: ModelTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTypes = /* GraphQL */ `
  query SyncTypes(
    $filter: ModelTypeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
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
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncTags = /* GraphQL */ `
  query SyncTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getBalance = /* GraphQL */ `
  query GetBalance($id: ID!) {
    getBalance(id: $id) {
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
export const listBalances = /* GraphQL */ `
  query ListBalances(
    $filter: ModelBalanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBalances(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncBalances = /* GraphQL */ `
  query SyncBalances(
    $filter: ModelBalanceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBalances(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getOrganization = /* GraphQL */ `
  query GetOrganization($id: ID!) {
    getOrganization(id: $id) {
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
          organizationID
          values {
            id
            value
            meta
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
          profile {
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
            profile {
              id
              bio
              contact
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
export const listOrganizations = /* GraphQL */ `
  query ListOrganizations(
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
            organizationID
            values {
              id
              value
              meta
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
            profile {
              id
              bio
              contact
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
      nextToken
      startedAt
    }
  }
`;
export const syncOrganizations = /* GraphQL */ `
  query SyncOrganizations(
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrganizations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
            organizationID
            values {
              id
              value
              meta
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
            profile {
              id
              bio
              contact
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
      nextToken
      startedAt
    }
  }
`;
export const getShipping = /* GraphQL */ `
  query GetShipping($id: ID!) {
    getShipping(id: $id) {
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
export const listShippings = /* GraphQL */ `
  query ListShippings(
    $filter: ModelShippingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShippings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncShippings = /* GraphQL */ `
  query SyncShippings(
    $filter: ModelShippingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncShippings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getEntityVariation = /* GraphQL */ `
  query GetEntityVariation($id: ID!) {
    getEntityVariation(id: $id) {
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
export const listEntityVariations = /* GraphQL */ `
  query ListEntityVariations(
    $filter: ModelEntityVariationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEntityVariations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncEntityVariations = /* GraphQL */ `
  query SyncEntityVariations(
    $filter: ModelEntityVariationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEntityVariations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getEntity = /* GraphQL */ `
  query GetEntity($id: ID!) {
    getEntity(id: $id) {
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
export const listEntities = /* GraphQL */ `
  query ListEntities(
    $filter: ModelEntityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEntities(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
      startedAt
    }
  }
`;
export const syncEntities = /* GraphQL */ `
  query SyncEntities(
    $filter: ModelEntityFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEntities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncOrders = /* GraphQL */ `
  query SyncOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getCoupon = /* GraphQL */ `
  query GetCoupon($id: ID!) {
    getCoupon(id: $id) {
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
export const listCoupons = /* GraphQL */ `
  query ListCoupons(
    $filter: ModelCouponFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoupons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCoupons = /* GraphQL */ `
  query SyncCoupons(
    $filter: ModelCouponFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCoupons(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getContact = /* GraphQL */ `
  query GetContact($id: ID!) {
    getContact(id: $id) {
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
export const listContacts = /* GraphQL */ `
  query ListContacts(
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncContacts = /* GraphQL */ `
  query SyncContacts(
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncContacts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
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
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCategories = /* GraphQL */ `
  query SyncCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const getAttribute = /* GraphQL */ `
  query GetAttribute($id: ID!) {
    getAttribute(id: $id) {
      id
      name
      slug
      organizationID
      values {
        id
        value
        meta
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listAttributes = /* GraphQL */ `
  query ListAttributes(
    $filter: ModelAttributeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttributes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        slug
        organizationID
        values {
          id
          value
          meta
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
  }
`;
export const syncAttributes = /* GraphQL */ `
  query SyncAttributes(
    $filter: ModelAttributeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAttributes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        slug
        organizationID
        values {
          id
          value
          meta
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
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
            profile {
              id
              bio
              contact
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
      profile {
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
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        profile {
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
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        profile {
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
  }
`;
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
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
export const listAddresses = /* GraphQL */ `
  query ListAddresses(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncAddresses = /* GraphQL */ `
  query SyncAddresses(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAddresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUserOrganization = /* GraphQL */ `
  query GetUserOrganization($id: ID!) {
    getUserOrganization(id: $id) {
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
            organizationID
            values {
              id
              value
              meta
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
            profile {
              id
              bio
              contact
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
        profile {
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
export const listUserOrganizations = /* GraphQL */ `
  query ListUserOrganizations(
    $filter: ModelUserOrganizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserOrganizations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
            items {
              id
              name
              slug
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
          staffs {
            items {
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
          profile {
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
  }
`;
export const syncUserOrganizations = /* GraphQL */ `
  query SyncUserOrganizations(
    $filter: ModelUserOrganizationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserOrganizations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
            items {
              id
              name
              slug
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
          staffs {
            items {
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
          profile {
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
  }
`;
export const getEntityCategory = /* GraphQL */ `
  query GetEntityCategory($id: ID!) {
    getEntityCategory(id: $id) {
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
export const listEntityCategories = /* GraphQL */ `
  query ListEntityCategories(
    $filter: ModelEntityCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEntityCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const syncEntityCategories = /* GraphQL */ `
  query SyncEntityCategories(
    $filter: ModelEntityCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEntityCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
    }
  }
`;
