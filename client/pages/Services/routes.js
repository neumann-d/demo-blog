// const HomePageRouteAsync = LazyRouting({
//   loader: () => import(/* webpackChunkName: 'home' */'./index')
// })
import Services from './index'

const ServicesPageRoute= [
  {
    path: '/services',
    component: Services,
    exact: true,
  }
]

export default ServicesPageRoute