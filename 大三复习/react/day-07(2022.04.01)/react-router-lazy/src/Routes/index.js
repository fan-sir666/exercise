import { lazy } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import LazyRouter from '../components/LazyRouter'

const Home = LazyRouter(lazy(() => import(/*webpackChunkName:"Home"*/ "../components/Home")))
const About = LazyRouter(lazy(() => import(/*webpackChunkName:"Home"*/ "../components/About")))
const JieShao = LazyRouter(lazy(() => import(/*webpackChunkName:"Home"*/ "../components/JieShao")))
const LianMy = LazyRouter(lazy(() => import(/*webpackChunkName:"Home"*/ "../components/LianMy")))

const routes = [
    { path: '/', element: <Home /> },
    {
        path: '/about',
        element: <About />,
        children: [
            { path: 'jieshao', element: <JieShao /> },
            { path: 'lianmy', element: <LianMy /> }
        ]
    },
]

export default function AppRoute() {
    return useRoutes(routes)
}