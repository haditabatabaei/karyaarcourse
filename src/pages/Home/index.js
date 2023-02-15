import { Link } from 'react-router-dom';

function Home() {
    return (
        <Link to="/todo-list">
            <div style={{ width: '100px', height: '100px', backgroundColor: 'red' }}>
                salam
            </div>
        </Link>
    )
}

export default Home