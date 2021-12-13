import { AdminUiExtension } from '@vendure/ui-devkit/compiler';

export { ProductRecommendationsPlugin } from './src/recommend.plugin';

export const ProductRecommendationsInputModule: AdminUiExtension['ngModules'][0] = {
    type: 'shared',
    ngModuleFileName: 'recommend-input.module.ts',
    ngModuleName: 'RecommendInputModule',
};
