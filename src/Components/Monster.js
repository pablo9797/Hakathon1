import React from "react"
import MonsterStock from './MonsterStock'


class Monster extends React.Component{
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
          <div className = 'Monster'>
            <div className='CandyTittle'>
                <h1>Choose your delivery Monster!</h1>
            </div>
            <div className = 'confiseries'>
                <div className='popCorn'>
                    <div><img src={MonsterStock.popcorn}/></div>
                    <p>Christinne  <input type="checkbox" name="vehicle1" value="Bike"></input></p>
                </div>
                <div className='pommeAmour'>
                    <div><img src={MonsterStock.pommeAmour}/></div>
                    <p>Miranda  <input type="checkbox" name="vehicle1" value="Bike"></input></p>
                </div>
                <div className='coca'>
                    <div><img src={MonsterStock.coca}/></div>
                    <p>Copain  <input type="checkbox" name="vehicle1" value="Bike"></input></p>
                </div>
                <div className='bonbon'>
                    <div><img src={MonsterStock.bonbon}/></div>
                    <p>Angelo  <input type="checkbox" name="vehicle1" value="Bike"></input></p>
                </div>
                <div className='pez'>
                    <div><img src={MonsterStock.pez}/></div>
                    <p>Nico  <input type="checkbox" name="vehicle1" value="Bike"></input></p>
                </div>
            </div>
        </div>
      )
    }
}




export default Monster;