import styled from "styled-components";
import Button from "./Button";

export default function Header(){
    return(
        <Head>
            <ImgLogo src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1665060568/muden/muden-logo-principal-branco_tfl6st.png" width={170} height={41}></ImgLogo>
            <LinkHead className="header">
                <div className="link">Central</div>
                <div className="link">Aplicativo</div>
                <div className="link">Contatos</div>
                <div className="link">Carreiras</div>
                <div className="link">Blog</div>
                <div><Button>Eu quero</Button></div>
            </LinkHead>
            <div className="icon"><ion-icon name="menu-outline"></ion-icon></div>
        </Head>
    ) 
    
}

const LinkHead = styled.div`
    display: flex;
    font-weight: 300;
    font-size: 15px;
    gap: 40px;

`

const Head = styled.header`
    width: 100%;
    height: 80px;
    box-shadow: 0 0 3px 0 silver;
    display: flex;
    align-items: center;
    
    justify-content: center;
    position: relative;

    .icon{
        display: none;
    }

    .link{
        display: flex;
        align-items: center;
        cursor: pointer;
        
        :hover{
            cursor: pointer;
            transition: 0.5s;
            color: #38bc94;
        }
    }

    @media (max-width: 975px) {
        
        justify-content: space-between;
        padding: 0px 10px;
        .header{
            display: none;
        }
        
        .icon{
            z-index: 1;
            right: 10px;
            top: 25px;
            position: fixed;
            display: flex;
            font-size: 30px;
            color: #38bc94;
        }
    }

`
const ImgLogo = styled.img`
    margin-right: 200px;
`
