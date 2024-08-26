import { Banner } from "../../components/Banner";
import { ProductList } from "../../components/ProductsList";
import { HomeCointaner } from "./styles";

export function Home() {
    return (
        <HomeCointaner>
            <Banner></Banner>
            <ProductList>
                
            </ProductList>
        </HomeCointaner>
    )
}