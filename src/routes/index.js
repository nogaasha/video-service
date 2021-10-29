import Login from "../pages/login"
import Films from "../pages/films"

export const publicRoutes = [
  {
    path: '/login',
    component: Login,
    exact: true,
  }
]

export const privateRoutes = [
  {
    path: '/',
    component: Films,
    exact: true,
  }
]