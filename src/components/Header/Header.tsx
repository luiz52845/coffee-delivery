import { MapPinLine } from "phosphor-react";
import { CheckOutContainer, HeaderContainer, HeaderContent, LocationContent, ShoppingCartEdit, } from "./styles";
import Logo from "../../assets/Logo.png"
import { Link } from "react-router-dom";
import { useCart } from "../../hook/useCart";

export function Header() {

    const { cart } = useCart()
    return (
        <HeaderContainer>
            <HeaderContent>
                <Link to={"/"}>
                    <div>
                        <img src={Logo} alt="" />
                    </div>
                </Link>


                <CheckOutContainer>
                    <LocationContent>
                        <MapPinLine></MapPinLine> <span>Pomerode, SC</span>

                    </LocationContent>
                    <Link to={"/cart"} aria-disabled={cart.length === 0}>
                        {cart.length > 0 ? <span>{cart.length}</span> : null}<ShoppingCartEdit size={22} weight="fill" ></ShoppingCartEdit>
                    </Link>


                </CheckOutContainer>

            </HeaderContent>
        </HeaderContainer>
    )
}