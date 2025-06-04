import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";
import { Provider as BlogProvider } from "./context/BlogContext.jsx";
import store from "./store/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <BlogProvider>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </BlogProvider>
    </Provider>
  </BrowserRouter>
);
