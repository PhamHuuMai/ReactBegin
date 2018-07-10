import React, { Component } from 'react';
import Footer from './partials/Footer';
import LeftMenu from './partials/LeftMenu';
import Center from './partials/Center';

class App extends Component {

  render() {
    return (
      <div>
        <div class="container-fluid">
          <div class="row content">
            <LeftMenu></LeftMenu>
            <Center></Center>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
