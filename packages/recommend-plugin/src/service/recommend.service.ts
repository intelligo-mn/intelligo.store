import { Injectable } from '@nestjs/common';
import { DeletionResponse, DeletionResult } from '@vendure/common/lib/generated-types';
import { assertFound, ID, Product, TransactionalConnection } from '@vendure/core';
import { In } from 'typeorm';
import { FindManyOptions } from 'typeorm/find-options/FindManyOptions';

import { ProductRecommendation } from './../entities/recommend.entity';
import { ProductRecommendationInput } from './../recommend.plugin';

@Injectable()
export class ProductRecommendationService {
    constructor(private connection: TransactionalConnection) {}

    findAll(options: FindManyOptions<ProductRecommendation> | undefined): Promise<ProductRecommendation[]> {
        return this.connection.getRepository(ProductRecommendation).find(options);
    }
    findOne(recommendationId: ID): Promise<ProductRecommendation | undefined> {
        return this.connection
            .getRepository(ProductRecommendation)
            .findOne(recommendationId, { loadEagerRelations: true });
    }

    async create(input: ProductRecommendationInput): Promise<ProductRecommendation> {
        const recommendation = new ProductRecommendation({
            product: await this.connection.getRepository(Product).findOne(input.product),
            recommendation: await this.connection.getRepository(Product).findOne(input.recommendation),
            type: input.type,
        });
        const newRecommendation = await this.connection
            .getRepository(ProductRecommendation)
            .save(recommendation);

        return assertFound(this.findOne(newRecommendation.id));
    }

    async delete(ids: ID[]): Promise<DeletionResponse> {
        try {
            await this.connection.rawConnection
                .createQueryBuilder()
                .delete()
                .from(ProductRecommendation)
                .where({ id: In(ids) })
                .execute();

            return {
                result: DeletionResult.DELETED,
            };
        } catch (e) {
            return {
                result: DeletionResult.NOT_DELETED,
                message: e instanceof Error ? e.toString() : '',
            };
        }
    }
}
