// const HomePageRouteAsync = LazyRouting({
//   loader: () => import(/* webpackChunkName: 'home' */'./index')
// })
import Contact from './index'

const ContactPageRoute= [
  {
    path: '/',
    component: Contact,
    exact: true,
  }
]

export default ContactPageRoute