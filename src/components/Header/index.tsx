import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from '../../assets/dt money.svg'
export function Header(){
    return (
        <div>
            <HeaderContainer>
                <HeaderContent>
                    <img src={logoImg} alt=""/>
                    <NewTransactionButton>Nova transação</NewTransactionButton>
                </HeaderContent>
            </HeaderContainer>            
        </div>
    )
}