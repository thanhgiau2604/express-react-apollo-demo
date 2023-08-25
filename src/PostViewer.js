import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';
import { Table } from 'reactstrap';

export const GET_POSTS = gql`
	query GetPosts {
		posts {
			id
			author
			body
		}
	}
`;

const rowStyles = (post, canEdit) =>
	canEdit(post) ? { cursor: 'pointer' } : {};

const PostViewer = ({ canEdit, onEdit }) => {
	const { loading, data } = useQuery(GET_POSTS);
	if (loading) return <p>loading...</p>;

	return (
		<Table>
			<thead>
				<tr>
					<th>Author</th>
					<th>Body</th>
				</tr>
			</thead>
			<tbody>
				{data.posts?.map(post => (
					<tr
						key={post.id}
						style={rowStyles(post, canEdit)}
						onClick={() => canEdit(post) && onEdit(post)}
					>
						<td>{post.author}</td>
						<td>{post.body}</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

PostViewer.defaultProps = {
	canEdit: () => false,
	onEdit: () => null,
};

export default PostViewer;
