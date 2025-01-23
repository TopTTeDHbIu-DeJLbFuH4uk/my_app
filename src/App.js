import React, {useEffect, useState} from "react";

import PostList from "./components/UI/PostList";
import PostForm from "./components/UI/PostForm";

import PostFilter from "./components/PostFilter";

import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";

import {usePosts} from "./hooks/usePosts";
import axios from "axios";

const App = () => {

    const [posts, setPosts] = useState([]);

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    useEffect(() => {
        fetchPosts();
    }, [filter]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    const fetchPosts = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
    }

    const removePost = post => {
        setPosts(posts.filter(p => p.id !== post.id))
    };

    return (
        <>
            <MyButton onClick={() => setModal(true)}>Create user</MyButton>

            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>

            <PostFilter filter={filter} setFilter={setFilter}/>

            <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Posts about JS'}/>
        </>
    );
};

export default App;