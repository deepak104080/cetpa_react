import React from 'react';
import ChildComp2 from './ChildComp';
import {Button} from 'react-bootstrap';

class Home extends React.Component {
    constructor() {
        super();
        console.log('constructor of class...');
        this.state = {
            count:0,
            addr: '',
            city: '',
            email: '',
            loginStatus: false,
            input_val: ''
        }
    }
    //this - referring to self object
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
        console.log('after setstate - ', this.state.count);
        // old state values
    }

    update_addr_fn = () => {
        this.setState(
            {
                ...this.state, addr:'GGN'
            }
        )
    }

    login_user = () => {
        this.setState(
            {
                ...this.state, loginStatus:!this.state.loginStatus
            }
        )
    }

    update_custom_count= (num) => {
        console.log('num-----------------', num);
        this.setState(
            {
                ...this.state, count:this.state.count + num
            }
        )
    }

    display_input_value = (event) => {
        console.log(event.target.value);
        this.setState(
            {
                ...this.state, input_val: event.target.value
            }
        )
    }


    componentDidMount() {
        console.log('componentDidMount running...');
        // call api to check login
        // update loggin varibale in state
    }

    componentDidUpdate() {
        console.log('componentDidUpdate running...');
        console.log('updated state - ', this.state.count);
    }

    render() {
        console.log('render running...');
        let city_name="GGN";
        const temp1 = 'temp1'
        return(
            <div>
                <div>Altudo - Class Component</div>
                <div>Count = {this.state.count}</div>
                <div>Addr = {this.state.addr}</div>
                <div>City = {this.state.city}</div>
                <div>Email = {this.state.email}</div>

                <Button variant="secondary" onClick={this.increment_fn}>Increase</Button>
                <button onClick={this.decrement_fn}>Decrease</button>
                <button onClick={this.update_addr_fn}>Update address</button>
                <br></br><br></br>
                <button onClick={() => this.update_custom_count(5)}>Update Count by 5</button>
                <br></br><br></br>
                <input type="text" value={this.state.input_val} onChange={this.display_input_value.bind(this)}/>
                <br></br><br></br>

                <ChildComp2 city={city_name} country="India" state={this.state.addr} temp1={temp1}/>


                {!this.state.loginStatus && <button onClick={this.login_user}>Login</button>}
                {this.state.loginStatus && <button onClick={this.login_user}>Logout</button>}

                <br></br>
                {(this.state.loginStatus && true && true && true) ? <button onClick={this.login_user}>Logout If Else</button> : <button onClick={this.login_user}>Login If Else</button>}
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




// stages - 
// mounting - first time component loading
// re-rendering - updation
// unmounting - leaving that component (delete all varialbles, varible, counter, async method  )



// lifecycle methods
// Mounting Phase : -
// constructor() - first lifecycle
// *render() - compulsory
// componentDidMount() - run just after component mounting - just one time


// Re-rendering
// re-render() - virtual dom
// componentDidUpdate() - run after updations - after every re-render


// Unmounting
// componentWillUnmount() - delete/cleaning




// setState() - update state variable and start re-render
// forceUpdate() - frcecfully re-render


// Ways of Data Transfer
// Props - 
// Context
// Redux



// conditional operartor
// if - &&
// if else - (true ? 'true' : 'false')




// State vs Props (var, let, const) - Object

// to store data inside component - pass data outside component
// state values can update/change (mutable) - props values cant change. (read only / immutable)
// Class Comp - no use in functional comp
// props can be used - props can be used


// Class Component - Statefull Component
// Functional Component - Stateless Component