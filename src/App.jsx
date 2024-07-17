import { BrowserRouter as Router, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Projects from "./components//Projects/Projects";
import { loader as projectsLoader } from "./components//Projects/Projects";
import Root from "./routes/root";
import Index from "./components/Index/Index";
import { RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <>Something went wrong</>,
		children: [
			{
				index: true,
				element: <Index />,
			},
			{
				path: "portfolio",
				loader: projectsLoader,
				element: <Projects />,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
