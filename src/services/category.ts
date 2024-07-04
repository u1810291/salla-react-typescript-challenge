import service from '../services'

export default {
  allCategories: service.get('/category/')
}