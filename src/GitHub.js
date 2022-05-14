import React, {useContext, useEffect, useState} from 'react';
import { DataAppContext } from './DataApp';

const GitHub = () => {
    const [issuesArr, setIssuesArr] = useState([]);
    const [pageNum, setPageNum] = useState([1,2,3,4,5,6,7,8,9,10]);
    const [currentPageNum, setCurrentPageNum] = useState(1);
    const login_temp = useContext(DataAppContext);
    console.log(login_temp);

    useEffect(() => {
        fetch(`https://api.github.com/repositories/1296269/issues?page=${currentPageNum}&per_page=10`)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            //console.log(data);
            setIssuesArr(data);
            // setIssuesArr([...issuesArr, ...data]);
        })
    },[currentPageNum])

    return(
        <>
            <div className='row bg-info'>
                <div className='col-12'>
                
                    <button className="btn btn-primary btn-sm" onClick={login_temp.login}>
                        {
                            login_temp.appstate.loginstatus ? <span>Logout</span> : <span>Login</span>
                        }
                    </button>
                    Welcome - {login_temp.appstate.loginstatus && login_temp.appstate.username}
                    {/* login_temp.loginstatus ? <button onClick={login_temp.login}></button> : <button onClick={login_temp.login}>Login</button> */}
                    </div>
            </div>
            <div>
                Github issues List
            </div>
            {
                pageNum && pageNum.map((item) => (
                    <button className="btn btn-sm btn-secondary" onClick={() => setCurrentPageNum(item)}>Page {item}</button>
                    // <button className="button-github" onClick={() => setCurrentPageNum(item)}>Page {item}</button>
                ))
            }

            <button className='btn btn-primary btn-sm'>Load More...</button>
            <div className='table-responsive'>
                <table className='table'>
                            <tr>
                                <th>Number</th>
                                <th>ID</th>
                                <th>Login User</th>
                                <th>URL</th>
                            </tr>
                            {
                                issuesArr && issuesArr.map((item) => (                       
                                    <tr key={item.number}>
                                        <td>{item.number}</td>
                                        <td>{item.id}</td>
                                        <td>{item.user.login}</td>
                                        <td>{item.user.url}</td>
                                    </tr>
                                ))
                            }
                </table>
            </div>
        </>
    )
}

export default GitHub;



// REST API
// GET - READ
// POST - CREATE
// PUT - UPDATE
// DELETE - DELETE

// json-server

// database - structured and no-structred
// table - row column
// non-structred - schema

// Contact List - App