import c from './information.module.scss';

const Information = (props) => {
	return (
		<div className={c.information}>
			<div className={c.image}>
				<img src={props.imageUrl} alt=""></img>
			</div>
			<p className={c.name}>{props.name}</p>
		</div>
	);
}

export default Information;