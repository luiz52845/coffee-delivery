import { ShoppingCart } from "phosphor-react";
import styled from "styled-components";
import { mixins } from "../../styles/mixins";



export const HeaderContainer = styled.header`
    display:flex;
    flex: 1;
   
    padding: 0;
    margin: 0;
    justify-content: center;

`

export const HeaderContent = styled.div`
    max-width: 1160px;
    display: flex;
    padding-top: 3rem;
    padding-bottom: 1rem;
    display:flex;
    flex: 1;
   
    justify-content: space-between;
    
`
export const CheckOutContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;

    a {
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.colors['yellow-light']};
    color: ${({ theme }) => theme.colors['yellow-dark']};

    border-radius: 6px;

    position: relative;

    &[aria-disabled='true'] {
      pointer-events: none;
    }

    span {
      ${mixins.fonts.textS};
      font-weight: bold;
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors['yellow-dark']};
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 0px;
      right: 0px;
      transform: translate(50%, -50%);
    }
  }
    
`


export const LocationContent = styled.div`
    border-radius: 5px;
    color: ${(props) => props.theme.colors['purple-dark']};
    padding: 0.5rem;
    background-color: ${(props) => props.theme.colors['purple-light']};
    height: 2rem;

   
    
`

export const ShoppingCartEdit = styled(ShoppingCart)`
    display: flex;
    color:  ${(props) => props.theme.colors['yellow-dark']};
    background-color: ${(props) => props.theme.colors['yellow-light']};
    font-size: rem;
    margin: 0;
    border-radius: 5px ;
    padding: 5px;
    width: 2rem;
    height: 2rem;
    
      
    


`
