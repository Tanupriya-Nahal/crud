import { Redirect, Route, Switch } from 'react-router-dom';
import Buy from '../pages/buy/buy';
import Sell from '../pages/sell/sell';
import Dashboard from '../pages/dashboard/dashboard';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import '../components/header/header.css'

const Routes = () =>{
    return (
            <div className="container">
                <Header />
                    <Switch>
                        <Route path="/dashboard" component={Dashboard} exact={true}  />
                        <Route path="/buy" component={Buy} exact={true}  />
                        <Route path="/sell" component={Sell} exact={false} />
                        <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
                    </Switch>
                <Footer />
            </div>
    );
}

export default Routes;