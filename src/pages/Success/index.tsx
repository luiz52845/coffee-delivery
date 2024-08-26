import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { Info, InfoContent, Order, SuccessContainer, SuccessHeading } from "./styles";
import illustration from '../../assets/Illustration.png'
import { useTheme } from "styled-components";
import { useCart } from "../../hook/useCart";
import { useParams } from "react-router-dom";

export function Success() {


    const { orders } = useCart()
    const { orderId } = useParams()
    const orderInfo = orders.find((order) => order.id === Number(orderId))
    const paymentMethod = {
        credit: 'Cartão de crédito',
        debit: 'Cartão de débito',
        cash: 'Dinheiro',
    }
    const theme = useTheme()

    if (!orderInfo?.id) {
        return null
    }

    return (
        <SuccessContainer>
            <Order>
                <SuccessHeading>
                    <h2>uhu! Pedido confirmado</h2>
                    <span>agora 'e so aguardar que logo o cafe chegera ate voce</span>

                </SuccessHeading>

                <Info>
                    <InfoContent>
                        <div>
                            <MapPin
                                color={theme.colors.white}
                                style={{ backgroundColor: theme.colors.purple }}
                                size={32}
                            />

                            <div>
                                <span>
                                    Entrega em{' '}
                                    <strong>
                                        {orderInfo.street}, {orderInfo.number}
                                    </strong>
                                </span>

                                <span>
                                    {orderInfo.neighborhood} - {orderInfo.city},{orderInfo.state}
                                </span>
                            </div>
                        </div>

                        <div>
                            <Timer
                                color={theme.colors.white}
                                style={{ backgroundColor: theme.colors.yellow }}
                                size={32}
                            />

                            <div>
                                <span>Previsão de entrega</span>

                                <strong>20 min - 30 min</strong>
                            </div>
                        </div>

                        <div>
                            <CurrencyDollar
                                color={theme.colors.white}
                                style={{ backgroundColor: theme.colors['yellow-dark'] }}
                                size={32}
                            />

                            <div>
                                <span>Pagamento na entrega</span>

                                <strong>{paymentMethod[orderInfo.paymentMethod]}</strong>
                            </div>
                        </div>
                    </InfoContent>

                </Info>

            </Order>
            <img src={illustration} alt="" />
        </SuccessContainer >
    )
}