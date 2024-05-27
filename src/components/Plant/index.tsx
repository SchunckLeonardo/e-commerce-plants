import { ShoppingCart } from "@phosphor-icons/react"
import { PlantCard, PlantFigure, PlantDesc, AddToCartButton, PlantTags, Tag, Prices } from "./styles"

interface PlantProps {
  sale?: number
  hot?: boolean
}

export function Plant({hot, sale}: PlantProps) {
  return (
    <PlantCard>
      <PlantFigure>
        <img src="/images/plant01.jpg" />
        <AddToCartButton className="cart">
          <ShoppingCart />
          Add to cart
        </AddToCartButton>
      </PlantFigure>
      <PlantDesc>
        <p>Sit voluptatem</p>
        <Prices>
          {sale && <p>{sale}.00 $</p>}
          <strong>68.00 $</strong>
        </Prices>
      </PlantDesc>
      <PlantTags>
        {hot && <Tag variant="hot">HOT</Tag>}
        {sale && <Tag variant="sale">SALE</Tag>}
      </PlantTags>
    </PlantCard>
  )
}
