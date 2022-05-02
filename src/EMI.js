import React, {Component} from 'react';
import AmountEmi from './AmountEmi';
import InterestEmi from './InterestEmi';
import TenureEmi from './TenureEmi';
import DataEmi1 from './DataEmi1';
import DataEmi2 from './DataEmi2';

class EMI extends React.Component {
    constructor() {
        super();
        this.state = {
            amount: 10000,
            interest: 5,
            tenure:5
        }
    }

    handleClickAmount = (event) => {
        console.log('child 1 cliked....');
        console.log(event.target.value);
        this.setState({
            ...this.state,
            amount: event.target.value,
        })
    }
    handleClickInterest = (event) => {
        console.log('child 2 cliked....');
        console.log(event.target.value);
        this.setState({
            ...this.state,
            interest: event.target.value,
        })
    }
    handleClickTenure = (event) => {
        console.log('child 3 cliked....');
        console.log(event.target.value);
        this.setState({
            ...this.state,
            tenure: event.target.value,
        })
    }

    render() {
        return(
            <>
            <h2>EMI Calculator</h2><br></br>
            <AmountEmi amount={this.state.amount} handleClick={this.handleClickAmount}/>
            <br></br>
            <InterestEmi interest={this.state.interest} handleClick={this.handleClickInterest}/>
            <br></br>
            <TenureEmi tenure={this.state.tenure} handleClick={this.handleClickTenure}/>
            <br></br>
            <div className='row'>
            <DataEmi1 data={this.state}/>
            <DataEmi2 data={this.state}/>
            </div>
            <br></br><br></br>


            </>
        )
    }
}

export default EMI;

// Reference - https://emicalculator.net/
