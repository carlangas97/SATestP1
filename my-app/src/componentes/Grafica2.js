import React, {Component} from 'react';
import {Line, Pie} from 'react-chartjs-2';
import CanvasJSReact from '../assets/canvasjs.react';

var CanvasJSChartRAM = CanvasJSReact.CanvasJSChart;
var dataPointsRAMb = [];
var CanvasJSChartCPU = CanvasJSReact.CanvasJSChart;
var dataPointsCPUb = [];

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

            fetch('http://34.123.195.45:5000/datos1')
                .then(res => res.json())
                .then((data) => {
                    let tempData = JSON.parse(data)
                    dataPointsRAMb.push({y: Number(tempData['used'])})
                })
                .catch(console.log)
            fetch('http://34.123.195.45:5000/datos2')
                .then(res => res.json())
                .then((data) => {
                    let tempData = JSON.parse(data)
                    dataPointsCPUb.push({y: Number(tempData['used']) + 0.00005})
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
                text: "RAM SERVIDOR B (MB)"
            },
            data: [
                {
                    type: "area",
                    name: "RAM Servidor B",
                    showInLegend: true,
                    dataPoints: dataPointsRAMb
                }
            ]
        }

        const optionsCPU = {
            animationEnabled: true,
            title:{
                text: "CPU SERVIDOR B"
            },
            data: [
                {
                    type: "area",
                    name: "CPU Servidor B",
                    showInLegend: true,
                    dataPoints: dataPointsCPUb
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
                    <a onClick={this.displayServer1Graphs}>RAM B   - </a>
                    <a onClick={this.displayServer2Graphs}> -   CPU B</a>
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
