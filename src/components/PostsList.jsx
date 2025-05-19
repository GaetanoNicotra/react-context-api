// importo l'hook useContext
import { useContext } from 'react';

// importo il contesto che voglio utilizzare
import PostsContext from '../contexts/PostsContext';
// importo la componente che contiene le singole card
import PostsCard from './PostsCard';

const PostsList = () => {
    // creo la variabile per utilizzare il contesto
    let count = useContext(PostsContext);

    return (
        <div className="container">
            <h1 className='mb-5 mt-5 text-center'>React Context API</h1>
            <div className="row">
                <div className="col-6">
                    {/* utilizzo il map per generare ciascun post a partire dall'array */}
                    {count.map((post) => {
                        return (
                            <PostsCard key={post.id} post={post} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default PostsList;
