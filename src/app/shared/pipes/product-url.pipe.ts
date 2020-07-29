import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'productUrl',
})
export class ProductUrlPipe implements PipeTransform {

    transform(value: { id?: string; productId?: string; slug: string; }): string {
        const { id, productId, slug } = value;
        return slug;
    }

}
