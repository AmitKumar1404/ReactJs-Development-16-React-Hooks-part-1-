// 1. Import Area
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { routes } from './routes/Routes';
import Layout from './components/Layout';

// Definition Area
export default function App() {
  
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
            {
                routes.map((cv,idx,arr)=>{
                    return <Route path={cv.path} element={cv.element}></Route>
                })
            }
            </Route>
        </Routes>
    </BrowserRouter>
)
}
