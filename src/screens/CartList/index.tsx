import { CartItem } from "../../components/CartItem";
import { CartWrapper, TableContainer, FinishOrder, CouponSection, SummarySection, Subtotal, Total, CheckotButton } from "./styles";

export function CartList() {
  return (
    <CartWrapper>
      <h1>Cart</h1>
      <TableContainer>
        <table>
          <thead>
            <tr>
              <th>Plant</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <CartItem />
          </tbody>
        </table>
      </TableContainer>
      <FinishOrder>
        <CouponSection>
          <h2>Have a coupon?</h2>
          <p>Add your code for an instant cart discont</p>
          <input type="text" placeholder="Coupon code" />
        </CouponSection>
        <SummarySection>
          <h2>Cart Summary</h2>
          <Subtotal>
            <p>Subtotal</p>
            <strong>$ 160.00</strong>
          </Subtotal>
          <Total>
            <p>Total</p>
            <strong>$ 160.00</strong>
          </Total>
          <CheckotButton>Checkout</CheckotButton>
        </SummarySection>
      </FinishOrder>
    </CartWrapper>
  )
}
