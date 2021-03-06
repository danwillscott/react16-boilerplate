import React from "react";
import ReactDOM from 'react-dom';
import {AppContainer} from "react-hot-loader";
import App from "./components/App";


// Find and store the element where we mount react
const rootEl = document.getElementById("root");


// We are passing the component in this case app to this arrow function
// This allows for containerizing our components in parent components.
// This is not required but used for hot loading changes

const renderComponent = (Component) => {

    // calling ReactDOM.render allows us to put the component in a hotloader component
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        rootEl
    );
};

// Now we actually set the render component
renderComponent(App);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept("./components/App", () => {
        const NewApp = require("./components/App").default;
        renderComponent(NewApp);
    });
}
