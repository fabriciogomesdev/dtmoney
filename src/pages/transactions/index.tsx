import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Sumary";
import { SearchForm } from "./components/SearchForms/inex";
import { PriceHightLight, TransactionsContainer, TransactionsTable } from "./styles";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";



export function Transaction(){
    const {transactions} = useContext(TransactionContext)
    
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
                                {transaction.type == 'outcome' && '- '}
                                {priceFormatter.format(transaction.price)}
                                </PriceHightLight>
                            </td>
                            <td>{transaction.category}</td>
                            <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                        </tr>
                        )
                    })}
                    
                    
                   
                </tbody>
            </TransactionsTable>
            
            </TransactionsContainer>
        </div>
    )
}