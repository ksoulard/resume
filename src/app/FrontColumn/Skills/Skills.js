import React, { Component } from 'react'
import { Radar } from 'react-chartjs-2'
import './Skills.css'
import Heading from '../../../components/Heading/Heading'

const data = {
    labels: ['Mobile', 'Web', 'Security', 'Unix', 'Algo & AI', 'Graphics', 'imperative programming', 'network & sysadmin', 'POO'],
    datasets: [
      {
        backgroundColor: "rgba(129, 55, 114, 0.7)",
        pointBackgroundColor: "rgba(129, 55, 114, 1)",
        hoverBorderColor : "#fff",
        fillColor: "rgba(255,0,0,0.3)",
        strokeColor: "rgba(255,0,0,1)",
        pointColor: "rgba(255,0,0,1)",
        pointStrokeColor: "#fff",
        pointHighlightStroke: "rgba(255,0,0,1)",
        data: [30, 40, 60, 90, 70, 40, 85, 80, 70]
      },
    ],
    };
const options = {
    responsive: true,
    legend: {
        display: false,
      },
    scale: {
            ticks: {
                beginAtZero:true,
                min: 0,
                max: 100,
                display: false
            },
        reverse: false,
        gridLines: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
        angleLines: {
          color: 'rgba(255, 255, 255, 0.5)'
        }
      }
};


class Skills extends Component {
    render () {
        return (
            <div className="col-12 col-md-6 skills-wrapper">
                <div className="row">
                        <Heading title= { 'Skills' } />
                    <div className="col-12 chart">
                        <Radar data={ data } options={ options } />
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills