import React from "react";
import s from './App.module.css';

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const App = (props) => {
	return (
		<div className={s.block}>
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;