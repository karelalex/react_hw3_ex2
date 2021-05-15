import clock from './clock-face.jpg';
import './App.css';

function App({hour, min, sec}) {
    const hourRotate = hour * 360/12 + min * 360/12/60 - 90
    const minRotate = min * 360/60 + sec * 360/60/60 - 90
    return (
        <div className="App">
            <header className="App-header">
                <div className="clock">
                    <div className="clock-hour" style={{transform: `rotateZ(${hourRotate}deg)`}} />
                    <div className="clock-minute" style={{transform: `rotateZ(${minRotate}deg)`}} />
                    <img src={clock} className="App-logo" alt="logo"/>
                </div>
            </header>
        </div>
    );
}

export default App;
