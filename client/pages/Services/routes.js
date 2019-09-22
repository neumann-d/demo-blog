// const HomePageRouteAsync = LazyRouting({
//   loader: () => import(/* webpackChunkName: 'home' */'./index')
// })
import Services from './index'

const ServicesPageRoute= [
  {
    path: '/',
    component: Services,
    exact: true,
  }
]

export default ServicesPageRoute