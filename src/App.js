import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import About from "./pages/About/About";
import Team from "./pages/Team/Team";
import Publication from "./pages/Publication/Publication";
import Research from "./pages/Research/Research";
import News from "./pages/News/News";
import Gallery from "./pages/Gallery/Gallery";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import React from "react";

function App() {
	const { pathname } = window.location;
	const [activeLink, setActiveLink] = React.useState(pathname);
	return (
		<>
			<BrowserRouter>
				<Header activeLink={activeLink} setActiveLink={setActiveLink} />
				<Routes>
					<Route path="/" element={<Home setActiveLink={setActiveLink} />} />
					<Route path="/research" element={<Research />} />
					<Route path="/publication" element={<Publication />} />
					<Route path="/team" element={<Team />} />
					<Route path="/about" element={<About />} />
					<Route path="/news" element={<News />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="*" element={<Error />} />
				</Routes>
				<Footer setActiveLink={setActiveLink} />
			</BrowserRouter>
		</>
	);
}

export default App;
