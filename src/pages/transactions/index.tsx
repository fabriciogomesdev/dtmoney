import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Sumary";
import { SearchForm } from "./components/SearchForms/inex";
import { PriceHightLight, TransactionsContainer, TransactionsTable } from "./styles";

interface Transaction {
    id: number;
    description: string;
    type: "income"| "outcome";
    price: number;
    category: string;
    createdAt: string;
}

export function Transaction(){

    const [transactions, setTransactions] = useState<Transaction[]>([]);

   async function loadTransactions(){
    const response = await fetch('http://localhost:3000/transactions')
    const data = await response.json();
    setTransactions(data);
   }
   
    useEffect(() => {
        loadTransactions();
   }, [])
    return (
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
                <SearchForm />
            <TransactionsTable>
                <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                            <td width="50%">{transaction.description}</td>
                            <td>
                                <PriceHightLight variant={transaction.type}>
                                {transaction.price}
                                </PriceHightLight>
                            </td>
                            <td>{transaction.category}</td>
                            <td>{transaction.createdAt}</td>
                        </tr>
                        )
                    })}
                    
                    
                   
                </tbody>
            </TransactionsTable>
            
            </TransactionsContainer>
        </div>
    )
}