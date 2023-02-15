import { useContext, useState } from 'react';

import './style.css';

import Header from '../Header'
import Items from '../Items'
import Actions from '../Actions'
import withTheme from '../../withTheme';
import { themeContext } from '../../contexts/theme';
import { useNavigate } from 'react-router-dom';

const initialItems = [
    {id: 'a', name: 'کار 1'},
    {id: 'b', name: 'کار 2'},
    {id: 'c', name: 'کار 3'},
    {id: 'd', name: 'کار 4'},
    {id: 'e', name: 'کار 5'},
    {id: 'f', name: 'خیلی خیلی خیلی خیلی خیلی خیلی خیلی خیلی'},
    {id: 'g', name: 'کار 7'},
    {id: 'h', name: 'کار 8'},
    {id: 'i', name: 'کار 9'},
    {id: 'j', name: 'کار 10'},
]

// function reducer(state, { type, payload }) {

//     switch (type) {
//         case 'addItem':
//             return {
//                 items: [...state.items, payload]
//             }
//         case 'removeItem':
//             const idToRemove = payload
//             return {
//                 items: state.items.filter((item) => item.id !== idToRemove)
//             }
//         default:
//             return state
//     }
// }

   // const [state, dispatch] = useReducer(reducer, { items: initialItems })

    // function handleClick() {
    //     const newItem = { id: 'z', name: 'کار جدید جدید جدید' }
    //     dispatch({ type: 'addItem', payload: newItem })
    // }

    // function handleRemoveClick() {
    //     dispatch({ type: 'removeItem', payload: 'z' })
    // }

function TodoContainer() {
    const theme = useContext(themeContext)
    const [items, setItems] = useState(initialItems)
    const [searchQuery, setSearchQuery] = useState('');    
    const navigate = useNavigate()

    function handleAdd(name) {
        setItems([...items, { id: `a${Math.floor(Math.random() * 1000)}`, name }])
        navigate("/posts")
    }

    function handleDelete(id) {
        setItems(items.filter((item) => item.id !== id))
    }
    
    function handleSearch(event) {
        setSearchQuery(event.target.value)
    }

    const filteredItems = items.filter((item) => item.name.startsWith(searchQuery))

    return (
        <main className={withTheme("todo-container", theme)}>
            <Header onSearch={handleSearch} searchQuery={searchQuery} />
            {/* <button onClick={handleClick}>Add new Item</button> */}
            {/* <button onClick={handleRemoveClick}>Remove Item</button> */}
            <Items items={filteredItems} onDelete={handleDelete}/>
            <Actions onAdd={handleAdd} />
        </main>
    )
}

export default TodoContainer