import styled from "styled-components";

export const PlantResume = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 1rem;

  img {
    width: 15%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: .5rem;

    h4 {
      font-size: .9rem;
      color: ${p => p.theme['black']};
    }

    p {
      color: ${p => p.theme['gray']};
      font-size: 0.8rem;
    }

    button {
      width: 31%;
      border: none;
      background-color: transparent;
      padding: 0;
      font-weight: 600;
      cursor: pointer;
    }
  }
`

export const Quantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .2rem;
  border: 1px solid ${p => p.theme['gray-100']};
  padding: 0.3rem;
  border-radius: 6px;
  width: 80%;

  & > button {
    line-height: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: 100%;
  }

  & > input {
    width: 100%;
    border: none;
    transform: translate(35%);
    font-size: 1rem;
  }
`

export const SubtotalTable = styled.td`
  width: 10%;
  text-align: right;
  font-weight: 700;
`

export const PriceTable = styled.td`
font-weight: 500;
`
