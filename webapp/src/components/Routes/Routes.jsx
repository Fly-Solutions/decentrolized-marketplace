import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { AtlasPage } from '../AtlasPage'
import { locations } from '../../modules/routing/locations'
import { BrowsePage } from '../BrowsePage'
import { AccountPage } from '../AccountPage'
import { SignInPage } from '../SignInPage'
import { SettingsPage } from '../SettingsPage'
import { NFTPage } from '../NFTPage'
import { SellPage } from '../SellPage'
import { BuyPage } from '../BuyPage'
import { CancelSalePage } from '../CancelSalePage'
import { TransferPage } from '../TransferPage'
import { ActivityPage } from '../ActivityPage'
import { HomePage } from '../HomePage'

const Routes = () => {
  return (
    <Switch>
      <Route exact path={locations.atlas()} component={AtlasPage} />
      <Route exact path={locations.browse()} component={BrowsePage} />
      <Route exact path={locations.currentAccount()} component={AccountPage} />
      <Route exact path={locations.account()} component={AccountPage} />
      <Route exact path={locations.signIn()} component={SignInPage} />
      <Route exact path={locations.sell()} component={SellPage} />
      <Route exact path={locations.buy()} component={BuyPage} />
      <Route exact path={locations.cancel()} component={CancelSalePage} />
      <Route exact path={locations.transfer()} component={TransferPage} />
      <Route exact path={locations.ntf()} component={NFTPage} />
      <Route exact path={locations.settings()} component={SettingsPage} />
      <Route exact path={locations.activity()} component={ActivityPage} />
      <Route exact path={locations.root()} component={HomePage} />
      <Redirect to={locations.root()} />
    </Switch>
  )
}

export default Routes
