import React from 'react'
import { IndexLink, Link } from 'react-router'
import CuteButton from '../CuteButton/CuteButton'
import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'
import DonutD3 from 'components/VisualizationsD3/DonutD3/TryDonut'
import LineChartD3 from 'components/VisualizationsD3/LineChartD3/LineChartD3'
import Words from '../Words/Words'
import { Modal, Button } from "react-bootstrap"


export default class ImportExport extends React.Component{

  handleClick(crop){
    this.props.changeExportChart(crop)
  }
    render(){
    let infoRow = {
      background: "white",
      borderRadius: "5px",
      marginTop: "30px",
      padding: "20px",
    }
    let paddingBorders = {
      borderBottom: "solid 1px #523c03",
      paddingBottom: "50px",
      paddingTop: "25px",
      marginBottom: "20px"
    }
    let allCropNamesEverNodes = this.props.allPossibleCrops.map( (crop,index) => {
      return(
        <div onClick={this.handleClick.bind(this, crop)} style={{display: "inline-block", cursor: 'pointer', padding: "5px", margin: "5px", background: "#87B725", border: "1px solid #E1D837", borderRadius: "5px"}} key={crop}>{crop}</div>
      )
    })
    let {handleShowHugeCropList, handleShowSources, showSources, showHugeCropList} = this.props
    let hiddenStyle = {display: 'none'}
    let shownStyle = {display: 'block'}
    let top5Exports = this.props.top5Exports.map( (d,i) => {
      return {acres: d[0], commodity: d[1]}
    })
    return (
      <div className="row" style={paddingBorders}>
        <div className="row">
            <h1>Oregon Exports</h1>
        </div>
        <div style={infoRow} className="row">
        <div className="col-md-9">
            <div className="col-md-12">
            <HorizontalBarChart countyName={this.props.selectedCounty} countyData={top5Exports} xMetric="acres" chartTitle={`Top 5 crop exports in Oregon in 2016`}/>
            </div>
          <div className="col-md-9">
            <div className="row">
              <LineChartD3 selectedCounty={this.props.selectedCounty} xMetric="year" yMetric="export" dataset={this.props.exportsHistory} title={this.props.exportCrop.length > 0 ? `Exports of ${this.props.exportCrop} by year in Oregon` : 'Overall exports by year in Oregon'} selectedCrop={this.props.selectedCrop} countyData={this.props.countyData}/>

            </div>
          </div>
        </div>

          <div className="col-md-3">
            <h3>Imports & Exports</h3>
              <p>Oregon exports agricultural products all over the world. 40% of products grown in Oregon are exported internationally. This graph shows the top 5 commodity agricultural products exported from Oregon.</p>
              <p>Oregon exports agricultural products all over the world. 40% of products grown in Oregon are exported internationally. This graph shows the top 5 commodity agricultural products exported from Oregon.</p>
              <p>Oregon exports agricultural products all over the world. 40% of products grown in Oregon are exported internationally. This graph shows the top 5 commodity agricultural products exported from Oregon.</p>

              <div onClick={handleShowHugeCropList.bind(this)}> Click here to <span style={{cursor: 'pointer', fontSize:"2em"}}>{showHugeCropList ? 'hide' : 'see'}</span> our huge, clickable list of all {this.props.allPossibleCrops.length} Oregon exports</div>
              <div onClick={handleShowSources.bind(this)}> Or click to learn more about data sources for this project.</div>

          </div>
          <div className="row" style={showHugeCropList ? shownStyle : hiddenStyle}>
          {allCropNamesEverNodes}
          </div>
      </div>
      <Modal show={showSources} bsSize="large" aria-labelledby="contained-modal-title-lg">
    <Modal.Header>
      <Modal.Title id="contained-modal-title-lg">CropCompass sources</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    Data Types and Sources

    Top Commodities:
    Choose "# Acres" or "# Animals" to view the top crops by area of land harvested or top livestock raised by number of animals, or selected county. Front end
    Data source: [NASS], AgCensus, year 2012

<br/>
    Effective number of crops
    A measure of crop diversity in a county that takes into account not just the number of crops grown and the proportion of land used for each crop. If most of the farmland is a monoculture, then the Effective Number of crops will be one. Higher numbers indicate more diversity of crops planted on the farmed land in the selected region. See reference for definition.
    Data source: [NASS], AgCensus, year 2012
    Reference: Aguilar

    <br/>
    Farmed Land
    Farmed Land represents the proportion of land within the designated region under agricultural use. This data may be displayed statewide or by crop and by county.
    Data source: [NASS], AgCensus, year 2012

    <br/>
    Revenue
    This category represents the total revenue from sales of agricultural commodities or a selected commodity, as tracked by Oregon Agriculture Information Network.
    Data source: [OAIN], year 2012

    <br/>
    Subsidies:
    This category represents the dollar value of subsidies received by farmers in the selected region, for the selected crop.
    Data source: [Subsidies], year 2012

    <br/>
    Number of Farms:
    The number of farms growing the selected crop compared to the total number of farms in the selected region. Percentages may also be used to represent the number of farms growing a crop in a selected region as a percentage of all farms growing that crop statewide.
    Data source: [NASS]

    <br/>
    Import/Export by Product: The dollar value of a given crop imported internationally into Oregon and the value exported internationally from Oregon. Data Source:  [Census]

    <br/>
    Source Links:

    <br/>
    [Census] data refers to data acquired from: <a href="https://usatrade.census.gov/">The United States Census</a>

    <br/>
    [NASS] data refers to data acquired from: <a href="http://quickstats.nass.usda.gov/"> The National Agriculture Statistics Service Quickstats (downloaded September 3, 2015)</a>

    <br/>
    [OAIN] data refers to data acquired from:  <a href="http://oain.oregonstate.edu/">The Oregon Agricultural Information Network (downloaded August 23, 2015)</a>

    <br/>
    [Subsidies] data refers to data acquired from: <a href="http://farm.ewg.org/region.php?fips=41000">The Environmental Work Group (downloaded August 27, 2015)</a>
    </Modal.Body>
    <Modal.Footer>
      <Button bsSize="large" onClick={handleShowSources.bind(this)}>Close</Button>

    </Modal.Footer>
  </Modal>


      </div>
    )
  }
}
