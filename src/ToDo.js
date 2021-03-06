import React, {useContext} from 'react';
import { DataAppContext } from './DataApp';

class ToDo extends React.Component {
    constructor(){
        super();
        this.state = {
            input_val: '',
            toDoList: []
        }
    }

    display_input_value = (event) => {
        //console.log(event.target.value);
        this.setState(
            {
                ...this.state, input_val: event.target.value
            }
        )
    }

    add_to_list = () => {
        console.log(this.state);
        console.log(this.state.input_val);
        console.log(Array.isArray(this.state.toDoList));
        let temparr = [...this.state.toDoList, this.state.input_val];
        console.log(temparr);
        this.setState(
            {
                input_val:'', toDoList:temparr
            }
        )
        
    }

    componentDidUpdate() {
        console.log(this.state.toDoList);
    }

    render() {
        return(
            <>  
                <div className='row bg-info'>
                    <div className='col-12'>
                        <DataAppContext.Consumer>
                            {
                                (login_temp) => {
                                    console.log(login_temp);
                                    return (
                                        <>
                                        <button className="btn btn-primary btn-sm" onClick={login_temp.login}>
                                            {login_temp.appstate.loginstatus ? <span>Logout</span> : <span>Login</span>}
                                        </button>
                                        Welcome - {login_temp.appstate.loginstatus && login_temp.appstate.username}
                                        </>
                                    )
                                }
                                
                            }
                        </DataAppContext.Consumer>
                    </div>
                </div>

                <div>To Do App</div>

                <input type="text" value={this.state.input_val} onChange={this.display_input_value.bind(this)}/>
                <button onClick={this.add_to_list}>Add to List</button>
                
                <ul>
                {this.state.toDoList && this.state.toDoList.map((item, index) => (

                    <li key={`altudo ${index}`}>{item}</li>
                ))}
                </ul>

            </>
        )
    }
}

export default ToDo;