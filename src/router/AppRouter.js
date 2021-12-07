import react from 'react'
import { useRoutes } from 'react-router'
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer'


export const AppRouter = () => {

    const routes = useRoutes ([
        {patch="/", element= <ItemListContainer />},
        {patch="/Productos/:catId/", element= <ItemListContainer />},
        {patch="/detail/:prodId", element= <ItemDetailContainer /> },
        {patch="/cart", element= <CartView />},
        {patch="*", element= <Navigate ro="/"/>},

    ])
}