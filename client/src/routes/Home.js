import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import Movie from '../components/Movie.js';

const GET_MOVIES = gql`
	{
		movies {
			id
			medium_cover_image
		}
	}
`;

function Home() {
	const { loading, data } = useQuery(GET_MOVIES);

	return (
		<div className="flex flex-col items-center w-full">
			<header className="bg-header-gradient h-45 w-full text-white flex flex-col justify-center items-center ">
				<h1 className="text-6xl font-semibold mb-5">Movies App</h1>
			</header>
			<div className="grid grid-cols-4 gap-6 w-7/12 relative -top-12">
				{loading && (
					<div className="text-lg opacity-50 font-medium mt-2.5">Loading...</div>
				)}
				{!loading &&
					data.movies &&
					data.movies.map((movie) => <Movie key={movie.id} id={movie.id} />)}
			</div>
		</div>
	);
}

export default Home;
