import { ID, LanguageCode, PluginCommonModule, VendurePlugin } from '@vendure/core';
import gql from 'graphql-tag';

import {
    ProductEntityResolver,
    ProductRecommendationAdminResolver,
    ProductRecommendationEntityResolver,
    ProductRecommendationShopResolver,
} from './api/recommend.resolver';
import { ProductRecommendation, RecommendationType } from './entities/recommend.entity';
import { ProductRecommendationService } from './service/recommend.service';

export type ProductRecommendationInput = {
    product: ID;
    recommendation: ID;
    type: RecommendationType;
};

const adminSchemaExtension = gql`
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
        updateCrossSellingProducts(productId: ID!, productIds: [ID!]!): Boolean!
        updateUpSellingProducts(productId: ID!, productIds: [ID!]!): Boolean!
    }
    extend type Product {
        recommendations: [ProductRecommendation!]!
    }
`;

const shopSchemaExtension = gql`
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
    extend type Product {
        recommendations: [ProductRecommendation!]!
    }
`;

@VendurePlugin({
    imports: [PluginCommonModule],
    entities: [ProductRecommendation],
    providers: [ProductRecommendationService],
    adminApiExtensions: {
        schema: adminSchemaExtension,
        resolvers: [
            ProductRecommendationAdminResolver,
            ProductRecommendationEntityResolver,
            ProductEntityResolver,
        ],
    },
    shopApiExtensions: {
        schema: shopSchemaExtension,
        resolvers: [
            ProductRecommendationShopResolver,
            ProductRecommendationEntityResolver,
            ProductEntityResolver,
        ],
    },
    configuration: config => {
        config.customFields.Product.push({
            type: 'boolean',
            name: 'productRecommendationsEnabled',
            label: [{ languageCode: LanguageCode.en, value: 'Has product recommendations' }],
        });
        return config;
    },
})
export class ProductRecommendationsPlugin {}
