import { useContext } from 'react';
import './style.css';

import { themeContext } from '../../contexts/theme';
import withTheme from '../../withTheme';

function TodoItem({ name, onDelete }) {
    const theme = useContext(themeContext);

    return (
        <div className={withTheme("todo-item", theme)}>
            <p className="todo-item__text">{name}</p>
            <button className="todo-item__button" onClick={onDelete}>X</button>
        </div>
    )
}

export default TodoItem