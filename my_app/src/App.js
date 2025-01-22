import React, {use, useRef, useState} from "react";
import Counter from "./components/counter/Counter";
import ContainerCounters from "./components/counter/ContainerCounters";

import PostList from "./components/UI/PostList";
import PostForm from "./components/UI/PostForm";

import MySelect from "./components/UI/select/MySelect";

const App = () => {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JS', body: 'Description'},
        {id: 2, title: 'JS 1', body: 'Description'},
        {id: 3, title: 'JS 2', body: 'Description'},
    ]);

    const [selectedSort, setSelectedSort] = useState('');

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    };

    const removePost = post => {
        setPosts(posts.filter(p => p.id !== post.id))
    };

    return (
        <>
            <PostForm create={createPost}/>
            <hr/>
            <MySelect
                value={selectedSort}
                onChange={sort => setSelectedSort(sort)}
                defaultValue={'Sorting by'}
                options={[
                    {value: 'title', name: 'By name'},
                    {value: 'body', name: 'By description'},
                ]}
            />
            {posts.length
                ?
                <PostList remove={removePost}
                          posts={posts}
                          title={'Posts about JS'}
                />
                :
                <h1 style={{textAlign: 'center'}}>
                    Posts not found!
                </h1>
            }
        </>
    );
};

export default App;