import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 1.6rem 5.3rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const NavLinks = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .link {
    color: ${(p) => p.theme["black"]};
    text-transform: uppercase;
    font-size: 0.875rem;
    line-height: 1rem;
    font-weight: 700;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    text-decoration: none;
    transition: color 0.15s;

    &:hover {
      color: ${(p) => p.theme["green"]};
    }
  }
`;

export const ImageLogo = styled.img`
  position: relative;
  cursor: pointer;
  top: -15px;
`;

export const ButtonCart = styled.button`
  line-height: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.45rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: relative;

  .items_quantity {
    border-radius: 9999px;
    background-color: ${(p) => p.theme["green"]};
    position: absolute;
    width: 1rem;
    height: 1rem;
    padding: 0.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    color: ${(p) => p.theme["white"]};
    top: 0;
    right: 0;
  }
`;
