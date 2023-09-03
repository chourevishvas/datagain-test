import React ,{lazy ,Suspense} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Home = lazy(() => import('./Components/Home/Home'))
const Sheet = lazy(() => import('./Components/Sheet/Sheet'))



export default function RoutesComp() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/sheet" element={<Sheet />} />
        </Route>
      </Routes>
    </BrowserRouter>
      </Suspense>
       
    </div>
  )
}
