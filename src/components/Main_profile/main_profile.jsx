import Top_image from './Top_image/top_image.jsx';
import Profile from './Profile/profile.jsx';
import MyPosts from './MyPosts/myPosts.jsx';
import c from './main_profile.module.scss';

const Main_profile = (props) => {
    return (
        <div className="main">
            <Top_image />
            <Profile />
            <MyPosts
                profilePage={props.profilePage}
                addPost={props.addPost}
                addPostCash={props.addPostCash}
                inputCash={props.inputCash}
            />
        </div>
    );
};

export default Main_profile;
