import c from './friend.module.scss';
import { NavLink } from "react-router-dom";

const Friend = (props) => {


	let isItActive = ({ isActive }) => isActive ? c.active : "";

	return (
		<li className={c.item}>
			<NavLink className={isItActive} to={`/dialogs/${props.id}`}>
				{props.name}
			</NavLink>
		</li>);
}

export default Friend;

