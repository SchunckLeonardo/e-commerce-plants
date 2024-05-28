import { Minus, Plus } from "@phosphor-icons/react";
import { PlantResume, PriceTable, Quantity, SubtotalTable } from "./styles";
import { Cart } from "../../context/CartContext";
import { FormatNumber } from "../../utils/formatNumber";
import { useCart } from "../../hooks/useCart";

interface CartItemProps {
  cart: Cart
}

export function CartItem({ cart }: CartItemProps) {
  const { removeItemToCart, decrementQnt, incrementQnt } = useCart()

  function handleRemovePlant() {
    removeItemToCart(cart)
  }

  return (
    <tr>
      <td>
        <PlantResume>
          <img src={cart.plant.image} />
          <div>
            <h4>{cart.plant.desc}</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            <button onClick={() => handleRemovePlant()}>Remove</button>
          </div>
        </PlantResume>
      </td>
      <td>
        <Quantity>
          <button onClick={() => decrementQnt(cart)}>
            <Minus size={14} />
          </button>
          <input type="number" value={cart.qnt} readOnly />
          <button onClick={() => incrementQnt(cart)}>
            <Plus size={14} />
          </button>
        </Quantity>
      </td>
      <PriceTable>{cart.plant.sale.isSaled ? FormatNumber(cart.plant.price * cart.plant.sale.value) : FormatNumber(cart.plant.price)}</PriceTable>
      <SubtotalTable>{cart.plant.sale.isSaled ? FormatNumber((cart.plant.price * cart.plant.sale.value) * cart.qnt) : FormatNumber(cart.plant.price * cart.qnt)}</SubtotalTable>
    </tr>
  )
}
