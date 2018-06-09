import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent, } from 'react-mdl';
import "./Contact.css";

class Contact extends Component {

    render(){
        return(
            <div className="contact-body">
              <Grid className="contact-grid" >
                  <Cell col={6} >
                    <h2 className="h2">AMIT PATHAK</h2>                   
                    <img className="img-tag"
                    src="../assets/dp.png"             
                    alt="AMIT"
                    />
                    <p className="para"> I am a passionate front end developer in Infosys having total 2.4 years of
                     experience in which 1.4 years in ReactJS development with Redux.
                     I am looking for a platform where I can enhance my skills.
                                                
                    </p>
                    </Cell>
                  <Cell col={6}>
                    <h2 className="h2">CONTACT ME</h2> 
                    <hr/>
                    <div className="contact-list">
                       <List>
                            <ListItem>
                                <ListItemContent className="para">
                                    <i className="fa fa-phone-square" area-hidden="true" />
                                          +91-9108525765
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent className="para">
                                    <i className="fa fa-envelope" area-hidden="true" />
                                        amit.pathak321@gmail.com
                                </ListItemContent>

                            </ListItem>

                            <ListItem>
                                <ListItemContent className="para">
                                    <i className="fa fa-skype" area-hidden="true" />
                                        amit.pathak321@live.com
                                </ListItemContent>

                            </ListItem>

                            
                      </List>
                    </div>
                  </Cell>
              </Grid>
            </div>
        )
    }
}

export default Contact;