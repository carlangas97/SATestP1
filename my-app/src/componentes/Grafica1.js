import React, {Component} from 'react';
import {Line, Pie} from 'react-chartjs-2';
import CanvasJSReact from '../assets/canvasjs.react';

var CanvasJSChartRAM = CanvasJSReact.CanvasJSChart;
var dataPointsRAMa = [];
var CanvasJSChartCPU = CanvasJSReact.CanvasJSChart;
var dataPointsCPUa = [];

class App extends Component {

    constructor(props){
        super(props);
        this.displayServer1Graphs = this.displayServer1Graphs.bind(this)
        this.displayServer2Graphs = this.displayServer2Graphs.bind(this)
    }

    state = {
        componentShown: -1
    }

    componentDidMount(){
        this.interval_modules = setInterval( () => {
            fetch('http://34.122.233.238:5000/datos1')
                .then(res => res.json())
                .then((data) => {
                    let tempData = JSON.parse(data)
                    //console.log(tempData)
                    dataPointsRAMa.push({y: Number(tempData['used'])})
                })
            fetch('http://34.122.233.238:5000/datos2')
                .then(res => res.json())
                .then((data) => {
                    let tempData = JSON.parse(data)
                    dataPointsCPUa.push({y: Number(tempData['used']) + 0.00005})
                })
                .catch(console.log)

        }, 5000);
    }

    componentWillUnmount(){
        clearInterval(this.interval)
        clearInterval(this.interval_modules)
        clearInterval(this.intervalGA)
        clearInterval(this.intervalGB)
    }

    displayServer1Graphs(){
        clearInterval(this.intervalGB)
        this.setState({ componentShown: 11 })
        this.intervalGA = setInterval( () => {
            this.chartRAM.render()
        }, 1000)
    }

    displayServer2Graphs(){
        clearInterval(this.intervalGA)
        this.setState({ componentShown: 21 })
        this.intervalGB = setInterval( () => {
            this.chartCPU.render()
        }, 1000)
    }

    render () {

        const optionsRAM = {
            animationEnabled: true,
            title:{
                text: "RAM SERVIDOR A (MB)"
            },
            data: [
                {
                    type: "area",
                    name: "RAM Servidor A",
                    showInLegend: true,
                    dataPoints: dataPointsRAMa
                }
            ]
        }

        const optionsCPU = {
            animationEnabled: true,
            title:{
                text: "CPU SERVIDOR A"
            },
            data: [
                {
                    type: "area",
                    name: "CPU Servidor A",
                    showInLegend: true,
                    dataPoints: dataPointsCPUa
                }
            ]
        }

        return (
            // JSX to render goes here...
            <div class="container">
                <div class="d-flex justify-content-center">
                    <h1>
                        ......................................................
                    </h1>
                    <a onClick={this.displayServer1Graphs}>RAM A   - </a>
                    <a onClick={this.displayServer2Graphs}> -   CPU A</a>
                </div>

                <div class="data-card">
                    { this.state.componentShown === 11 && <CanvasJSChartRAM options = {optionsRAM} onRef={ref => this.chartRAM = ref}/> }
                    { this.state.componentShown === 21 && <CanvasJSChartCPU options = {optionsCPU} onRef={ref => this.chartCPU = ref}/> }
                </div>
            </div>
        );
    }
}
export default App;
