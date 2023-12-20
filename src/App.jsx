import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Cart from './features/cart/Cart'
import Menu, { loader as menuLoader } from './features/menu/Menu'
import CreateOrder from './features/order/CreateOrder'
import Order from './features/order/Order'
import AppLayout from './ui/AppLayout'
import Error from './ui/Error'
import Home from './ui/Home'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/menu',
        element: <Menu />,
        errorElement: <Error />,
        loader: menuLoader
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/order/new',
        element: <CreateOrder />
      },
      {
        path: '/order/:orderID',
        element: <Order />
      }
    ]
  }
])

export default function App() {
  return (
    <RouterProvider router={router}>
      <div>hello vite</div>
    </RouterProvider>
  )
}
