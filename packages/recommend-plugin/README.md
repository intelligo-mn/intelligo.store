# About

This vendure plugin adds product recommendations, namely cross- and upselling, to the products. It's up to your frontend to fetch them, a graphql API is provided.

# Disclaimers

- I'm not actively supporting this plugin in the sense of that I will ensure its functionality for all possibe use cases or add features, I simply don't have the time for that. This repo just contains a copy of the plugin I'm using for my projects but if you're interested in adding features you are of course welcome to create pull requests.
- There are no tests yet. If you plan to use this plugin in production, you're welcome to create pull requests.

# Import

Import the vendure plugin from `@platform-sale/recommend-plugin` and add it the `plugins` section in

`vendure-config.ts`:
	
	import { ProductRecommendationsPlugin } from "@platform-sale/recommend-plugin";
	...
	export const config: VendureConfig = {
	  ...
	  plugins: [
	    ...,
		ProductRecommendationsPlugin
	  ]
	}
	
# Usage

The following graphql endpoints are added:

## Admin

    enum RecommendationType {
        CROSSSELL
        UPSELL
      }
	  
    type ProductRecommendation {
        product: Product!
        recommendation: Product!
        type: RecommendationType!
    }
    extend type Query {
        productRecommendations(productId: ID!): [ProductRecommendation!]!
    }
    extend type Mutation {
        updateCrossSellingProducts(productId: ID!, productIds: [ID!]): Boolean!
        updateUpSellingProducts(productId: ID!, productIds: [ID!]): Boolean!
    }

## Shop

    enum RecommendationType {
        CROSSSELL
        UPSELL
    }
    type ProductRecommendation {
        product: Product!
        recommendation: Product!
        type: RecommendationType!
    }
    extend type Query {
        productRecommendations(productId: ID!): [ProductRecommendation!]!
    }