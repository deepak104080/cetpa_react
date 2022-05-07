import React, {useContext, useState, useEffect} from 'react';
import {Row, Col} from 'react-bootstrap';
import { DataAppContext } from '../DataApp';

const Expense = () => {
    const localAppData = useContext(DataAppContext);
    const [expenseList, setExpenseList] = useState([]);
    const [nameexpense, setNameexpense] = useState('');
    const [amountexpense, setAmountexpense] = useState(0);
    const updateName = (e) => {
        setNameexpense(e.target.value)
    }
    const updateAmount = (e) => {
        setAmountexpense(e.target.value)
    }
    const subIncome = () => {
        setExpenseList([...expenseList, {id: 'expense', name: nameexpense, amount: amountexpense}]);
        localAppData.subBalance(amountexpense);
        setNameexpense('');
        setAmountexpense(0);
    }
    useEffect(() => {
        console.log(expenseList);
    })
    return(
        <>
        <Row>
            <Col sm={12}  className="bg-warning">
                <h4>Add Expense</h4>
            </Col>
        </Row>
        <Row>
            <Col sm={12}  className="bg-warning">
                {/* <input type="number" onChange={localAppData.subBalance}/> */}
                <input type="text" value={nameexpense} onChange={updateName}/>
                <input type="number" value={amountexpense} onChange={updateAmount}/>
                <button onClick={subIncome}>Add Expense</button>
            </Col>
        </Row>
        <Row>
            <Col sm={12} className="bg-secondary bg-opacity-25">
                <h4>List of expense</h4>
                {expenseList && expenseList.map((item) => (
                    <div>{item.name } - {item.amount}</div>
                ))}
            </Col>
        </Row>
        </>
    )
}

export default Expense;