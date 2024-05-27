import styled from "styled-components";

export const CartWrapper = styled.main`
  width: 80%;
  margin: 3rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5rem;

  & > h1 {
    font-size: 3rem;
    font-family: "Playfair Display", serif;
    border-bottom: 3px solid ${(p) => p.theme["green"]};
  }
`;

export const TableContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  & > table {
    text-align: left;
    border-collapse: collapse;
    width: 100%;

    tr {
      border-bottom: 1px solid ${p => p.theme['gray-100']};
    }

    th {
      &:last-of-type {
        text-align: right;
      }
    }

    th, td {
      padding: 1rem 0;
    }
  }
`;

export const FinishOrder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 70%;
`;

export const CouponSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  & > h2 {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    color: ${(p) => p.theme["black"]};
  }

  & > p {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    color: ${(p) => p.theme["gray"]};
    font-size: 0.9rem;
    font-weight: 400;
  }

  & > input {
    width: 100%;
    padding: 0.5rem 1rem;
    border: 1px solid ${(p) => p.theme["gray-100"]};
    border-radius: 6px;
    outline: none;
  }
`;

export const SummarySection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid ${(p) => p.theme["gray-100"]};
  border-radius: 6px;
  width: 50%;

  & > h2 {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    color: ${(p) => p.theme["black"]};
  }
`;

export const Subtotal = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(p) => p.theme["gray-100"]};
  padding-bottom: 1rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 0.9rem;
`;

export const Total = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
`;

export const CheckotButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid transparent;
  background-color: ${(p) => p.theme["green"]};
  color: ${(p) => p.theme["white"]};
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
  }
`;
