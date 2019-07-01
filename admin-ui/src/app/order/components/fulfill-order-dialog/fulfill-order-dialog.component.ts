import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { FulfillOrderInput, OrderWithLines, OrderWithLinesFragment } from '../../../common/generated-types';
import { Dialog } from '../../../shared/providers/modal/modal.service';

@Component({
    selector: 'vdr-fulfill-order-dialog',
    templateUrl: './fulfill-order-dialog.component.html',
    styleUrls: ['./fulfill-order-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FulfillOrderDialogComponent implements Dialog<FulfillOrderInput>, OnInit {
    order: OrderWithLinesFragment;
    resolveWith: (result?: FulfillOrderInput) => void;
    method = '';
    trackingCode = '';
    fulfillmentQuantities: { [lineId: string]: number } = {};

    ngOnInit(): void {
        this.fulfillmentQuantities = this.order.lines.reduce((result, line) => {
            return {
                ...result,
                [line.id]: this.getUnfulfilledCount(line),
            };
        }, {});
        if (this.order.shippingMethod) {
            this.method = this.order.shippingMethod.description;
        }
    }

    getUnfulfilledCount(line: OrderWithLines.Lines): number {
        const fulfilled = line.items.reduce((sum, item) => sum + (item.fulfillment ? 1 : 0), 0);
        return line.quantity - fulfilled;
    }

    select() {
        const lines = Object.entries(this.fulfillmentQuantities).map(([orderLineId, quantity]) => ({
            orderLineId,
            quantity,
        }));
        this.resolveWith({
            lines,
            trackingCode: this.trackingCode,
            method: this.method,
        });
    }

    cancel() {
        this.resolveWith();
    }
}
