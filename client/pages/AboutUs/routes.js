// const HomePageRouteAsync = LazyRouting({
//   loader: () => import(/* webpackChunkName: 'home' */'./index')
// })
import About from './index'

const AboutPageRoute= [
  {
    path: '/aboutUs',
    component: About,
    exact: true,
  }
]

export default AboutPageRoute