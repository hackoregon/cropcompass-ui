import React from 'react'
import ReactDOM from 'react-dom'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createStore, applyMiddleware } from 'redux'
import AppContainer from './containers/AppContainer'
import CropCompassReducer from './Reducers/rootReducer'
import thunk from 'redux-thunk';


// ========================================================
// Browser History Setup
// ========================================================


// ========================================================
// Store and History Instantiation
// ========================================================
// Create redux store and sync with react-router-redux. We have installed the
// react-router-redux reducer under the routerKey "router" in src/routes/index.js,
// so we need to provide a custom `selectLocationState` to inform
// react-router-redux of its location.

// ========================================================
// Browser History Setup
// ========================================================
const browserHistory = useRouterHistory(createBrowserHistory)({
  basename: __BASENAME__
})

// ========================================================
// Store and History Instantiation
// ========================================================
// Create redux store and sync with react-router-redux. We have installed the
// react-router-redux reducer under the routerKey "router" in src/routes/index.js,
// so we need to provide a custom `selectLocationState` to inform
// react-router-redux of its location.
let initialState = {
    countyName: {name: "Multnomah", fips: "41051"},
    cropName: "Wheat",
    cropList: [],
    countyList: [],
    sortMapBy: "numberOfFarms",
    showJournalism: false,
    exportsHistory: [],
    selectedYear: "2010",
    countyData: {subsidies: [], commoditiesByAcre: [], commoditiesByHarvestHistory: [], commoditiesByHarvestThisYear: []},
    cropImageName: "hazelnut",
    cycleFlag: false,
    exportCrop: "",
    showSources: false,
    top5Exports: [],
    diversityList: [],
    revenue: [],
    showMenus: {cropMenu: false, countyMenu: false},
    allPossibleCrops: [],
    showHugeCropList: false,
}

let createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
let store = createStoreWithMiddleware(
											CropCompassReducer,
											initialState,
                      window.devToolsExtension ? window.devToolsExtension() : f => f
                      )

// ========================================================
// Developer Tools Setup
// ========================================================
if (__DEBUG__) {
  if (window.devToolsExtension) {
    window.devToolsExtension.open()
  }
}

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

let render = (routerKey = null) => {
  const routes = require('./routes/index').default(store)

  ReactDOM.render(
    <AppContainer
      store={store}
    />,
    MOUNT_NODE
  )
}

// Enable HMR and catch runtime errors in RedBox
// This code is excluded from production bundle
if (__DEV__ && module.hot) {
  const renderApp = render
  const renderError = (error) => {
    const RedBox = require('redbox-react')

    ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
  }
  render = () => {
    try {
      renderApp(Math.random())
    } catch (error) {
      renderError(error)
    }
  }
  module.hot.accept(['./routes/index'], () => render())
}

// ========================================================
// Go!
// ========================================================
render()
