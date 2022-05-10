import c from './sidebar.module.css';
import { NavLink } from "react-router-dom";

const Sidebar = () => {
	let isItActive = ({ isActive }) => isActive ? c.active : "";

	return (
		<nav>
			<ul>
				<li className={c.item}><NavLink className={isItActive} to="/">Profile</NavLink></li>
				<li className={c.item}><NavLink className={isItActive} to="/dialogs">Dialogs</NavLink></li>
				<li className={c.item}>Music</li>
				<li className={c.item}>Settings</li>
				<li className={c.item}>News</li>
			</ul>
		</nav>
	);
}

export default Sidebar;