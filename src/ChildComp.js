import React from 'react';

class ChildComp2 extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    componentDidUpdate(){
        console.log(this.props);
    }

    render() {
        const {city, country, state} = this.props;
        return(
            <>
                <div className='abc'>
                    <p>This is a child component.</p>
                    <p>City - {city}</p>
                    <p>City - {country}</p>
                    <p>City - {state}</p>
                </div>
                <div className='abc'>
                    child component.
                </div>
            </>
        )
    }
}

export default ChildComp2;


// reason of use of fragment
// block inline issues and selector issues
// .class > .childclass
// .class .childclass