import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getCityDetails} from './state/actions';


class City extends Component {
    componentWillMount(){
        this.props.getCityDetails(this.props.match.params.cityName);
    }

    constructor (props) {
      super(props);

      // this.state= {
      //   city: this.props.currentCity
      // }
    }

    render() {
        console.log("text from city.js")
        // let city = this.props.currentCity.temp
        console.log(this.props.currentCity)
        return(
            
            <div>
              {/* {JSON.stringify (city)} */}
                <h1>City Forecast</h1>
                    <div>
                        <ul>
                            <li>Temperature: {this.props.currentCity.temp}</li>
                            {/* {this.props.currentCity.map((weather) => {
                              return (
                              <li>Current Conditions: {weather.description}</li>
                            )})
                            }  */}
                        </ul>
                        
                    </div>
            </div>

        )
    }
}
const mapStateToProps = state => {
    return{
        currentCity: state.currentCity
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getCityDetails: cityName => dispatch(getCityDetails(cityName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(City);