import React from "react";
import s from './App.module.css';

import Header from "./components/Header/Header";

const App = (props) => {
	return (
		<div className={s.block}>
			<Header />
		</div>
	);
}

export default App;