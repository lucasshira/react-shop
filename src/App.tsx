import { BrowserRouter, Route, Routes } from "react-router"
import React, { Suspense } from "react"
import Header from "./components/Header"
import Shop from "./pages/Shop"

const Home = React.lazy(() => import("./pages/Home"))
const ProductPage = React.lazy(() => import("./pages/ProductPage"))

function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
