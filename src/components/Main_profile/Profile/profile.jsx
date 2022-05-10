import c from './profile.module.css';

const Profile = () => {
	return (
		<div className={c.profile}>
			<div className={c.image}>
				<img src="https://cdn.fishki.net/upload/post/2016/11/19/2140537/57e499b00d825c1a89bfaaf5b4d6df72.jpg"
					alt="profile photo" />
			</div>
			<div className={c.information}>
				<h1>Mister Poor</h1>
				<ul>
					<li>Day of Die: 2 jun</li>
					<li className='item' >City: petrik</li>
					<li>Education: none</li>
					<li>Web-site: web-what?</li>
				</ul>
			</div>
		</div>
	);
}
export default Profile;