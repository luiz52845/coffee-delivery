import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const BannerContainer = styled.div`
    display: flex;
    padding:2rem;
    margin: 0;
    justify-content: center;
    
    h1{
        ${mixins.fonts.titleXL}
        color: ${({ theme }) => theme.colors['base-title']}
    }
  
`

export const BannerContent = styled.div`
    max-width: 1160px;
    display: flex;
    padding:0rem;
    margin: 0;
    justify-content: center;
    gap: 2rem;


     img{
        height: 360px;
        max-width: 476px;
        width:32vw;
    }

    span {
    ${mixins.fonts.textL}
    color: ${({ theme }) => theme.colors['base-subtitle']}
  }
`

export const Heading = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

        h1 {
            ${mixins.fonts.titleXL}
            color: ${({ theme }) => theme.colors['base-title']}
        }

  > span {
    ${mixins.fonts.textL}
    color: ${({ theme }) => theme.colors['base-subtitle']}
  }
`

export const Info = styled.div`
    margin-top: 0.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 20px;

    div {
        display: flex;
        align-items: center;
        gap: 12px;

        svg {
            padding: 8px;
            border-radius: 999px;
    }
  }
`