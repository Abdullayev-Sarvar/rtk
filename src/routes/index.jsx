import React from 'react'
import { useRoutes } from 'react-router-dom'
import { Suspense, lazy } from 'react'

const Home = lazy(() => import('./home/Home'))
const Login = lazy(() => import('./login/Login'))
const Cart = lazy(() => import('./cart/Cart'))

const RoutesController = () => {
  return useRoutes([
    {
      path: '/',
      element: <Suspense fallback={<div className='w-full max-w-[1366px] h-full mx-auto px-4 py-2'>Loading...</div>}><Home /></Suspense>
    },
    {
      path: '/login',
      element: <Suspense fallback={<div className='w-full max-w-[1366px] h-full mx-auto px-4 py-2'>Loading...</div>}><Login /></Suspense>
    },
    {
      path: '/cart',
      element: <Suspense fallback={<div className='w-full max-w-[1366px] h-full mx-auto px-4 py-2'>Loading...</div>}><Cart /></Suspense>
    }
  ])
}

export default RoutesController