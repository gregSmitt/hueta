import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { addPost, addPostCash, inputCash } from './Redux/state';

let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <App
                    profilePage={state.profilePage}
                    dialogsPage={state.dialogsPage}
                    addPost={addPost}
                    addPostCash={addPostCash}
                    inputCash={inputCash}
                />
            </Router>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

export default renderEntireTree;
