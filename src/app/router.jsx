import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        
        children: [
            { index: true, element: <HomePage /> },
            { path: "projects", element: <ProjectsPage /> },
            { path: "projects/sigma", element: <SigmaPage /> },
            { path: "projects/rocket-a4", element: <RocketA4Page /> },
            { path: "projects/jet-engine", element: <JetEnginePage /> },
            { path: "team", element: <TeamPage /> },
            { path: "join", element: <JoinPage /> },
            { path: "sponsors", element: <SponsorsPage /> }
        ]
    }
]);

export default router;
