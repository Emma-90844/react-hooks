import React, { useEffect } from 'react';
import axios from 'axios'

const DataFetching = () => {
    const [posts, setPosts] = setState([])

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(res => {
            // console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])
    return (
        <div>
            <ul>
                {
                    posts.map(post => <li key={posts.id}>{posts.title}</li> )
                }
            
            </ul>
        </div>
    );
}

export default DataFetching;
