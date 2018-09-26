import React from 'react';
import { Route,Switch} from 'react-router-dom';
import Counter from '../login';

  const AppRoute = () =>(
    <div>
        <Switch> 
            <Route path='/' exact component={Counter} />
            <Route path='/counter' exact component={Counter} />
        </Switch>
    </div>
);
export default AppRoute;