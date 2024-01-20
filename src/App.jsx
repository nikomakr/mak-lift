import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import search from './pages/search/search';
import boom from './components/boomCalendar/boomCalendar';
import scissors from './components/scissorsCalendar/scissorsCalendar';
import spider from './components/spiderCalendar/spiderCalendar';
import mount from './components/mountCalendar/mountCalendar';
import boomCalendar from './components/BoomCalendar/boomCalendar';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/pages/search" component={consolidatedCalendar} />
          <Route path="/pages/boom" component={boomCalendar} />
          <Route path="/pages/scissors" component={scissorsCalendar} />
          <Route path="/pages/spider" component={spiderCalendar} />
          <Route path="/pages/mount" component={mountCalendar} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
