import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.tsx";

const router = createBrowserRouter([
	{
		path: "/", 
		element : <App />
	}
]);

const rootElement = document.getElementById("root");
if (rootElement === null) {
	throw new Error("Root element not found");
}



createRoot(rootElement).render(
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>
)
