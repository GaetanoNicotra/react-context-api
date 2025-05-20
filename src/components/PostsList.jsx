// importo l'hook useContext
import { useContext, useEffect } from 'react';
// importo il contesto che voglio utilizzare
import PostsContext from '../contexts/PostsContext';
// importo la componente che contiene le singole card
import PostsCard from './PostsCard';
import { useAlertContext } from '../contexts/AlertContext';
import Alert from './Alert';

const PostsList = () => {
    const { setAlertData } = useAlertContext();
    useEffect(() => {
        setAlertData({ type: 'success', message: 'Nuovi post disponibili' });
    }, [])

    // creo la variabile per utilizzare il contesto
    let count = useContext(PostsContext);



    return (
        <>
            <header>
                <h1 className='text-center text-white'>React Context API</h1>
            </header>
            <div className="container mt-5">
                <Alert></Alert>
                <div className="row">
                    {/* utilizzo il map per generare ciascun post a partire dall'array */}
                    {count.map((post) => {
                        return (
                            <PostsCard key={post.id} post={post} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default PostsList;
