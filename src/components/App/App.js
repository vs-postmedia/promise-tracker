import React from 'react';
import Layout from '../Layout/Layout';
import './App.css';

const googleSheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTlmUsLWT2CmS-L-YSqxCElBqfA-5prxXY19ZflnFmGdnmJofP2xf2P83EfLqCcNVySsffG8WWQ6eGK/pub?gid=1886747853&single=true&output=csv';

function App() {
	return (
	  	<div className="App">
	  		<h1>Gov’t promise tracker</h1>
	  		<Layout sheet={googleSheetURL}></Layout>
	  	</div>
	);
}

export default App;
