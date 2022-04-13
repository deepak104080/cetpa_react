import React from 'react';

class Home extends React.Component {
    constructor() {
        super();
        console.log('constructor of class...');
        this.state = {
            count:0,
            addr: '',
            city: '',
            email: ''
        }
    }
    increment_fn = () => {
        console.log('increment clicked...');
        // this.state = {
        //     count:this.state.count + 1
        // }
        // this.forceUpdate
        this.setState(
            {
                ...this.state, count:this.state.count + 1, addr:'Count_ADDR'

                // count:this.state.count +1,
                // addr: 'sdfsaef',
                // city: this.state.city,
                // email: this.state.email

            }
        )

        // this.forceUpdate - focefully recalculate dom
        //this.setState - update state and recalculate dom - async operation
        //component api - compoent features/function

        console.log(this.state.count);
        // old state values
        // calling github api with page
    }

    decrement_fn = () => {
        console.log('decrement clicked...');
        // this.state = {
        //     count:this.state.count - 1
        // }
        // this.forceUpdate
        this.setState(
            {
                count:this.state.count - 1
            }
        )
        console.log(this.state.count);
        // old state values
    }

    update_addr_fn = () => {
        this.setState(
            {
                ...this.state, addr:'GGN'
            }
        )
    }

    render() {
        return(
            <div>
                <div>Altudo - Class Component</div>
                <div>Count = {this.state.count}</div>
                <div>Addr = {this.state.addr}</div>
                <div>City = {this.state.city}</div>
                <div>Email = {this.state.email}</div>

                <button onClick={this.increment_fn}>Increase</button>
                <button onClick={this.decrement_fn}>Decrease</button>
                <button onClick={this.update_addr_fn}>Update address</button>
            </div>
            
        )
    }
}

export default Home;




// Practice - To Do List



// Current Task - 
// counter
// count
// two buttons - increase decrease


// online exam
// parent component - // list of questions
// single question - student will update the answer
// grid of question - mark answers
// timer also
// next previous



// temp Storage - State
// storgage of single answer
// timer - 


// transfer data - Props
// parent to single qs
// single qs - grid os qs
// next previous clicked - single qs


