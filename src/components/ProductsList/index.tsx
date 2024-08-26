import coffe from '../../assets/coffe.png'
import { Card } from '../ProductCard'
import { ProductContainer } from './styles'
import { coffees } from '../../../data.json'


export function ProductList() {
    return (

        <div>
            <ProductContainer>
                <h2>Nossos cafés</h2>

                <div>
                    {coffees.map((coffee) => (
                        <Card key={coffee.id} coffee={coffee} />
                    ))}
                </div>



            </ProductContainer>



        </div>
    )
}