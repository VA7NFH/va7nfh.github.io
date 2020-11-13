import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Sparrow from './pages/Sparrow'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import data from './data'

const theme = createMuiTheme({
  typography: {
    fontFamily: "inherit"
  },
})

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header data={data['header']}/>
        <div style={{marginTop: '64px', minHeight: "calc(100vh - 128px)"}}>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/about' render={(props) => (
              <About {...props} data={data['about']}/>
            )} />
            <Route path='/engines/sparrow' component={Sparrow} />
            <Route component={Error} />
          </Switch>
        </div>
        <Footer data={data['footer']}/>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
