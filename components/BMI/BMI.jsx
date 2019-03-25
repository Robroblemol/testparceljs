import  React, {Component} from 'react'

import './BMI.css'

export default class BMI extends Component{
    constructor(props){
        super(props)
            this.state = {
                height: 5 * 12,//five feet
                weight: 150,//150 pounds
            }
    this.handleHeightChange = this.handleHeightChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    }
    handleHeightChange(ev){
        //console.log('ev.target.value',ev.target.value);
        this.setState(
            {height: ev.target.value},
        )
    }
    handleWeightChange(ev){
        //console.log('ev.target.value',ev.target.value);
        this.setState(
            {weight: ev.target.value},
        )
    }
    render(){
        return (
            <div className = "container">
                <h1> Calculadora BMI </h1>
                <p>Altura</p>
                <p>
                    <input type="range" 
                    value={this.state.height}
                    min = "1" max = {8 * 12}
                    onChange = {this.handleHeightChange}/>

                </p>
                <p>Peso</p>
                <p>
                    <input type="range" 
                    value={this.state.weight}
                    min = "1" max = {350}
                    onChange = {this.handleWeightChange}/>

                </p>
                <div className="result">
                    {this.state.height}
                </div>
                <div className="result">
                    {this.state.weight}
                </div>
            </div>
        )
    }

} 