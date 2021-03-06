import React from "react";

// All react components need to import react unless you make react a global name space object which isn't recommended

// This is how you pull in Json from a json file. it is an object that can be used as seen below
import resource from './app.json';

// This is how you load the component specific Sass/css to ensure the css namespace is kept as clean as possible
require("!style-loader!css-loader!sass-loader!./App.scss");

// image source is pulled in from a location by using require then use that const as the parameter for the img tag src
const reactLogo = require('./react_logo.svg');

// This is an example of a class based component
class App extends React.Component {
    // The constructor is needed if you pass props to it
    constructor(props){

        // Super is to extend the React.Component
        super(props);

        // state is setup here
        this.state = {
            timer: new Date().toLocaleTimeString()
        }
    }

    // The render can contain variables or simple processing of data
    render() {

        // using the { must be same as the state variable name } assigns it to a variable of the same name as in state
        let { timer } = this.state;

        // Here you are returning the data that will be rendered into html
        return (
            <div style={{display: 'inline-block'}} className="app">
                <img height='40px' src={reactLogo}/>
                <h1>{resource.h1}</h1>
                <p>{resource.p}</p>
                <p>{timer}</p>
            </div>
        )
    }

    // default method called once the component is mounted/rendered on the page
    componentDidMount(){

        // setting an interval of 1000 milsec or 1 second calls the handle timer function to keep updating the time
        // On the page you will now see the timer update every second
        setInterval(()=>{
            this.handleTimer();
        }, 1000);

    }

    // method example
    handleTimer() {
        // naming the variable the same as the state variable allows you to pass it by itself see below
        let timer = new Date().toLocaleTimeString()

        // This is the same as doing the fallowing
        // timer:timer but because of using the same variable name you can set like this for simplified code
        this.setState({

            timer
        })

    }
}

/*
* Typically we will want to set prop types here. This is to ensure only the proper data is passed to our component
* This helps with handling the wrong types of data or missing data and while in dev it can throw an error for us
* This is extremely useful in troubleshooting more complex components
 */

// You must export the default app.
// Please export here because this will allow passing params to the exported class if needed

export default App;
