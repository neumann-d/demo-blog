import Home from '../pages/Home/routes'

const mainRoutes = [...Home ]
//TODO: Create a error page
const errorRoutes = []

const allRoutes = [...mainRoutes, ...errorRoutes]

export default allRoutes
