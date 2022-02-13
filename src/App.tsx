import React from "react";
import s from './App.module.css';

import Header from "./components/Header/Header";
import Main from "./components/Main/Main.tsx";
import Footer from "./components/Footer/Footer";

interface Props { };

const App: React.FC<Props> = (props) => {
	return (
		<div className={s.block}>
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;