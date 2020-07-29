import { ParamMap } from '@angular/router';

/**
 * Reads the paramName array from the current route. The rather convoluted
 * logic is in place due to an apparent bug in the Angular router.
 * See https://github.com/angular/angular/issues/19179
 */
export function getRouteArrayParam(paramMap: ParamMap, paramName: string): string[] {
    const existing = paramMap.getAll(paramName);
    if (!existing) {
        return [];
    }
    let result = existing;
    if (existing.length === 1) {
        const value = existing[0];
        if (value.indexOf(',') > -1) {
            result = value.split(',');
        } else {
            result = [value];
        }
    }
    return result.filter(x => !!x);
}
