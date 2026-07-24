import React from 'react';
import { useState } from 'react';

const App = () => {

	const [user, setUser] = useState("Himanshu");

	let handleClick = () => {
		setUser("Rohit");
	}

	return (
		<div>
			<h1>Form Handling in React</h1>
			<h2>User is - {user}</h2>
			<button onClick={handleClick}> Change Name</button>
		</div>
	);
}

export default App;