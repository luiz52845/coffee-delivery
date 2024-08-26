import { Routes, Route } from 'react-router-dom'
import { Cart } from './pages/Cart'
import { Success } from './pages/Success/index'
import { Home } from './pages/Home'
import { DefaultLyouts } from './layouts/DefaultLyouts'

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLyouts></DefaultLyouts>}>
                <Route path='/' element={<Home />} />
                <Route path='/Cart' element={<Cart />} />
                <Route path="/order/:orderId/success" element={<Success />} />
            </Route>
        </Routes>
    )

}