import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const Tick = () => {
    const date = new Date();
    ReactDOM.render(
        <React.StrictMode>
            <App hour={date.getHours()}
                 min={date.getMinutes()}
                 sec={date.getSeconds()}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
Tick();
setInterval(Tick, 30000)


