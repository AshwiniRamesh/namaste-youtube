import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store/appStore";
import Body from "./components/Body";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
import SearchResults from "./components/searchResults";
import MemoHookLearnings from "./components/MemoHookLearnings";
import ErrorBoundary from "./components/ErrorBoundary"; 

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <ErrorBoundary />,
    children: [
      { path: "/", element: <MainContainer /> },
      { path: "/watch", element: <WatchPage /> },
      { path: "/search", element: <SearchResults /> }, // Add search page
      { path: "/memoHook", element: <MemoHookLearnings /> },//useMemo() hook learnings
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter}>
      </RouterProvider>
    </Provider>
  );
}

export default App;
