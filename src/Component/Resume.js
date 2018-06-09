import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import './Contact.css';
import "../App.css";

class Resume extends Component {

    render(){
        return(
            <div>
              <Grid>

                  <Cell col={4}>
                     <div style={{textAlign: 'center'}}>
                     <img src="../assets/dp.png" alt="Avater" style={{height: '200px', borderRadius: '100px'}}/>
                     </div>
                     <h3 style={{paddingTop: '2em'}}>Amit Pathak</h3>
                     <h4 style={{color: 'grey', fontWeight: 'bold'}}>Programmer</h4>
                     <hr style={{border: '3px solid red', width: '50%'}}/>
                     <p className="para">I am working in Infosys as a React developer having total 2.4 years of experience 
                        in which 1.4 years of experience in frontend development. 
                     </p>
                     <hr style={{border: '3px solid red', width: '50%'}}/>  
                     <h5 style={{fontWeight: 'bold'}}>Address</h5>
                     <p className="para">Electronic City, phase 1, Bangalore</p>
                     <h5 style={{fontWeight: 'bold'}}>Phone</h5>
                     <p className="para">+91- 9108525765</p>
                     <h5 style={{fontWeight: 'bold'}}>E-Mail</h5>
                     <p className="para">amit.pathak321@gmail.com</p>
                     <h5 style={{fontWeight: 'bold'}}>My Web</h5>
                     <p className="para">https://console.firebase.google.com/project/amit-portfolioo/database</p>
                     <hr style={{border: '3px solid red', width: '50%'}}/>  
                     

                     
                  </Cell>

                  <Cell col={8} style={{backgroundColor: 'black', border: '2px solid red'}}>
                    <h3 className="h3">Education</h3>
                    <Education />
                    <h3 className="h3">Experience</h3>                    
                    <Experience />
                  </Cell>

              </Grid>
            </div>
        )
    }
}

export default Resume;