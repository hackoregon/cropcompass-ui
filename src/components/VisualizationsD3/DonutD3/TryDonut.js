import { default as React, PropTypes } from 'react';

export default class DonutD3 extends React.Component{
  render(){
    var dataset = this.props.dataset
    var width = this.props.width
    var height = this.props.height
    var radius = Math.min(width, height) / 2;
    var svg = d3.select("organicDonut")
    var arc = d3.svg.arc()
      .outerRadius(radius - (height * .03))
      .innerRadius(radius - (height * .17));
      var pie = d3.layout.pie()
        .sort(null)
        .value(function(d) {
          return d.harvested_acres;
        });

  let circleNodes = pie(dataset).map( (d, index) => {
    let arcCalc = arc(d)
    let colorValues = ["rgb(82,59,3)", "rgb(188, 202, 48)"]
    let pathStyle = {fill: colorValues[index]}

    return (

      <div key={d.harvested_acres + index} style={{textAlign: "center"}}>
        <svg class="organicDonut" width={width} height={height}>

        <text fontSize="20" x={width * .1} y={height * .25}>
        total acres:
          </text>

          <text fontSize="20" x={width * .1} y={height * .35}>
          {dataset[0].harvested_acres}
            </text>

          <text fontSize="20" x={width * .8} y={height * .25}>
              {dataset[1].commodity}
            </text>
          <text fontSize="20" x={width * .8} y={height * .35}>
                {dataset[1].harvested_acres} acres <br/>
            </text>
        <image xlinkHref="../../icons/leaf-brown3x.png" x={width * .4} y={width * .13} width={width * .23} height={height * .44}>
        </image>
            <g transform={`translate(${width/2},${height/2})`}>
              <g key={d.harvested_acres + index} className="arc">
                    <path key={d+index} d={arcCalc} style={pathStyle}>
                    </path>
              </g>
            </g>
        </svg>
      </div>




    )
  })

  let donutType = "organicDonut"
  return(
    <div className={donutType}>

    {circleNodes}

    </div>
  )
  }
}
