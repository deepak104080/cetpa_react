import React from 'react';

class RefClass extends React.Component {
    constructor() {
        super();
        this.inputRef1 = React.createRef();
        this.inputRef2 = React.createRef();
        this.outRef1 = React.createRef();
    }

    handleClick = () => {
        console.log('button clicked...');
        console.log(this.inputRef1.current.value);
        console.log(this.inputRef2.current.value);
        let name = this.inputRef1.current.value;
        let password = this.inputRef2.current.value;
        //call api for validation
        if(name == 'deepak' && password === '12345') {
            this.outRef1.current.innerHTML = 'Login Successfull.'
        }
        else {
            this.outRef1.current.innerHTML = 'Login failed. Try again.'
        }
    }

    render() {
        return(
            <>
            <h2>Ref - Class Component</h2>
                Name: <input type="text" ref={this.inputRef1} placeholder="Enter your name"/>
                Password: <input type="text" ref={this.inputRef2} placeholder="Enter your name"/>
                <button onClick={this.handleClick} >Click here...</button>
                <div ref={this.outRef1}></div>
            </>
        )
    }
}

export default RefClass;
