import React, {useContext} from 'react';
import {Row, Col} from 'react-bootstrap';
import { DataAppContext } from '../DataApp';

const Expense = () => {
    const localAppData = useContext(DataAppContext);
    return(
        <>
        <Row>
            <Col sm={12}>
                <h4>Add Expense</h4>
            </Col>
        </Row>
        <Row>
            <Col sm={12}>
                <input type="number" onChange={localAppData.subBalance}/>
            </Col>
        </Row>
        </>
    )
}

export default Expense;