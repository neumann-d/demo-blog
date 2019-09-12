import Home from '../pages/Home/routes'
import AboutUs from '../pages/AboutUs/routes'

const mainRoutes = [...Home, ...AboutUs ]
//TODO: Create a error page
const errorRoutes = []

const allRoutes = [...mainRoutes, ...errorRoutes]

export default allRoutes
