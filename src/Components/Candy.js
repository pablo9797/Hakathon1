import React from "react"
import CandyStock from './CandyStock'
import './Candy.css'


class Candy extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count1: 0,
            count2: 0,
            count3: 0,
            count4: 0,
            count5: 0,
        }
        this.increment1 = this.increment1.bind(this)
        this.increment2 = this.increment2.bind(this)
    }

    increment1(){
        this.setState({
            count1:this.state.count1 + 1
        })
    }
    increment2(){
        this.setState({
            count2:this.state.count2 + 1
        })
    }
    increment3(){
        this.setState({
            count3:this.state.count3 + 1
        })
    }
    increment4(){
        this.setState({
            count4:this.state.count4 + 1
        })
    }
    increment5(){
        this.setState({
            count5:this.state.count5 + 1
        })
    }
    

    render(){
      return(
          <div className = 'candy'>
            <div className='CandyTittle'>
                <h1>Choose your scary candy!</h1>
            </div>
            <div className = 'confiseries'>
                <div className='popCorn'>
                    <div><img src={CandyStock.popcorn}/></div>
                    <input type="button" value="Ajouter" onClick={event=>this.increment1()}></input>
                    <span id="score">{this.state.count1}</span>
                </div>
                <div className='pommeAmour'>
                    <div><img src={CandyStock.pommeAmour}/></div>
                    <input type="button" value="Ajouter" onClick={event=>this.increment2()}></input>
                    <span id="score">{this.state.count2}</span>
                </div>
                <div className='coca'>
                    <div><img src={CandyStock.coca}/></div>
                    <input type="button" value="Ajouter" onClick={event=>this.increment3()}></input>
                    <span id="score">{this.state.count3}</span>
                </div>
                <div className='bonbon'>
                    <div><img src={CandyStock.bonbon}/></div>
                    <input type="button" value="Ajouter" onClick={event=>this.increment4()}></input>
                    <span id="score">{this.state.count4}</span>
                </div>
                <div className='pez'>
                    <div><img src={CandyStock.pez}/></div>
                    <input type="button" value="Ajouter" onClick={event=>this.increment5()}></input>
                    <span id="score">{this.state.count5}</span>
                </div>
            </div>
        </div>
      )
    }
}




export default Candy;