import { useParams } from 'react-router-dom';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';

const GET_MOVIE = gql`
	query getMovie($id: Int!) {
		movie(id: $id) {
			id
			title
			medium_cover_image
			description_into
		}
	}
`;

function Detail() {
	const { id } = useParams();
	const { loading, data } = useQuery(GET_MOVIE, {
		variables: { id },
	});
	console.log(loading, data);

	return <h1 className="bg-red-900">Detail</h1>;
}

export default Detail;
