// import state from './Redux/state';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { addPost } from './Redux/state';

// ReactDOM.render(
//     <React.StrictMode>
//         <Router>
//             <App profilePage={state.profilePage} dialogsPage={state.dialogsPage} addPost={addPost} />
//         </Router>
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// reportWebVitals();

import state from './Redux/state';
import './index.css';
import reportWebVitals from './reportWebVitals';
import renderEntireTree from './render';

renderEntireTree(state);

reportWebVitals();
