import services from '.';

export default {
  getProducts: () => services.get(`/product/`)
}