import React from 'react'

// importo l'hook useContext
import { useContext } from 'react';

// importo il contesto che voglio utilizzare
import PostsContext from '../contexts/PostsContext';

const PostsList = () => {
    // creo la vartiabile
    let count = useContext(PostsContext);

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    {count.map((post) => {
                        return (
                            <div key={post.id} className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">{post.category}</h6>
                                    <p className="card-text">{post.content}.</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default PostsList;
