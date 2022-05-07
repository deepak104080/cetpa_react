import React, {useContext, useEffect, useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import { DataAppContext } from '../DataApp';

const Income = () => {
    const localAppData = useContext(DataAppContext);
    // const tempObj = {id: '', name: '', amount: ''}
    const [incomeList, setIncomeList] = useState([]);
    const [nameincome, setNameincome] = useState('');
    const [amountincome, setAmountincome] = useState(0);
    const updateName = (e) => {
        setNameincome(e.target.value)
    }
    const updateAmount = (e) => {
        setAmountincome(e.target.value)
    }
    const addIncome = () => {
        setIncomeList([...incomeList, {id: 'income', name: nameincome, amount: amountincome}]);
        localAppData.addBalance(amountincome);
        setNameincome('');
        setAmountincome(0);
    }
    useEffect(() => {
        console.log(incomeList);
    })
    return(
        <>
        <Row>
            <Col sm={12} className="bg-warning">
                <h4>Add Income</h4>
            </Col>
        </Row>
        <Row>
            <Col sm={12} className="bg-warning">
                <input type="text" value={nameincome} onChange={updateName}/>
                <input type="number" value={amountincome} onChange={updateAmount}/>
                <button onClick={addIncome}>Add Income</button>
            </Col>
        </Row>
        <Row>
            <Col sm={12} className="bg-secondary bg-opacity-25">
                <h4>List of income</h4>
                {incomeList && incomeList.map((item) => (
                    <div>{item.name } - {item.amount}</div>
                ))}
            </Col>
        </Row>
        </>
    )
}

export default Income;