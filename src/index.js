import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';

import App from './components/App/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();


