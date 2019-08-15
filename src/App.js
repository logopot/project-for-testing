import React, {Component, Fragment} from 'react';
import './scss/base.scss';
import {Header} from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import { Info } from './components/Info/Info';
import { Advertize } from './components/Advertize/Advertize';
import { Footer } from './components/Footer/Footer';
// import {Plan} from './components/Plan/Plan';


class App extends Component {
    render() {
        return(
            <Fragment>
              <Header />
                <Carousel />
                <Info />
                <Advertize />
                <Footer />
                {/* <Plan /> */}
            </Fragment>
        )
    }
}

export default App;