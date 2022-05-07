import React, { useContext } from 'react';
import {Row, Col} from 'react-bootstrap';
import Income from './Income';
import Expense from './Expense';

import { DataAppContext } from '../DataApp';

const ExpenseTracker = () => {
    const localAppData = useContext(DataAppContext);
    return(
        <>
        <Row className='bg-info'>
            <Col sm={6}>
                <h2>Expense Tracker</h2>
            </Col>
            <Col sm={6}>
                <h2>Balance - {localAppData.appstate.balanceAmount}</h2>
            </Col>
        </Row>
        <Row>
            <Col sm={6} className='px-4'>
                <Income />
            </Col>
            <Col sm={6} className='px-4'>
                <Expense />
            </Col>
        </Row>
        </>
    )
}

export default ExpenseTracker;