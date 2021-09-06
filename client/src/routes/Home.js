import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';

// Query
const GET_MOVIES = gql`
	{
		movies {
			id
			medium_cover_image
		}
	}
`;

function Home() {
	const { loading, error, data } = useQuery(GET_MOVIES);

	return <h1 className="bg-blue-800">Home</h1>;
}

export default Home;
