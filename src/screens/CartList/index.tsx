import { CartItem } from "../../components/CartItem";
import { useCart } from "../../hooks/useCart";
import { FormatNumber } from "../../utils/formatNumber";
import { CartWrapper, TableContainer, FinishOrder, CouponSection, SummarySection, Subtotal, Total, CheckotButton } from "./styles";

export function CartList() {
  const { cart, getTotalPrice } = useCart()

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
            {cart.length > 0 ? cart.map(cartItem => <CartItem cart={cartItem} key={cartItem.plant.id} />) : <tr><td style={{ textAlign: "center" }} colSpan={4}>Nenhum item foi adicionado</td></tr>}
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
            <strong>{FormatNumber(getTotalPrice())}</strong>
          </Subtotal>
          <Total>
            <p>Total</p>
            <strong>{FormatNumber(getTotalPrice())}</strong>
          </Total>
          <CheckotButton>Checkout</CheckotButton>
        </SummarySection>
      </FinishOrder>
    </CartWrapper>
  )
}
