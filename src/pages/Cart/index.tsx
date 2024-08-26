import { CreditCard, CurrencyDollar, MapPin, Trash } from "phosphor-react";
import { Container, InfoContainer, AddressContainer, AddressForm, AdressHeading, PaymentContainer, PaymentHeading, PaymentOption, OrderContainer, Coffee, CoffeeInfo, TotalInfo, CheckOutButton, } from "./styles";
import { TextInput } from "../../components/Form/TextInput/index";
import { Radio } from "../../components/Form/Radio";
import { Fragment } from "react/jsx-runtime";
import coffeeInmg from "../../assets/coffe.png";
import { QuantityInput } from "../../components/QuantityInput";
import { Link } from "react-router-dom";
import { useCart } from "../../hook/useCart";
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { coffees } from '../../../data.json'
import { SubmitHandler, useForm } from "react-hook-form";
import { Item } from "../../reducers/cart/reducer";




type FormInputs = {
    cep: number
    street: string
    number: string
    fullAddress: string
    neighborhood: string
    city: string
    state: string
    paymentMethod: 'credit' | 'debit' | 'cash'
}


const newOrder = z.object({
    cep: z.number({ invalid_type_error: 'Informe o CEP' }),
    street: z.string().min(1, 'Informe a rua'),
    number: z.string().min(1, 'Informe o número'),
    fullAddress: z.string(),
    neighborhood: z.string().min(1, 'Informe o bairro'),
    city: z.string().min(1, 'Informe a cidade'),
    state: z.string().min(1, 'Informe a UF'),
    paymentMethod: z.enum(['credit', 'debit', 'cash'], {
        invalid_type_error: 'Informe um método de pagamento',
    }),
})

export type OrderInfo = z.infer<typeof newOrder>

const shippingPrice = 3.5


export function Cart() {
    const {
        cart,
        checkout,
        incrementItemQuantity,
        decrementItemQuantity,
        removeItem
    } = useCart()

    const coffeesInCart = cart.map((item) => {
        const coffeeInfo = coffees.find((coffee) => coffee.id === item.id)

        if (!coffeeInfo) {
            throw new Error('Invalid coffee.')
        }

        return {
            ...coffeeInfo,
            quantity: item.quantity,
        }
    })

    const totalItemsPrice = coffeesInCart.reduce((previousValue, currentItem) => {
        return (previousValue += currentItem.price * currentItem.quantity)
    }, 0)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormInputs>({
        resolver: zodResolver(newOrder),
    })

    const selectedPaymentMethod = watch('paymentMethod')

    function handleItemIncrement(itemId: string) {
        incrementItemQuantity(itemId)
    }

    function handleItemDecrement(itemId: string) {
        decrementItemQuantity(itemId)
    }

    function handleItemRemove(itemId: string) {
        removeItem(itemId)
    }

    const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
        if (cart.length === 0) {
            return alert('É preciso ter pelo menos um item no carrinho')
        }

        checkout(data)
    }

    return (
        <>
            <Container>

                <InfoContainer>
                    <h2>Complete seu pedido</h2>

                    <form id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
                        <AddressContainer>

                            <AdressHeading>
                                <MapPin size={22} />

                                <div>
                                    <span>Endereço de entrega</span>
                                    <p>informe o endereço onde deseja receber seu pedido</p>
                                </div>
                            </AdressHeading>

                            <AddressForm>
                                <TextInput
                                    placeholder="CEP"
                                    type="number"
                                    containerProps={{ style: { gridArea: 'cep' } }}
                                    error={errors.cep}
                                    {...register('cep', { valueAsNumber: true })}
                                />

                                <TextInput
                                    placeholder="Rua"
                                    containerProps={{ style: { gridArea: 'street' } }}
                                    error={errors.street}
                                    {...register('street')}
                                />

                                <TextInput
                                    placeholder="Número"
                                    containerProps={{ style: { gridArea: 'number' } }}
                                    error={errors.number}
                                    {...register('number')}
                                />

                                <TextInput
                                    placeholder="Complemento"
                                    optional
                                    containerProps={{ style: { gridArea: 'fullAddress' } }}
                                    error={errors.fullAddress}
                                    {...register('fullAddress')}
                                />

                                <TextInput
                                    placeholder="Bairro"
                                    containerProps={{ style: { gridArea: 'neighborhood' } }}
                                    error={errors.neighborhood}
                                    {...register('neighborhood')}
                                />

                                <TextInput
                                    placeholder="Cidade"
                                    containerProps={{ style: { gridArea: 'city' } }}
                                    error={errors.city}
                                    {...register('city')}
                                />

                                <TextInput
                                    placeholder="UF"
                                    maxLength={2}
                                    containerProps={{ style: { gridArea: 'state' } }}
                                    error={errors.state}
                                    {...register('state')}
                                />
                            </AddressForm>





                        </AddressContainer>



                        <PaymentContainer>
                            <PaymentHeading>
                                <CurrencyDollar size={22} />

                                <div>
                                    <span>Pagamento</span>
                                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                                </div>

                            </PaymentHeading>
                            <PaymentOption>
                                <div>
                                    <Radio isSelected={selectedPaymentMethod === 'credit'}
                                        {...register('paymentMethod')}
                                        value="credit">
                                        <CreditCard size={16} />
                                        <span>Cartão de crédito</span>


                                    </Radio>

                                    <Radio isSelected={selectedPaymentMethod === 'debit'}
                                        {...register('paymentMethod')}
                                        value="debit">
                                        <CreditCard size={16} />
                                        <span>Cartao de debito</span>


                                    </Radio>

                                    <Radio isSelected={selectedPaymentMethod === 'cash'}
                                        {...register('paymentMethod')}
                                        value="cash">
                                        <CreditCard size={16} />
                                        <span>Dinheiro</span>


                                    </Radio>




                                </div>

                            </PaymentOption>

                        </PaymentContainer>

                    </form>




                </InfoContainer>


                <InfoContainer>
                    <h2>Cafés selecionados</h2>

                    <OrderContainer>
                        {coffeesInCart.map((coffee) => (
                            <Fragment key={coffee.id}>
                                <Coffee>
                                    <div>
                                        <img src={coffeeInmg} alt="" />

                                        <div>
                                            <span>{coffee.title}</span>

                                            <CoffeeInfo>
                                                <QuantityInput
                                                    quantity={1}
                                                    incrementQuantity={() => handleItemIncrement(coffee.id)}
                                                    decrementQuantity={() => handleItemDecrement(coffee.id)}
                                                />
                                                <button onClick={() => handleItemRemove(coffee.id)}>
                                                    <Trash />
                                                    <span>Remover</span>
                                                </button>

                                            </CoffeeInfo>
                                        </div>
                                    </div>
                                    <strong>R$ {coffee.price?.toFixed(2)}</strong>

                                </Coffee>
                                <span></span>
                            </Fragment>
                        ))}
                        <TotalInfo>
                            <div>
                                <p>Total de items</p>
                                <p>Entrega</p>
                                <h2>Total</h2>
                            </div>
                            <div>
                                <p>{new Intl.NumberFormat('pt-br', {
                                    currency: 'BRL',
                                    style: 'currency',
                                }).format(totalItemsPrice)}</p>
                                <p>{new Intl.NumberFormat('pt-br', {
                                    currency: 'BRL',
                                    style: 'currency',
                                }).format(shippingPrice)}</p>
                                <strong>{new Intl.NumberFormat('pt-br', {
                                    currency: 'BRL',
                                    style: 'currency',
                                }).format(totalItemsPrice + shippingPrice)}</strong>
                            </div>

                        </TotalInfo>


                        <CheckOutButton type="submit" form="order" ><span>confirmar pedido</span></CheckOutButton>



                    </OrderContainer>



                </InfoContainer>









            </Container>





        </>

    )
}