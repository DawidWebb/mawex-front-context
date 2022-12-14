import { Routes, Route } from "react-router-dom";
import {
	Navigation,
	Home,
	Offer,
	SubRoutes,
	CertPage,
	BenefitsPage,
	LawPage,
	ContactPage,
	BlogPage,
	ReservationPage,
} from "./routes";
import { Footer } from "./components";
import { OFFERS_NAMES } from "./content/offer-content";

const App = () => {
	const offerSubRoutes = OFFERS_NAMES.map((item) => (
		<Route key={item.id} path={`/${item.linkPath}`} element={<SubRoutes dataPath={item.linkPath} />} />
	));

	return (
		<>
			<Routes>
				<Route path="/" element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path="/offer" element={<Offer />} />
					{offerSubRoutes}
					<Route path="/certificates" element={<CertPage />} />
					<Route path="/benefits" element={<BenefitsPage />} />
					<Route path="/law" element={<LawPage />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route path="/blog" element={<BlogPage />} />
					<Route path="/reservation" element={<ReservationPage />} />
				</Route>
			</Routes>
			<Footer />
		</>
	);
};

export default App;
