import { Link } from 'react-router-dom';

function Movie({ id }) {
	return (
		<div className="h-96 w-full rounded-lg shadow-md bg-transparent">
			<Link to={`/${id}`}>{id}</Link>
		</div>
	);
}

export default Movie;
