import React, { useState } from "react";

const UseStateBasics = () => {
	// console.log("hello world");
	// const value = useState(1)[0];
	// const handler = useState(1)[1];
	const [text, setText] = useState("random Title");
	const handleClick = () => {
		if (text === "random title") {
			setText("hello world");
		} else {
			setText("random title");
		}
	};
	return (
		<React.Fragment>
			<h1>{text}</h1>
			<button className='btn' onClick={handleClick}>
				Change title
			</button>
		</React.Fragment>
	);
};

export default UseStateBasics;
