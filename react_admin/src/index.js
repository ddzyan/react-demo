import React from 'react';
import ReactDOM from 'react-dom';

import storageUtils from './utils/storageUtils';
import memoryUtils from './utils/memoryUtils';
import App from './app';

const user = storageUtils.getUser();
memoryUtils.user = user;
ReactDOM.render(<App />, document.getElementById('root'));
