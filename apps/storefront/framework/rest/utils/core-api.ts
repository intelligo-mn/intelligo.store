import pickBy from 'lodash/pickBy';
import Request from './request';
type NumberOrString = number | string;
export type ParamsType = {
  type?: string;
  text?: string;
  category?: string;
  tags?: string;
  variations?: string;
  status?: string;
  is_active?: string;
  shop_id?: string;
  limit?: number;
  sortedBy?: string;
  orderBy?: string;
  min_price?: string;
  max_price?: string;
};
export class CoreApi {
  http = Request;
  constructor(public _base_path: string) {}
  private stringifySearchQuery(values: any) {
    const parsedValues = pickBy(values);
    return Object.keys(parsedValues)
      .map((k) => {
        if (k === 'type') {
          return `${k}.slug:${parsedValues[k]};`;
        }
        if (k === 'category') {
          return `categories.slug:${parsedValues[k]};`;
        }
        if (k === 'tags') {
          return `tags.slug:${parsedValues[k]};`;
        }
        if (k === 'variations') {
          return `variations.value:${parsedValues[k]};`;
        }
        return `${k}:${parsedValues[k]};`;
      })
      .join('')
      .slice(0, -1);
  }
  find(params: ParamsType) {
    const {
      type,
      text: name,
      category,
      tags,
      variations,
      status,
      is_active,
      shop_id,
      limit = 30,
      sortedBy="DESC",
      orderBy="created_at",
      min_price,
      max_price
    } = params;
    const searchString = this.stringifySearchQuery({
      type,
      name,
      category,
      tags,
      variations,
      status,
      shop_id,
      is_active,
      min_price,
      max_price
    });
    const queryString = `?search=${searchString}&searchJoin=and&limit=${limit}&sortedBy=${sortedBy}&orderBy=${orderBy}`;
    return this.http.get(this._base_path + queryString);
  }
  findAll() {
    return this.http.get(this._base_path);
  }
  fetchUrl(url: string) {
    return this.http.get(url);
  }
  postUrl(url: string, data: any) {
    return this.http.post(url, data);
  }
  findOne(id: NumberOrString) {
    return this.http.get(`${this._base_path}/${id}`);
  }
  create(data: any, options?: any) {
    return this.http
      .post(this._base_path, data, options)
      .then((res) => res.data);
  }
  update(id: NumberOrString, data: any) {
    return this.http
      .put(`${this._base_path}/${id}`, data)
      .then((res) => res.data);
  }
  delete(id: NumberOrString) {
    return this.http.delete(`${this._base_path}/${id}`);
  }
}
