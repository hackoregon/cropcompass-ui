import React from 'react'
import { IndexLink, Link } from 'react-router'
import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'
import DonutD3 from 'components/VisualizationsD3/DonutD3/TryDonut'
import Words from '../Words/Words'

export const TopCrops = (props) => {
  let revenue = ""
  let listOfCropsHere = []
  let countyRevenueObject = {}
  let listOfCropsWithRevenue =[]
  let listOfThisYearCropsWithRevenue = []
  let selectedCropRevenueData = ''
  if (props.revenue.data !== undefined){revenue = props.revenue
    countyRevenueObject = revenue.data[0][props.selectedCounty]
    for (let property in countyRevenueObject) {
    if (countyRevenueObject.hasOwnProperty(property)) {
    listOfCropsHere.push(property)
    }
  }

  for(let i=0; i<listOfCropsHere.length;i++){
    listOfCropsWithRevenue.push(countyRevenueObject[listOfCropsHere[i]])

    listOfThisYearCropsWithRevenue = listOfCropsWithRevenue.map( (d, i) => {
      if(d[props.selectedYear] !== undefined){
        return {commodity: listOfCropsHere[i], cropRevenue: d[props.selectedYear]['Revenue']}
      }
    })
  }
}
listOfThisYearCropsWithRevenue = listOfThisYearCropsWithRevenue.sort( (a, b) => {
  return b.cropRevenue - a.cropRevenue
})

let revenueTop5 = listOfThisYearCropsWithRevenue.slice(0,5)


if (listOfThisYearCropsWithRevenue.length > 2) {
  console.log(listOfThisYearCropsWithRevenue)
  selectedCropRevenueData = listOfThisYearCropsWithRevenue.filter( (d) => {
        if (d !== undefined){
      return d.commodity === props.selectedCrop
    }
})
}

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

  let selectedCropAcreData = ''
  let selectedCropHarvestData = ''
  if (props.countyData.commoditiesByAcre !== undefined){ selectedCropAcreData = props.countyData.commoditiesByAcre.filter( (d) => {
    return d.commodity === props.selectedCrop
  })
}

  if (props.countyData.commoditiesByHarvestThisYear !== undefined){selectedCropHarvestData = props.countyData.commoditiesByHarvestThisYear.filter( (d) => {
    return d.commodity === props.selectedCrop
  })
}

  if(selectedCropRevenueData !== undefined){selectedCropRevenueData = selectedCropRevenueData[0]}
  if(selectedCropHarvestData !== undefined){selectedCropHarvestData = selectedCropHarvestData[0]}
  if(selectedCropAcreData !== undefined){selectedCropAcreData = selectedCropAcreData[0]}

  let commoditiesByAcre = props.countyData.commoditiesByAcre.slice(0,7)
  let commoditiesByHarvestThisYear = props.countyData.commoditiesByHarvestThisYear.slice(0,7)
    return (
        <div className="row" style={paddingBorders}>
          <div className="row">
            <h1>{props.selectedCounty} Top Crops</h1>
        </div>
        <div className="col-md-12" style={infoRow}>
              <div className="col-md-6">
              <HorizontalBarChart matchingCrop={selectedCropRevenueData} countyName={props.selectedCounty} countyData={revenueTop5} xMetric="cropRevenue" chartTitle={`Top 5 crops by revenue in thousands of dollars in ${props.selectedYear}`}/>
              </div>
              <div className="col-md-6">
              <Words title="Revenue vs Harvested Acres">
              Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.
              <br/>
              Oregon farms earn an average of $1,882 per acre. The graphs below show top 5 crops by revenue and acres harvested, with selected crop at the bottom for comparison.
              </Words>
              </div>
          </div>
      <div className="col-md-12" style={infoRow}>
            <div className="col-md-6">
            <HorizontalBarChart matchingCrop={selectedCropAcreData} countyName={props.selectedCounty} countyData={commoditiesByAcre} xMetric="acres" chartTitle={`Top crops by acreage in 2012`}/>
            </div>
            <div className="col-md-6">
            <HorizontalBarChart matchingCrop={selectedCropHarvestData} countyName={props.selectedCounty} countyData={commoditiesByHarvestThisYear} xMetric="harvested_acres" chartTitle={`Top crops by harvested acres in ${props.selectedYear}`}/>
            </div>
        </div>
      </div>
    )
  }


export default TopCrops
