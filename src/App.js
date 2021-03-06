import React from 'react';
//import clock from './clockFace.jpg';
import './App.css';

function App({hour, min, sec}) {
    const hourRotate = hour * 360/12 + min * 360/12/60 - 90;
    const minRotate = min * 360/60 + sec * 360/60/60 - 90;
    return (
        <div className="App">
            <header className="App-header">
                <div className="clock">
                    <div className="clock-hour" style={{transform: `rotateZ(${hourRotate}deg)`}} />
                    <div className="clock-minute" style={{transform: `rotateZ(${minRotate}deg)`}} />
                    {/*<img src={clock} alt="clock"/>*/}
                    <img src='https://c.radikal.ru/c35/2105/9f/acf7aa90e949.jpg' alt="clock"/> {/*for stackblitz*/}
                </div>
            </header>
        </div>
    );
}

export default App;
