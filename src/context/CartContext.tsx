import { createContext, ReactNode, useState } from "react";
import { IPlant } from "../utils/PlantsList";
import { produce } from "immer";

export interface Cart {
  plant: IPlant,
  qnt: number
}

interface CartContextType {
  addItemToCart: (plant: IPlant) => void
  cart: Cart[]
  removeItemToCart: (cartRemove: Cart) => void
  incrementQnt: (cartIncrement: Cart) => void
  decrementQnt: (cartDecrement: Cart) => void
  getTotalPrice: () => number
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Cart[]>([])

  function removeItemToCart(cartRemove: Cart) {
    const allPlantWithoutExpected = cart.filter(item => item !== cartRemove)
    setCart(allPlantWithoutExpected)
  }

  function incrementQnt(cartIncrement: Cart) {
    const addQntPlant = produce(cart, (draft) => {
      const indexItem = draft.find((item => item.plant.id === cartIncrement.plant.id))
      if (indexItem) {
        indexItem.qnt += 1
      }
    })
    setCart(addQntPlant)
  }

  function decrementQnt(cartDecrement: Cart) {
    const addQntPlant = produce(cart, (draft) => {
      const indexItem = draft.find((item => item.plant.id === cartDecrement.plant.id))
      if (indexItem) {
        if (indexItem.qnt > 1) {
          indexItem.qnt -= 1
        }
      }
    })
    setCart(addQntPlant)
  }

  function addItemToCart(plant: IPlant) {
    const plantAlreadyExists = cart.find(item => item.plant === plant)

    if (plantAlreadyExists) {
      const addQntPlant = produce(cart, (draft) => {
        const indexItem = draft.find((item => item.plant.id === plantAlreadyExists.plant.id))
        if (indexItem) {
          indexItem.qnt += 1
        }
      })
      setCart(addQntPlant)
      return
    }

    const newItem = produce(cart, (draft) => {
      const newPlant: Cart = {
        plant,
        qnt: 1
      }
      draft.push(newPlant)
    })

    setCart(newItem)

  }

  function getTotalPrice() {
    return cart.reduce((prev, current) => {
      return prev += current.plant.sale.isSaled ? (current.plant.price * current.plant.sale.value) * current.qnt : current.plant.price * current.qnt
    }, 0)
  }

  return <CartContext.Provider value={{ addItemToCart, cart, removeItemToCart, incrementQnt, decrementQnt, getTotalPrice }}>{children}</CartContext.Provider>
}
