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
   // this.displayHeight=this.displayHeight.bind(this);
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
    displayBMI(){
        let bmi = 703 * this.state.weight / (this.state.height * this.state.height);
        let lastTwoDecimalPlaces = Math.floor(bmi * 100) % 100;
        return Math.floor(bmi) + "." + lastTwoDecimalPlaces;
    }
    displayClassification(){
        const bmi = parseFloat(this.displayBMI());
        if(bmi < 18.5){
            return 'Peso bajo';
        }else if(bmi < 24.9){
            return 'Normal';
        }else if(bmi < 29.9){
            return 'Sobre peso';
        }else{
            return <div>
                <span className = 'warning'>Obeso</span>
                {' '}
                <a className = 'sitelink' href="http://algunapartedeayuda.com">
                    ¿Que puedo hacer?
                </a>
            </div>
             
        }
        
    }
    displayWeight(){
        
        return `${this.state.weight} ${this.pluralize(this.state.weight,'pound','pounds')}`
    }
    displayHeight(){
        const feet = Math.floor(this.state.height /12);
        const inches = this.state.height % 12; 
        return `${feet} feet ${inches} ${this.pluralize(inches,'inch','inches')}`
    }
    pluralize(count,singular, plural){
        //console.log('count',count);
        if(count === 1){
            return singular;
        }
        return plural;
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
                    {this.displayHeight()}
                </div>
                <div className="result">
                    {this.displayWeight()}
                </div>
                <div className="result">
                    {this.displayBMI()}
                </div>
                <div className="result">
                    {this.displayClassification()}
                </div>
            </div>
        )
    }

} 