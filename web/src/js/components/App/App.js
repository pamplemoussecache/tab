import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { MuiThemeProvider as V0MuiThemeProvider } from 'material-ui'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import defaultThemeLegacy from 'js/theme/default'
import withPageviewTracking from 'js/analytics/withPageviewTracking'
import { isInEuropeanUnion } from 'js/utils/client-location'
import {
  registerConsentCallback,
  saveConsentUpdateEventToLocalStorage,
  unregisterConsentCallback,
} from 'js/ads/consentManagement'
import DashboardView from 'js/components/Dashboard/DashboardView'
import AuthenticationView from 'js/components/Authentication/AuthenticationView'
import SettingsPageComponent from 'js/components/Settings/SettingsPageComponent'
import FirstTabView from 'js/components/Dashboard/FirstTabView'
import PostUninstallView from 'js/components/Dashboard/PostUninstallView'

const legacyMuiTheme = getMuiTheme(defaultThemeLegacy)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.consentChangeCallback = null
  }

  async componentDidMount() {
    var isEU
    try {
      isEU = await isInEuropeanUnion()
    } catch (e) {
      isEU = false
    }
    if (isEU) {
      this.consentChangeCallback = this.handleDataConsentDecision.bind(this)
      registerConsentCallback(this.consentChangeCallback)
    }
  }

  componentWillUnmount() {
    if (this.consentChangeCallback) {
      unregisterConsentCallback(this.consentChangeCallback)
    }
  }

  async handleDataConsentDecision() {
    // Store the consent data. We'll log it to the server with
    // the user's ID after the user authenticates.
    saveConsentUpdateEventToLocalStorage()
  }

  render() {
    // @material-ui-1-todo: remove legacy theme provider
    return (
      <V0MuiThemeProvider muiTheme={legacyMuiTheme}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            margin: 0,
            padding: 0,
            border: 'none',
          }}
        >
          <Switch>
            <Route exact path="/newtab/" component={DashboardView} />
            <Route path="/newtab/settings/" component={SettingsPageComponent} />
            <Route path="/newtab/account/" component={SettingsPageComponent} />
            <Route path="/newtab/profile/" component={SettingsPageComponent} />
            <Route exact path="/newtab/first-tab/" component={FirstTabView} />
            <Route
              exact
              path="/newtab/uninstalled/"
              component={PostUninstallView}
            />
            <Route path="/newtab/auth/" component={AuthenticationView} />
            <Redirect from="*" to="/newtab/" />
          </Switch>
        </div>
      </V0MuiThemeProvider>
    )
  }
}

export default withPageviewTracking(App)
