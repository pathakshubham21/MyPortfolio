import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import "../App.css";

class LandingPage extends Component {

    render(){
        return(
            <div style= {{width: '100%', margin: 'auto'}}>
              <Grid className="landing-grid">
                  <Cell col={12}>
                  <img
                  src="../../assets/dp.png"
                  alt="AMIT"
                  className="amit-img"/>

                  <div className="banner-text">
                     <h1>Front End Developer</h1>
                     <hr />
                     <p> JAVASCIPT | REACT | REDUX | NODE | MongoDB | Bootstrap | React-MDL | EXPRESS</p>
                     <div className="social-links">

                     <a href="https://www.linkedin.com/in/amit-pathak-bb627bba/" rel="noopener noreferrer" target="_blank"> 
                      <i className="fa fa-linkedin-square" aria_hidden="true"/>
                     </a>
                     <a href="https://github.com/121371" rel="noopener noreferrer" target="_blank"> 
                      <i className="fa fa-github-square" aria_hidden="true"/>
                     </a>
                     <a href="https://www.facebook.com/amit.pathak.35762241" rel="noopener noreferrer" target="_blank"> 
                      <i className="fa fa-facebook-square" aria_hidden="true"/>
                     </a>

                     </div>
                  </div>
                  </Cell>
              </Grid>
              
            </div>
        )
    }
}

export default LandingPage;