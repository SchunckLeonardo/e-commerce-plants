import { ShoppingCart } from "@phosphor-icons/react"
import { PlantCard, PlantFigure, PlantDesc, AddToCartButton, PlantTags, Tag, Prices } from "./styles"
import { IPlant } from "../../utils/PlantsList"
import { FormatNumber } from "../../utils/formatNumber"

interface PlantProps {
  plant: IPlant
}

export function Plant({ plant }: PlantProps) {
  return (
    <PlantCard>
      <PlantFigure>
        <img src={plant.image} />
        <AddToCartButton className="cart">
          <ShoppingCart />
          Add to cart
        </AddToCartButton>
      </PlantFigure>
      <PlantDesc>
        <p>{plant.desc}</p>
        <Prices>
          {plant.sale.isSaled && <p>{FormatNumber(plant.price)}</p>}
          <strong>{plant.sale.isSaled ? FormatNumber(plant.price * plant.sale.value) : FormatNumber(plant.price)}</strong>
        </Prices>
      </PlantDesc>
      <PlantTags>
        {plant.hot && <Tag variant="hot">HOT</Tag>}
        {plant.sale.isSaled && <Tag variant="sale">SALE</Tag>}
      </PlantTags>
    </PlantCard>
  )
}
