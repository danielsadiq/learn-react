import { useEffect, useState } from "react";
let clicks = 0;


export default function App() {
	const [advice, setAdvice] = useState("");
	const [count, setCount] = useState(0);

	async function getAdvice() {
	try {
		const req = await fetch("https://api.kanye.rest/");
		const data = await req.json();
		clicks++;
		setAdvice(data.quote);
		setCount((c) => c + 1);
	} catch (error) {
		console.log("There's an error");
	}
	}

  useEffect(() => {
    getAdvice();
  }, []);

  return (
	<div>
		<h1>{advice}</h1>
		<button onClick={getAdvice}>Get Advice</button>
		<Message count = {count} />
	</div>
  );
}
// A component is basically a function
// It returns HTML like syntax known as JSX
// Whenever we need something to change in the UI,
// we change/update the state

// use effect takes in 2 arguments, a function and an array

function Message(props){
	return(
		<p>
			You have read <strong>{props.count}</strong> pieces of advice
		</p>
	)
};