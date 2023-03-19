import { compose } from "redux";

declare let window;
export const composeEnhancers =
    (process.env.NODE_ENV === "development" &&
        window &&
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
