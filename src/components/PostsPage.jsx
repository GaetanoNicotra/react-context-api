import React from 'react'
import PostsList from './PostsList';

const PostsPage = () => {
    return (
        <>
            <div className="container">
                <header>
                    <h1>React Context API</h1>
                </header>
                <main>
                    <PostsList />
                </main>
            </div>
        </>
    )
}

export default PostsPage;
