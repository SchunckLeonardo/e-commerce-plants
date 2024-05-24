import styled from "styled-components";

export const SectionWhyChooseUs = styled.section`
  margin: 1rem 5.3rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
`;

export const PerfectChoice = styled.figure`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const WhyChoose = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 60%;

  h3 {
    color: ${(p) => p.theme["black"]};
    font-weight: bold;
    font-family: "Playfair Display", serif;
    font-size: 2rem;
    position: relative;

    &::before {
      content: "";
      width: 15%;
      height: 3px;
      background-color: ${(p) => p.theme["green"]};
      position: absolute;
      bottom: -10px;
    }
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    text-align: left;
    color: ${(p) => p.theme["gray"]};
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }
`;

export const Qualities = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
`;

export const Quality = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  .icon {
    color: ${(p) => p.theme["green"]};
    width: 20%;
    font-size: 70px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: .3rem;
    width: 100%;
  }

  h4 {
    font-size: 1.2rem;
    font-weight: bold;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }

  p {
    color: ${p => p.theme['gray']};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1rem;
  }
`;
