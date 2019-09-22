// const HomePageRouteAsync = LazyRouting({
//   loader: () => import(/* webpackChunkName: 'home' */'./index')
// })
import Products from './index'

const ProductsPageRoute= [
  {
    path: '/products',
    component: Products,
    exact: true,
  }
]

export default ProductsPageRoute