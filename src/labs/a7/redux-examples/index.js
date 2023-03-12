import React from "react";
import HelloReduxExampleComponent from "./hello-redux-example-componet";
import {Provider} from "react-redux";
import {createStore} from "redux";
import hello from "./reducers/hello";


const store = createStore(hello);
const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    );
};

export default ReduxExamples;