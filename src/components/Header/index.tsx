import { ShoppingCart } from "@phosphor-icons/react";
import { HeaderContainer, NavLinks, ImageLogo, ButtonCart } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <NavLinks>
        <a className="link" href="">Home</a>
        <a className="link" href="">Store</a>
        <a className="link" href="">About</a>
        <ImageLogo src="/images/logo.png" alt="" />
        <a className="link" href="">Blog</a>
        <a className="link" href="">Pages</a>
        <a className="link" href="">Contact</a>
      </NavLinks>
      <ButtonCart>
        <ShoppingCart size={28} weight="thin" />
        <span className="items_quantity">2</span>
      </ButtonCart>
    </HeaderContainer>
  )
}
