import Model, { attr } from '@ember-data/model';

export default class SearchModel extends Model {
  @attr city;
  @attr lat;
  @attr lon;
  @attr data;
}
