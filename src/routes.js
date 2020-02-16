import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard'
import Wizard1 from './Components/Step1/Wizard1'
import Wizard2 from './Components/Step2/Wizard2'
import Wizard3 from './Components/Step3/Wizard3'

export default <Switch>
    <Route exact path='/' component={Dashboard}/>
    <Route path='/wizard/step1' component={Wizard1}/>
    <Route path='/wizard/step2' component={Wizard2}/>
    <Route path='/wizard/step3' component={Wizard3}/>
</Switch>