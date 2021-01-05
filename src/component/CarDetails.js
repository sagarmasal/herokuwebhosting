import React from 'react';
import '../App.css';

class CarDetails extends React.Component {

    render() {
        console.log("CarDetails");

        return (

            this.props.users.map((item, i) =>

                <li key={i}>  {i} ====   {item.first_name} === {item.last_name}  === {item.email}
                </li>

              )

        )



    } // render
}// class
export default CarDetails;
