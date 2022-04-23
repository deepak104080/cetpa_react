import React, {useEffect, useState} from 'react';

const GitHub = () => {
    const [issuesArr, setIssuesArr] = useState([]);
    const [pageNum, setPageNum] = useState([1,2,3,4,5,6,7,8,9,10]);
    const [currentPageNum, setCurrentPageNum] = useState(1);

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
            <div>
                Github issues List
            </div>
            {
                pageNum && pageNum.map((item) => (
                    <button className="btn btn-danger" onClick={() => setCurrentPageNum(item)}>Page {item}</button>
                ))
            }
            <button>Load More...</button>
            <table border="1">
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
        </>
    )
}

export default GitHub;