import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'
import './Interests.css'
import Heading from '../../../components/Heading/Heading'

const data = {
    labels: ['System', 'Mobile', 'Web', 'Security', 'Unix', 'Algo & AI', 'Graphics'],
    datasets: [
      {
        backgroundColor: "rgba(129, 55, 114, 0.7)",
        pointBackgroundColor: "rgba(6, 47, 79, 1)",
        hoverBorderColor : "#fff",
        fillColor: "rgba(255,0,0,0.3)",
        strokeColor: "rgba(255,0,0,1)",
        pointColor: "rgba(255,0,0,1)",
        pointStrokeColor: "#fff",
        pointHighlightStroke: "rgba(255,0,0,1)",
        data: [100, 70, 35, 95, 100, 70, 50, 0]
      },
    ]
  };

  const options = {
    beginAtZero:true,
    elements: {
        rectangle: {
          borderWidth: 2,
          borderColor: "rgba(129, 55, 114, 1)",
        }
    },
    responsive: true,
    legend: {
        display: false,
      },
      gridLines: {
        color: 'rgba(255, 255, 255, 0.2)',
      },
      angleLines: {
      color: 'rgba(255, 255, 255, 0.5)'
      }
    }

class Interests extends Component {
    render () {
        return (
            <div className="col-12 col-md-6 interests-wrapper">
                <div className="row">
                    <Heading title={ 'Interests' } />
                    <div className="col-12 chart">
                        <Bar data={ data } options={ options }/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Interests