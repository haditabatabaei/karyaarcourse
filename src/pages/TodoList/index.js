import { useState } from 'react';
import { Link } from 'react-router-dom';

import { themeContext } from '../../contexts/theme';
import withTheme from '../../withTheme';
import TodoContainer from '../../components/TodoContainer';

import { posts } from '../../items'

function TodoList() {
    const [theme, setTheme] = useState('light');

    function toggleTheme() {
      const newTheme = theme === 'light' ? 'dark' : 'light';
  
      setTheme(newTheme)
    }

    console.log({ posts })
    return (

        <section className={withTheme('app', theme)}>
            {/* <div style={{display: 'flex', flexDirection:'column', gap: '16px'}}>
            {posts.map(post => (<Link to={`/product/${post.id}`}>{post.name}</Link>))}
            </div> */}

            <themeContext.Provider value={theme}>
                <TodoContainer />
            </themeContext.Provider>
            <button className={withTheme("app__theme-changer", theme)} onClick={toggleTheme}>CT</button>
        </section>
    )
}

export default TodoList