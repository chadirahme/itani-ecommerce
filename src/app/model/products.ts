export class Products {

  _id?: string;
  category?: string;
  name?: string;
  descr?: string;
  price?: number;
  path?: string;


  constructor(product: Products = {}) {
    this._id = product._id;
    this.category = product.category;
    this.name = product.name;
    this.descr = product.descr;
    this.price = product.price;
    this.path = product.path;
  }

}
