import { CardContainer, Control, Description, Order, Price, ProductImg, Tag, Title } from "./styles";
import coffeeImg from '../../assets/coffe.png'
import { ShoppingCart } from "phosphor-react";
import { useTheme } from "styled-components";
import { QuantityInput } from "../QuantityInput";
import { CheckFat } from "@phosphor-icons/react";
import { useCart } from "../../hook/useCart";
import { useEffect, useState } from "react";

type Props = {
    coffee: {
        id: string
        title: string
        description: string
        tags: string[]
        price: number
        image: string
    }
}

export function Card({ coffee }: Props) {
    const [quantity, setQuantity] = useState(1)
    const [isItemAdded, setIsItemAdded] = useState(false)
    const theme = useTheme()
    const { addItem } = useCart()

    function incrementQuantity() {
        setQuantity((state) => state + 1)
    }
    function decrementQuantity() {
        setQuantity((state) => state - 1)
    }

    function handleAddItem() {
        addItem({ id: coffee.id, quantity })
        setIsItemAdded(true)
        setQuantity(1)
    }

    useEffect(() => {
        let timeout: number

        if (isItemAdded) {
            timeout = setTimeout(() => {
                setIsItemAdded(false)
            }, 1000)
        }

        return () => {
            if (timeout) {
                clearTimeout(timeout)
            }
        }
    }, [isItemAdded])

    return (
        <div>
            <CardContainer>
                <ProductImg>

                    <img src={coffee.image} alt="" />
                </ProductImg>

                <Tag>
                    {coffee.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </Tag>

                <Title>
                    <h3>{coffee.title}</h3>
                </Title>

                <Description>
                    <span>{coffee.description}</span>
                </Description>

                <div>

                    <Control>
                        <Price>
                            <span>R$</span>
                            <span>{coffee.price}</span>
                        </Price>

                        <Order $itemAdded={isItemAdded}>
                            <QuantityInput
                                quantity={quantity}
                                incrementQuantity={incrementQuantity}
                                decrementQuantity={decrementQuantity}
                            />

                            <button disabled={isItemAdded} onClick={handleAddItem}>
                                {isItemAdded ? (
                                    <CheckFat
                                        weight="fill"
                                        size={22}
                                        color={theme.colors['base-card']}
                                    />
                                ) : (
                                    <ShoppingCart size={22} color={theme.colors['base-card']} />
                                )}
                            </button>
                        </Order>
                    </Control>

                </div>



            </CardContainer>
        </div>
    )
}