import Home from '../pages/Home/routes'
import AboutUs from '../pages/AboutUs/routes'
import Products from '../pages/Products/routes'

const mainRoutes = [...Home, ...AboutUs, ...Products ]
//TODO: Create a error page
const errorRoutes = []

const allRoutes = [...mainRoutes, ...errorRoutes]

export default allRoutes
