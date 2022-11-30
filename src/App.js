import { SplitScreen } from "./SplitScreen";

const LeftHandComponent = ({ name }) => {
    return <h1>{name}</h1>;
};

const RightHandComponent = ({message}) => {
	return <h2>{message}</h2>;
};

function App() {
  	return (
    	<SplitScreen 
			leftWeight={2}
			rightWeight={1}
    	>
			<LeftHandComponent name="Dev"/>
			<RightHandComponent message="Hi!"/>
		</SplitScreen>
  	);
}

export default App;
