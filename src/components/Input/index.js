import './style.css';

function Input({ onChange, value, className, error, placeholder }) {
    const classNames = ['input', className].filter(Boolean).join(' ')
    return (
        <>
            <input type="text"
                onChange={onChange} 
                value={value} 
                className={classNames} 
                placeholder={placeholder}
            />
            {Boolean(error) && <p className="input__error">{error}</p>}
        </>
    )
}

export default Input