import React from 'react'
import { IndexLink, Link } from 'react-router'
import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'
import CuteButton from '../CuteButton/CuteButton'
import DonutD3 from 'components/VisualizationsD3/DonutD3/TryDonut'
import Words from '../Words/Words'

export const CropDiversity = (props) => {
  let infoRow = {
    background: "white",
    borderRadius: "5px",
    marginTop: "30px",
    padding: "20px",
    boxShadow: "1px 1px 25px -4px rgba(140,143,140,.5)",
    transition: "boxShadow .4s ease-in-out"
  }
  let paddingBorders = {
    borderBottom: "solid 1px #523c03",
    paddingBottom: "50px",
    paddingTop: "25px",
    marginBottom: "20px"
  }
  let listStyles = {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    padding: "0"
  }
  let listItemStyles = {
    margin: "10px 20px"
  }
  let listParagraph = {
    margin: "0",
    marginTop: "5px"
  }
  let listNumber = {
    border: "solid 2px #60a81d",
    color: "#60a81d",
    padding: "20px 30px",
    fontSize: "20px",
    marginTop: "5px",
    borderRadius: "5px"
  }
  let middleNumber = {
    border: "solid 2px #60a81d",
    backgroundColor: "#60a81d",
    color: "#fff",
    padding: "20px 30px",
    fontSize: "20px",
    marginTop: "5px",
    borderRadius: "5px"
  }

  let thisCountyLevels = props.countyList.filter( (d) => {
    return d.county === props.selectedCounty
  })
  let diversityLevel = ""
  if(thisCountyLevels.length > 0) { diversityLevel = thisCountyLevels[0].cropDiversity}

  let thisCountyDiversity = ''
  let averageScore =''
  if (props.diversityList.data !== undefined){
    thisCountyDiversity = props.diversityList.data[0][props.selectedCounty].toFixed(2)
    averageScore = props.diversityList.average_diversity_score.toFixed(2)
 }

    return (

        <div className="row" style={paddingBorders}>
          <div className="row">
          <h1>Crop Diversity in {props.selectedCounty} in {props.selectedYear}</h1>
          <h4>Generally, crop diversity is {diversityLevel} here compared to other counties in Oregon.</h4>
          </div>
          <br/>
          <div className="row" style={infoRow}>
            <div className="col-md-7">
              <Words title="Why does diversity matter?">
              From the Union of Concerned Scientists:
              <br/>

              "Growing a greater diversity of crops would allow farmers to reap the environmental and energy advantages of longer, more complex crop rotations. Recent research has demonstrated that multi-year, multi-crop rotations produce high yields for each crop in the rotation, control pests and weeds with less reliance on chemical pesticides, and enhance soil fertility with less need for synthetic fertilizers."
                <br/>
              This graph shows “effective number of crops” grown in a county. It takes into account not just the number of crops grown, but also the proportion of land for each crop. If most of the farmland is a monoculture, than the effective number of crops will be one. Higher numbers indicate more diversity of crops planted on the farmed land in the selected region.              </Words>
            </div>
            <div className="col-md-5">
                <h3 style={{marginLeft: "2em"}}>Crop Diversity in {props.selectedCounty}</h3>
                <div className="text-center">
                  <ul style={listStyles}>
                    <li style={listItemStyles}>
                      <p style={listNumber}>{averageScore}</p>
                      <p style={listParagraph}>Average</p>
                    </li>
                    <li style={listItemStyles}>
                      <p style={middleNumber}>{thisCountyDiversity}</p>
                      <p style={listParagraph}>{props.selectedCounty}</p>
                    </li>
                    <li style={listItemStyles}>
                      <p style={listNumber}>3.54</p>
                      <p style={listParagraph}>Highest</p>
                      <p>(Washington County)</p>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
    )
}

export default CropDiversity
