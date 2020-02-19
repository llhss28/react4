import React from "react"
import css from "./style.css"
class App extends React.Component{
    constructor(){
        super()
        this.state = {
            back: "white",
            wholeback: "green",
            boxes: ['white', 'black', 'white', 'black', 'white', 'black']
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClick1 = this.handleClick1.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
        this.handleClick3 = this.handleClick3.bind(this)
        this.handleClick4 = this.handleClick4.bind(this)
        this.handleClick5 = this.handleClick5.bind(this)
        this.handleClick6 = this.handleClick6.bind(this)
        this.handleClick7 = this.handleClick7.bind(this)
    }
    handleClick(){
        const updatedBoxes = this.state.boxes.map(function(box){
            let boxColor;
            if (box !== "white"){
               boxColor = "white" 
            } else {
                boxColor = "black"
            }
            return boxColor
        })
        this.setState({boxes: updatedBoxes})
    }
    handleClick1(){
        this.setState(prevState => {
            this.state.boxes[0] = "purple"
            this.state.boxes[1] ="purple"
            return {
                boxes: prevState.boxes
            }
        })
    }
    handleClick2(){
        this.setState(prevState => {
            prevState.boxes[4] = "blue"
            return {
                boxes: prevState.boxes
            }
    })
    }

    handleClick3(){
        this.setState(prevState => {
            prevState.boxes[5] = "blue"
            return {
                boxes: prevState.boxes
            }
    })
    }


    handleClick4(){
        this.setState(prevState =>{
            this.state.boxes[5]= "orange"
            return{
                boxes: prevState.boxes
            }
        })
    }
    handleClick5(){
        this.setState(prevState => {
            this.state.boxes[4] = "yellow"
            return{
                boxes: prevState.boxes
            }
        })
    }

    handleClick6(){
        this.setState(prevState => {
            this.state.boxes[3] ="yellowgreen"
            return{
                boxes: prevState.boxes
            }
        })
    }
    handleClick7(){
        this.setState(prevState =>{
            this.state.boxes[2] = "red"
            return {
                boxes: prevState.boxes
            }
        })
    }



    render(){
        return(
            <div className = "grid" style = {{backgroundColor: this.state.wholeback}}>
                <div style ={{backgroundColor: this.state.boxes[0]}}></div>
                <div style ={{backgroundColor: this.state.boxes[1]}}></div>
                <div style ={{backgroundColor: this.state.boxes[2]}}></div>
                <div style ={{backgroundColor: this.state.boxes[3]}}></div>
                <div style ={{backgroundColor: this.state.boxes[4]}}></div>
                <div style ={{backgroundColor: this.state.boxes[5]}}></div>
                <button onClick={this.handleClick} >clickme</button>
                <button onClick= {this.handleClick1}>click</button>
                <button onClick= {this.handleClick2}>clickme</button>
                <button onClick= {this.handleClick3}>click</button>
                <button onClick= {this.handleClick4}>clickme</button>
                <button onClick= {this.handleClick5}>click</button>
                <button onClick= {this.handleClick6}>clickme</button>
                <button onClick= {this.handleClick7}>click</button>

            </div>
        )
    }
}
export default App