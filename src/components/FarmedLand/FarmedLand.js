import React from 'react'
import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'
import { IndexLink, Link } from 'react-router'
import DonutD3 from 'components/VisualizationsD3/DonutD3/TryDonut'
import Words from '../Words/Words'

export const FarmedLand = (props) => {
  let totalAcresInThisCounty = ""
  let acresOfThisCropInThisCounty = ""

  if (props.countyData.length > 0) {totalAcresInThisCounty = props.countyData.map( (d) => {
    return d.harvested_acres
  }).reduce( (a,b) =>{
    return a + b
  })
}
if (props.countyData.length > 0) {let thisCropInThisCounty = props.countyData.filter( (d) =>{
  return props.selectedCrop === d.commodity
})

if(thisCropInThisCounty[0] !==undefined){
acresOfThisCropInThisCounty = thisCropInThisCounty[0].harvested_acres}
}
let dataset = []
if (totalAcresInThisCounty > 0){ dataset = [{commodity: 'total', harvested_acres: totalAcresInThisCounty}, {commodity: `${props.selectedCrop}`, harvested_acres: acresOfThisCropInThisCounty}]}
  let mainStyle = {
    marginTop: "50px",
    borderTop: "solid 1px #523c03",
    paddingTop: "50px",
    paddingBottom: "50px",
    marginTop: "175px"
  }
  let paddingBorders = {
    borderBottom: "solid 1px #523c03",
    paddingBottom: "50px",
    paddingTop: "25px",
    marginBottom: "20px"
  }
  let infoRow = {
    background: "white",
    borderRadius: "5px",
    marginTop: "30px",
    padding: "20px",
    boxShadow: "1px 1px 25px -4px rgba(140,143,140,.5)",
    transition: "boxShadow .4s ease-in-out"
  }
    return (
      <div className="row" style={paddingBorders}>
      <div style={mainStyle} className="row">
      <div className="row">
        <h1>{props.selectedCounty} County Farms</h1>
      </div>
        <br/>
          <div className="row">
            <div className="col-md-6">
            <DonutD3 dataset={dataset} width="400" height="200"/>
            </div>
            <div className="col-md-6 text-center">
            <h3>Of {totalAcresInThisCounty} acres of harvested crops</h3>
            <h3>in {props.selectedCounty} in {props.selectedYear} </h3>
            <h3> {acresOfThisCropInThisCounty} were {props.selectedCrop}</h3>

            </div>
          </div>

      <div className="col-md-12" style={infoRow}>
            <Words title={`${props.selectedCounty} Agriculture`}>
            <p>
              Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.
            </p>
            </Words>
          </div>

        </div>

      </div>
    )
  }

export default FarmedLand
