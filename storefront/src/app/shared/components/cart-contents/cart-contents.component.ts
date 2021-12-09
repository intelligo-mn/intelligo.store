import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Cart, CartFragment, GetActiveOrder } from '../../../common/generated-types';

@Component({
    selector: 'vsf-cart-contents',
    templateUrl: './cart-contents.component.html',
    styleUrls: ['./cart-contents.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartContentsComponent {
    @Input() cart: GetActiveOrder.ActiveOrder;
    @Input() canAdjustQuantities = false;
    @Output() setQuantity = new EventEmitter<{ itemId: string; quantity: number; }>();

    increment(item: Cart.Lines) {
        this.setQuantity.emit({ itemId: item.id, quantity: item.quantity + 1 });
    }

    decrement(item: Cart.Lines) {
        this.setQuantity.emit({ itemId: item.id, quantity: item.quantity - 1 });
    }

    trackByFn(index: number, line: { id: string; }) {
        return line.id;
    }

    trackByDiscount(index: number, discount: Cart.Discounts) {
        return discount.adjustmentSource;
    }

    isDiscounted(line: CartFragment['lines'][number]): boolean {
        return line.discountedLinePriceWithTax < line.linePriceWithTax;
    }

    /**
     * Filters out the Promotion adjustments for an OrderLine and aggregates the discount.
     */
    getLinePromotions(adjustments: Cart.Discounts[]) {
        const groupedPromotions = adjustments.filter(a => a.type === 'PROMOTION')
            .reduce((groups, promotion) => {
                if (!groups[promotion.description]) {
                    groups[promotion.description] = promotion.amount;
                } else {
                    groups[promotion.description] += promotion.amount;
                }
                return groups;
            }, {} as { [description: string]: number; });
        return Object.entries(groupedPromotions).map(([key, value]) => ({ description: key, amount: value }));
    }
}
