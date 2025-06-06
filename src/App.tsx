import { BrowserRouter, Route, Routes } from "react-router"
import React, { Suspense } from "react"
import Header from "./components/Header"

const Home = React.lazy(() => import("./pages/Home"))
const Shop = React.lazy(() => import("./pages/Shop"))
const ProductPage = React.lazy(() => import("./pages/ProductPage"))
const ErrorPage = React.lazy(() => import("./pages/Error"))

function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
