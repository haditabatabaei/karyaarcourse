import TodoItem from '../TodoItem';
import './style.css';

function Items({ items, onDelete }) {
    function renderList() {
        if(!items || items.length === 0) {
            return <p>کاری پیدا نشد!</p>
        }

        return items.map((item) => <TodoItem key={item.id} onDelete={() => onDelete(item.id)} name={item.name} />)
    }   

    return (
        <main className="items">
            {renderList()}
        </main>
    )
}

export default Items