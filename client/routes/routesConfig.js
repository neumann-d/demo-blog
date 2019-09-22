import Home from '../pages/Home/routes'
import AboutUs from '../pages/AboutUs/routes'
import Products from '../pages/Products/routes'
import Services from '../pages/Services/routes'

const mainRoutes = [...Home, ...AboutUs, ...Products, ...Services ]
//TODO: Create a error page
const errorRoutes = []

const allRoutes = [...mainRoutes, ...errorRoutes]

export default allRoutes
