import { useContext, useState } from 'react';
import { themeContext } from '../../contexts/theme';
import withTheme from '../../withTheme';

import Input from '../Input';
import './Actions.css';

function Actions({ onAdd }) {
    const theme = useContext(themeContext)
    const [newName, setNewName] = useState('');
    const [error, setError] = useState('')

    function handleCancel() {
        setNewName('')
        setError('')
    }

    function handleConfirm() {
        if(!newName) {
            setError('این مقدار اجباری است')
            return
        }

        onAdd(newName)
        setNewName('')
        setError('')
    }

    return (
        <footer className={withTheme("actions", theme)}>
            <Input value={newName} onChange={e => setNewName(e.target.value)} placeholder="اضافه کردن کار..." error={error}/>

            <div className="actions__buttons">
                <button className={`${withTheme("button", theme)} button--secondary`} onClick={handleCancel}>منصرف شدم</button>
                <button className="button button--primary" onClick={handleConfirm}>تایید</button>
            </div>
        </footer>
    )
}

export default Actions