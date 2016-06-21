import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { Modal, Button } from "react-bootstrap"

class SplashPage extends React.Component {

render(){
  let {showJournalism, toggleJournalism} = this.props
  return(
    <div>
        <img style={{position: 'fixed', zIndex: '-1', height:"100%", width:"100%"}} src='../../sweet_onions.jpg'/>
        <div className="col-md-offset-2 col-md-8" style={{padding: "1em", border: "5px white solid", borderBottomStyle: "hidden", height: "35%", borderRadius: "3px", marginTop: "5%", zIndex: '5'}}>
          <img style={{marginLeft:"5%"}} src="../../CC-logo-wht.png" alt="CropCompass logo" width="300" height="150" />
        </div>
        <div className="col-md-offset-2 col-md-8" style={{height: "10em", borderRadius: "3px", marginBottom: "3%", zIndex: '5'}}>
        <p style={{fontSize: "1.5em", color: 'white', textDecoration: 'none !important'}}>

<span style={{marginBottom: "1em", fontSize: "1.7em", marginTop: "-1px" }}>The Pacific Northwest is one of the most rich biospheres in the world.</span>
<br/>
We're using open data to bring transparency to the factors that shape our food system so we can understand more about what we grow in Oregon, what we sell, and why.
</p>

        </div>
        <div className="col-md-offset-2 col-md-8" style={{padding: "1em", border: "5px white solid", borderTopStyle: "hidden",  height: "35%", borderRadius: "3px", zIndex: '5', textAlign: "center"}}>
          <div className="col-md-6">
                <div className="col-md-offset-2 col-md-7" style={{minHeight: "100px", marginBottom: "5%", padding: "10px", border: "2px white solid", borderRadius: "3px", height: "15%", opacity: ".9", background:"#A1C02A"}}>
                <span onClick={toggleJournalism}><a><p style={{fontSize: "1.7em", color: 'white', textDecoration: 'none !important'}}>
                READ A HOMEGROWN STORY</p></a></span>
                </div>
          </div>
          <div className="col-md-6">
                <div className="col-md-offset-2 col-md-7" style={{minHeight: "100px", marginBottom: "5%", padding: "10px", border: "2px white solid", borderRadius: "3px", height: "15%", opacity: ".9", background:"#A1C02A"}}>
                <span> <Link to='data'>
                <p style={{fontSize: "1.7em", color: 'white', textDecoration: 'none !important'}}>DIG INTO THE DATA</p>
                </Link></span>
                </div>
          </div>
        </div>


        				<Modal show={showJournalism} bsSize="large" aria-labelledby="contained-modal-title-lg">
        			<Modal.Header>
        				<Modal.Title id="contained-modal-title-lg"><h2>Farm-to-Table. If only it were that simple.</h2>
</Modal.Title>
        			</Modal.Header>
        			<Modal.Body>


              <p>The journey our food takes from where it's grown to where it's consumed can be long and complex -- and difficult for consumers to unearth. This is no longer good enough. Consumers increasingly demand transparency.1 We want to know not just where our food is grown, but how. Not just how it's processed, but by whom. Behind this demand is a growing interest in real food, grown responsibly, and distributed locally. </p>

              <p>This push for transparency has the potential to upend the way food systems work. One opportunity ripe for such disruption is in the middle of the market: regional, differentiated, mid-sized producers.2</p>

              <p>Over time, the rich, diverse, and fertile lands of the Pacific Northwest has moved toward commodity crops.3 But champions of a different model are emerging. Jeff Harvey, CEO of Burgerville states, “as consumers we’ll end up with less choice and potentially less healthy food” if we continue to grow for a commodity market. But Harvey’s vision of Oregon Agriculture remains positive. Because in his experience, with data and greater transparency the solutions that support a regional food system will become evident.</p>

              <p>The middle market strategy requires intelligence -- for producers and consumers -- about what we grow, where, why, how, and where new opportunities lie. That's where HackOregon's Crop Compass comes in.</p>

              <p>Although much remains to be done, our aim is to empower decision makers at all levels by making agricultural data about crops, yields, and patterns easy to understand, and actionable -- for the first time. We think this matters and suspect you will too.</p>

              <span onClick={toggleJournalism}><Link to='data'>Dig into the data</Link></span>

              <h6>
              1(source: “A Clear View of Transparency and How it Builds Trust” CFI 2015 Report http://www.foodintegrity.org/)
              2 (source: Capital Press, http://www.capitalpress.com/Oregon/20150630/reit-purchases-6000-acres-of-willamette-valley-farmland)
              3. 4 (source: Crop Compass interviews, May 2016)
              </h6>

        			</Modal.Body>
        			<Modal.Footer>
        				<Button bsSize="large success" onClick={toggleJournalism}>Close</Button>

        			</Modal.Footer>
        		</Modal>



    </div>
    )
  }
}


const mapStateToProps = (state) => {
	    return {
        showJournalism: state.showJournalism
        }
}


const toggleJournalism = () => {
  return {type: 'TOGGLE_JOURNALISM'}
}
export default connect(mapStateToProps,
        {toggleJournalism})(SplashPage)
