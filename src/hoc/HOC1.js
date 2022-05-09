import React from 'react';
import withHoc  from './HOC';

const countries = ['india', 'uk', 'usa', 'australia', 'pakistan', 'russia', 'uae', 'france', 'germany'];
class HOC1 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            countries: ['india', 'uk', 'usa', 'australia', 'pakistan', 'russia', 'uae', 'france', 'germany']
        }
    }

    render() {
        return(
            <>
                {/* {
                    this.state.countries && this.state.countries.map((item) => (
                        <div>{item}</div>
                    ))
                }
                <br></br> */}
                <h4>Data from filter</h4>
                {
                    this.props.dataRet && this.props.dataRet.map((item) => (
                        <div>{item}</div>
                    ))
                }
            </>
        )
    }
}

export default withHoc(HOC1, countries);