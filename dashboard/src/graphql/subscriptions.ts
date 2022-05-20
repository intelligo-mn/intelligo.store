/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateWithdraw = /* GraphQL */ `
  subscription OnCreateWithdraw {
    onCreateWithdraw {
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
export const onUpdateWithdraw = /* GraphQL */ `
  subscription OnUpdateWithdraw {
    onUpdateWithdraw {
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
export const onDeleteWithdraw = /* GraphQL */ `
  subscription OnDeleteWithdraw {
    onDeleteWithdraw {
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
export const onCreateBanner = /* GraphQL */ `
  subscription OnCreateBanner {
    onCreateBanner {
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
export const onUpdateBanner = /* GraphQL */ `
  subscription OnUpdateBanner {
    onUpdateBanner {
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
export const onDeleteBanner = /* GraphQL */ `
  subscription OnDeleteBanner {
    onDeleteBanner {
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
export const onCreateType = /* GraphQL */ `
  subscription OnCreateType {
    onCreateType {
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
export const onUpdateType = /* GraphQL */ `
  subscription OnUpdateType {
    onUpdateType {
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
export const onDeleteType = /* GraphQL */ `
  subscription OnDeleteType {
    onDeleteType {
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
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
export const onCreateBalance = /* GraphQL */ `
  subscription OnCreateBalance {
    onCreateBalance {
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
export const onUpdateBalance = /* GraphQL */ `
  subscription OnUpdateBalance {
    onUpdateBalance {
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
export const onDeleteBalance = /* GraphQL */ `
  subscription OnDeleteBalance {
    onDeleteBalance {
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
export const onCreateOrganization = /* GraphQL */ `
  subscription OnCreateOrganization {
    onCreateOrganization {
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
export const onUpdateOrganization = /* GraphQL */ `
  subscription OnUpdateOrganization {
    onUpdateOrganization {
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
export const onDeleteOrganization = /* GraphQL */ `
  subscription OnDeleteOrganization {
    onDeleteOrganization {
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
export const onCreateShipping = /* GraphQL */ `
  subscription OnCreateShipping {
    onCreateShipping {
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
export const onUpdateShipping = /* GraphQL */ `
  subscription OnUpdateShipping {
    onUpdateShipping {
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
export const onDeleteShipping = /* GraphQL */ `
  subscription OnDeleteShipping {
    onDeleteShipping {
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
export const onCreateEntityVariation = /* GraphQL */ `
  subscription OnCreateEntityVariation {
    onCreateEntityVariation {
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
export const onUpdateEntityVariation = /* GraphQL */ `
  subscription OnUpdateEntityVariation {
    onUpdateEntityVariation {
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
export const onDeleteEntityVariation = /* GraphQL */ `
  subscription OnDeleteEntityVariation {
    onDeleteEntityVariation {
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
export const onCreateEntity = /* GraphQL */ `
  subscription OnCreateEntity {
    onCreateEntity {
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
export const onUpdateEntity = /* GraphQL */ `
  subscription OnUpdateEntity {
    onUpdateEntity {
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
export const onDeleteEntity = /* GraphQL */ `
  subscription OnDeleteEntity {
    onDeleteEntity {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
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
export const onCreateCoupon = /* GraphQL */ `
  subscription OnCreateCoupon {
    onCreateCoupon {
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
export const onUpdateCoupon = /* GraphQL */ `
  subscription OnUpdateCoupon {
    onUpdateCoupon {
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
export const onDeleteCoupon = /* GraphQL */ `
  subscription OnDeleteCoupon {
    onDeleteCoupon {
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
export const onCreateContact = /* GraphQL */ `
  subscription OnCreateContact {
    onCreateContact {
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
export const onUpdateContact = /* GraphQL */ `
  subscription OnUpdateContact {
    onUpdateContact {
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
export const onDeleteContact = /* GraphQL */ `
  subscription OnDeleteContact {
    onDeleteContact {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
export const onCreateAttribute = /* GraphQL */ `
  subscription OnCreateAttribute {
    onCreateAttribute {
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
export const onUpdateAttribute = /* GraphQL */ `
  subscription OnUpdateAttribute {
    onUpdateAttribute {
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
export const onDeleteAttribute = /* GraphQL */ `
  subscription OnDeleteAttribute {
    onDeleteAttribute {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress($owner: String) {
    onCreateAddress(owner: $owner) {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress($owner: String) {
    onUpdateAddress(owner: $owner) {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress($owner: String) {
    onDeleteAddress(owner: $owner) {
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
export const onCreateUserOrganization = /* GraphQL */ `
  subscription OnCreateUserOrganization {
    onCreateUserOrganization {
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
export const onUpdateUserOrganization = /* GraphQL */ `
  subscription OnUpdateUserOrganization {
    onUpdateUserOrganization {
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
export const onDeleteUserOrganization = /* GraphQL */ `
  subscription OnDeleteUserOrganization {
    onDeleteUserOrganization {
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
export const onCreateEntityCategory = /* GraphQL */ `
  subscription OnCreateEntityCategory {
    onCreateEntityCategory {
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
export const onUpdateEntityCategory = /* GraphQL */ `
  subscription OnUpdateEntityCategory {
    onUpdateEntityCategory {
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
export const onDeleteEntityCategory = /* GraphQL */ `
  subscription OnDeleteEntityCategory {
    onDeleteEntityCategory {
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
