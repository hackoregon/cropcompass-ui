import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'
import { connect } from 'react-redux'

class Header extends React.Component {

    triggerToggleCycleFlag = () => {
      this.props.toggleCycleFlag()
    }

    triggerCropMenuShow = () => {
      this.props.handleShowCropMenu()
    }

    triggerCountyMenuShow = () => {
      this.props.handleShowCountyMenu()
    }

    componentWillReceiveProps(nextProps){
      let cycleThrough = this.props.cycleThrough
      let cropImageName = this.props.cropImageName
      if(nextProps.cycleFlag === true){
         cycleThrough(cropImageName)
      }
    }

    render(){
    let { cropImageName, cycleThrough, toggleCycleFlag, cycleFlag, selectedCounty, handleOffMenu, selectedYear } = this.props
    const cropName = this.props.cropName || ""
    return (
      <div>
        <header style={{zIndex: "6", height: "17%", minHeight:"100px", position: "fixed", justifyContent: "center", alignItems: "center"}} >
          <div className="logo" style={{flex: "2"}}>
            <Link to='/'>
              <img src="../../CC-logo.png" alt="CropCompass logo" width="160" height="80" />
            </Link>
          </div>

          <h3 style={{flex: "2"}}><strong>Viewing</strong>: {cropName} in {selectedCounty} in {selectedYear}</h3>
          <nav>
            <ul>
              <li  style={{cursor:'pointer'}}  onClick={this.triggerCountyMenuShow.bind(this)}><a>
                <img src="../../icons/crop-header-icons-off-white/location-iconx2.png" alt="Location Icon" width="23" height="30" style={{marginTop: "4px"}}/>
                <p style={{marginTop: "14px"}}>Choose County</p>
              </a></li>
              <li  style={{cursor:'pointer'}}  onClick={this.triggerCropMenuShow.bind(this)}><a>
                <img onMouseEnter={this.triggerToggleCycleFlag.bind(this)} onMouseLeave={this.triggerToggleCycleFlag.bind(this)}
                src={`../../icons/crop-header-icons-off-white/crop-${cropImageName}2x.png`}
                alt="Crop Icon" width="35" height="35"/>
                <p>Choose Crop</p>
              </a></li>

            </ul>
          </nav>
        </header>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
	    return {
        cropImageName: state.cropImageName,
        cycleFlag: state.cycleFlag,
        cropName: state.cropName
        }
}

const CHANGE_CROP_IMAGE = "CHANGE_CROP_IMAGE"
const TOGGLE_CYCLE_FLAG = "TOGGLE_CYCLE_FLAG"

const cycleThrough = (cropImageName) => {
	return {type: CHANGE_CROP_IMAGE, payload: cropImageName }
}

const toggleCycleFlag = () => {
	return {type: "TOGGLE_CYCLE_FLAG" }
}

export default connect(mapStateToProps, {cycleThrough, toggleCycleFlag})(Header)
