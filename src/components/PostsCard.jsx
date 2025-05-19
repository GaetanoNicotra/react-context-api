import React from 'react'

const PostsCard = (props) => {
    // utilizzo le props
    const { title, content, category } = props.post;

    return (
        // definisco la struttura delle card
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{category}</h6>
                    <p className="card-text">{content}.</p>
                </div>
            </div>
        </div>
    )
}

export default PostsCard;
