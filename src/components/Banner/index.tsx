import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import banner from '../../assets/banner.png'
import { BannerContainer, BannerContent, Heading, Info } from './styles'
import { useTheme } from 'styled-components'

export function Banner() {
    const theme = useTheme()
    return (
        <div>
            <BannerContainer>
                <BannerContent>

                    <div>
                        <Heading>
                            <div>
                                <h1>Encontre o café perfeito para qualquer hora do dia</h1>

                                <span>com o coffee delivery você recebe seu cafe onde estiver a qualquer hora</span>
                            </div>
                        </Heading>


                        <Info>
                            <div>
                                <ShoppingCart
                                    size={32}
                                    weight="fill"
                                    color={theme.colors.background}
                                    style={{ backgroundColor: theme.colors['yellow-dark'] }}
                                />
                                <span>Compra simples e segura</span>

                            </div>

                            <div>
                                <Package
                                    size={32}
                                    weight="fill"
                                    color={theme.colors.background}
                                    style={{ backgroundColor: theme.colors['base-text'] }}
                                />
                                <span>Embalagem mantém o café intacto</span>
                            </div>

                            <div>
                                <Timer
                                    size={32}
                                    weight="fill"
                                    color={theme.colors.background}
                                    style={{ backgroundColor: theme.colors.yellow }}
                                />
                                <span>Entrega rápida e rastreada</span>
                            </div>

                            <div>
                                <Coffee
                                    size={32}
                                    weight="fill"
                                    color={theme.colors.background}
                                    style={{ backgroundColor: theme.colors.purple }}
                                />
                                <span>O café chega fresquinho até você</span>
                            </div>

                        </Info>
                    </div>



                    <div>
                        <img src={banner} alt="" />
                    </div>
                </BannerContent>
            </BannerContainer>
           

        </div>
    )
}