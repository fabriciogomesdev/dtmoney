import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from '../../assets/dt money.svg'
import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionModal } from "../NewTransactionModal";
export function Header(){
    return (
        <div>
            <HeaderContainer>
                <HeaderContent>
                    <img src={logoImg} alt=""/>
                    
                    <Dialog.Root>
                            <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova transação</NewTransactionButton>
                            </Dialog.Trigger>
                            <NewTransactionModal />
                    </Dialog.Root>
                </HeaderContent>
            </HeaderContainer>            
        </div>
    )
}