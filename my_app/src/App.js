import React, {use, useState} from "react";
import Counter from "./components/Counter";
import ContainerCounters from "./components/ContainerCounters";

import PostList from "./components/PostList";
import ContainerForm from "./components/UI/input/ContainerForm";

const App = () => {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JS', body: 'Description'},
        {id: 2, title: 'JS 1', body: 'Description'},
        {id: 3, title: 'JS 2', body: 'Description'},
    ]);


    return (
        <>
            <ContainerCounters/>
            <ContainerForm/>
            <PostList posts={posts} title={'List of posts 1'}/>
        </>
    );
};

export default App;