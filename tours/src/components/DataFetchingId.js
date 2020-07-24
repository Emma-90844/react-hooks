import React, { useEffect } from 'react';
import axios from 'axios'

const DataFetching = () => {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)

    useEffect(() => {
        axios.get(`http://js onplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            // console.log(res)
            setPost(res.data.id)
        })
        .catch(err => {
            console.log(err)
        })
    },[id])
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.tartget.value) }/>
            <ul>
                {
                <li>{posts.title}</li> 
                }
            
            </ul>
        </div>
    );
}

export default DataFetching;
