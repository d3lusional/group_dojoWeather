import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getCityDetails} from './state/actions';


class City extends Component {
    componentWillMount(){
        this.props.getCityDetails(this.props.match.params.cityName);
    }

    render() {
        console.log(this.props.currentCity)
        console.log("text from city.js")
        return(
            
            <div>
                <h1>City Forecast</h1>
                    <div>
                        <ul>
                            <li>{this.props.currentCity.main.temp}</li> 
                            <li>{this.props.currentCity.main.humidity}</li>
                        </ul>
                        
                    </div>
            </div>

        )
    }
}
const mapStateToProps = (state) => {
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