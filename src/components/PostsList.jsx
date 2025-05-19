// importo l'hook useContext
import { useContext } from 'react';

// importo il contesto che voglio utilizzare
import PostsContext from '../contexts/PostsContext';
import PostsCard from './PostsCard';

const PostsList = () => {
    // creo la variabile per utilizzare il contesto
    let count = useContext(PostsContext);

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <PostsCard />
                </div>
            </div>
        </div>
    )
}

export default PostsList;
