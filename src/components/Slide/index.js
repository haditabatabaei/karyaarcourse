import './style.css';

function Slide() {

    const style = {
        backgroundImage: `url(https://loremflickr.com/900/500/bulding?random=${Math.floor(Math.random() * 100)})`
    }

    return (
        <div style={style} className="slide">
            <button className="slide__button">کلیک کنید</button>
        </div>
    )
}

export default Slide