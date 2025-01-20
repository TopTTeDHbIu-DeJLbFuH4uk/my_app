import React, {use, useState} from "react";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
// import ClassCounter from "./components/classCounter";

const App = () => {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JS', body: 'Description'},
        {id: 2, title: 'JS 1', body: 'Description'},
        {id: 3, title: 'JS 2', body: 'Description'},
    ]);

    return (
        <>
            <div className='main-container'>
                <Counter/>
                <Counter/>
                <Counter/>
                {/*<ClassCounter/>*/}
                {/*<ClassCounter/>*/}
                {/*<ClassCounter/>*/}
            </div>
            <div>
                <PostList posts={posts} title={'List of posts 1'}/>
                <PostList posts={posts} title={'List of posts 2'}/>
            </div>
        </>
    );
};

export default App;