import { InternalServerError } from '../../common/error/errors';

import { AssetPreviewStrategy } from './asset-preview-strategy';

/**
 * A placeholder strategy which will simply throw an error when used.
 */
export class NoAssetPreviewStrategy implements AssetPreviewStrategy {
    generatePreviewImage(mimeType: string, data: Buffer): Promise<Buffer> {
        throw new InternalServerError('error.no-asset-preview-strategy-configured');
    }
}
