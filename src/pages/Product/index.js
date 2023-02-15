import { useParams, Navigate } from 'react-router-dom'

import { posts } from '../../items';

function Product() {
    const { id } = useParams()

    const work = posts.find((post) => post.id == id);

    return <Navigate to="/" />
}

export default Product