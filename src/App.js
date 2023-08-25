import { useState } from 'react';
import './App.css';
import { Button, Container } from 'reactstrap';

import PostViewer from './PostViewer';
import PostEditor from './PostEditor';

function App() {
	const [editing, setEditing] = useState(null);

	return (
		<Container fluid>
			<Button className='my-2' color='primary' onClick={() => setEditing({})}>
				New Post
			</Button>
			<PostViewer canEdit={() => true} onEdit={post => setEditing(post)} />
			{editing && (
				<PostEditor post={editing} onClose={() => setEditing(null)} />
			)}
		</Container>
	);
}

export default App;
