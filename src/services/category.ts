import service from '.'

export default {
  allCategories: () => service.get('/category/')
}