import styled from "styled-components";

export const PlantCard = styled.main`
  overflow: hidden;
  border: 1px solid ${(p) => p.theme["gray-100"]};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  position: relative;
`;

export const PlantFigure = styled.figure`
  width: 100%;
  height: 224px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  position: relative;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    .cart {
      transform: translateY(90px);
    }
  }
`;

export const AddToCartButton = styled.button`
  width: 80%;
  padding: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 10px;
  border: 1px solid transparent;
  background-color: ${(p) => p.theme["green"]};
  color: ${(p) => p.theme["white"]};
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
  cursor: pointer;
  position: absolute;
  transform: translateY(130px);
  transition: all 0.25s;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const PlantDesc = styled.div`
  padding: 1.5625rem 0.625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & > p {
    color: ${(p) => p.theme["gray"]};
    font-size: 0.85rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    line-height: 1.6;
  }
`;

export const PlantTags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

interface TagProps {
  variant: "hot" | "sale";
}

export const Tag = styled.span<TagProps>`
  transform: rotate(90deg);
  position: absolute;
  top: 4px;
  user-select: none;
  left: ${(p) => {
    if (p.variant === "hot") {
      return "-23px";
    }
    if (p.variant === "sale") {
      return "140px";
    }
  }};
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 500;
  color: ${(p) => p.theme["white"]};
  background-color: ${(p) => {
    if (p.variant === "hot") {
      return p.theme["orange"];
    }
    if (p.variant === "sale") {
      return p.theme["green"];
    }
  }};
  padding: 5px 15px;
  letter-spacing: 2px;
  padding-left: 30px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  font-size: 0.875rem;
  line-height: 1rem;
`;

export const Prices = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  line-height: 1.125rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 900;

  & > p {
    color: ${p => p.theme['gray-200']};
    font-weight: 400;
    text-decoration: line-through;
    font-size: .9rem;
  }
`;
