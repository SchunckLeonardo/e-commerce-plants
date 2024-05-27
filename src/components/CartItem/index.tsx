import { Minus, Plus } from "@phosphor-icons/react";
import { PlantResume, PriceTable, Quantity, SubtotalTable } from "./styles";

export function CartItem() {
  return (
    <tr>
      <td>
        <PlantResume>
          <img src="/images/plant01.jpg" />
          <div>
            <h4>Plant 001 - 312</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            <button>Remove</button>
          </div>
        </PlantResume>
      </td>
      <td>
        <Quantity>
          <button>
            <Minus size={14} />
          </button>
          <input type="number" value={1} min={1} max={10} readOnly />
          <button>
            <Plus size={14} />
          </button>
        </Quantity>
      </td>
      <PriceTable>$ 80.00</PriceTable>
      <SubtotalTable>$ 80.00</SubtotalTable>
    </tr>
  )
}
