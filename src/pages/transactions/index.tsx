import { useEffect } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Sumary";
import { SearchForm } from "./components/SearchForms/inex";
import { PriceHightLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transaction(){
   useEffect(() => {
    fetch('http://localhost:3000/transactions')
    .then(response => {
        console.log(response)
       })
   }, [])
    return (
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
                <SearchForm />
            <TransactionsTable>
                <tbody>
                    <tr>
                        <td width="50%">Desenvolvimento de site</td>
                        <td>
                            <PriceHightLight variant="income">
                            R$ 12.00,00
                            </PriceHightLight>
                        </td>
                        <td>Venda</td>
                        <td>13/04/2022</td>
                    </tr>
                    <tr>
                        <td width="50%">Hamburger</td>
                        <td>
                            <PriceHightLight variant="outcome"> 
                            - R$ 59,00
                            </PriceHightLight>
                            </td>
                        <td>Alimentação</td>
                        <td>10/04/2022</td>
                    </tr>
                   
                </tbody>
            </TransactionsTable>
            
            </TransactionsContainer>
        </div>
    )
}