import { ShoppingCart } from "@phosphor-icons/react";
import { HeaderContainer, NavLinks, ImageLogo, ButtonCart } from "./styles";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header() {
  const { cart } = useCart()

  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <NavLinks>
        <a className="link" href="">Home</a>
        <a className="link" href="">Store</a>
        <a className="link" href="">About</a>
        <ImageLogo src="/images/logo.png" onClick={() => navigate('/')} />
        <a className="link" href="">Blog</a>
        <a className="link" href="">Pages</a>
        <a className="link" href="">Contact</a>
      </NavLinks>
      <ButtonCart onClick={() => navigate('/cart')}>
        <ShoppingCart size={28} weight="thin" />
        {cart.length > 0 ? <span className="items_quantity">{cart.length}</span> : <></>}
      </ButtonCart>
    </HeaderContainer>
  )
}
