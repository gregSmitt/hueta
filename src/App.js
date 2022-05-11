import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/header.jsx';
import Sidebar from './components/Sidebar/sidebar.jsx';
import Main_profile from './components/Main_profile/main_profile.jsx';
import Dialogs from './components/Dialogs/dialogs.jsx';

import styles from './styles/App.module.scss';
import './styles/normalize.scss';
import './styles/index.scss';

const App = (props) => {
    return (
        <div className={styles.appWrapper}>
            <Header />
            <Sidebar />
            <main>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Main_profile
                                profilePage={props.profilePage}
                                addPost={props.addPost}
                                addPostCash={props.addPostCash}
                                inputCash={props.inputCash}
                            />
                        }
                    />
                    <Route path="/dialogs/*" element={<Dialogs dialogsPage={props.dialogsPage} />} />
                    <Route
                        path="/profile"
                        element={
                            <Main_profile
                                postsData={props.postsData}
                                addPost={props.addPost}
                                addPostCash={props.addPostCash}
                                inputCash={props.inputCash}
                            />
                        }
                    />
                </Routes>
            </main>
        </div>
    );
};

export default App;
