import {Switch, Route} from 'react-router-dom';
import { tabs } from '../../helpers/tabs';
import HomePage from '../../pages/HomePage';
import PageNotFound from '../../pages/PageNotFound';

function NavigationRouteComp({set,user}){
     //React Router Dom 
     //this Component will display the "Content" inside of each page we choose
     return <Switch>
           <Route exact path="/" component={HomePage}></Route> {/* //load the home page */}
           {tabs.map((tab, index)=>  /* loads the rest of the pages according to menu */
             <Route key={index} path={tab.href}>
                   {     
                 <tab.page set={set} user={user}></tab.page>  
                   }
            </Route>
            )}
            <Route component={PageNotFound}></Route> {/* load the 404 page if the url is wrong */}
      </Switch>;
      
}

export default NavigationRouteComp;

               