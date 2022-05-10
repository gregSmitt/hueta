import c from './top_image.module.css';

const Top_image = () => {
	return (
		<div className={c.image}>
			<img src="https://s3.nat-geo.ru/images/2019/9/2/80a506c2982443e9834fad5c822ec6a9.max-2500x1500.jpg"
				alt="pic" />
		</div>
	);
}

export default Top_image;