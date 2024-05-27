import { Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home";
import { DefaultLayout } from "./layout/DefaultLayout";
import { CartList } from "./screens/CartList";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartList />} />
      </Route>
    </Routes>
  )
}
