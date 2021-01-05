import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import CarDetails from './component/CarDetails';
import Pagenotfound from './component/PageNotFound';

 var data = ['Premium', 'Go'];

class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            users: null,
            isLoaded: false,
        }
    }

    componentDidMount() {

        fetch('https://reqres.in/api/users')
            .then((resp) => resp.json())
            .then((result) => {
                this.setState({ users: result.data, isLoaded: true })
            })

    }



    render() {

        var { isLoaded, users } = this.state; 

        console.log("isLoaded : ", isLoaded);


        function selectedCar() {  

                    
                }
    
                const items = []

                for (const [index, value] of data.entries()) {
                    items.push(  <button onClick={selectedCar} className="App-button" key={index}>{value} </button>  )
                } 

                return (
                    <Router>


                         <div>
                            <h2 className="App-header">Book your ride now!</h2>
                            <h3 className="App-body1">List of cars:</h3>

                            <div className="App-circle">
                                  <Link className="App-link" to="/details">{items}</Link>
                             </div>

                            <Switch>

                                <Route exact path='/'></Route>
                                {
                                   isLoaded && 
                                    <Route path="/details" children={<CarDetails users={users} />} />
                                }
                                 
                                    <Route component={Pagenotfound}></Route>
                               
                            </Switch>
                        </div> 


                    </Router>
                );  // render
  } // render
  
} // class


export default <App />;
