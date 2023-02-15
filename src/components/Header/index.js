import { useContext } from 'react';
import { themeContext } from '../../contexts/theme';
import withTheme from '../../withTheme';
import Input from '../Input';
import './style.css';

function Header({ onSearch, searchQuery }) {
    const theme = useContext(themeContext)

    return (
        <header className={withTheme("header", theme)}>
            <h1 className={withTheme("header__title", theme)}>لیست کارها</h1>
            <Input onChange={onSearch} value={searchQuery} placeholder="جستجوی کار..." />
        </header>
        
    )
}

export default Header