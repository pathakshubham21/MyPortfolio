import React, { Component } from 'react';
import {Layout, Navigation, Drawer, Content, Header} from 'react-mdl';
import {Link} from 'react-router-dom';
import Main from './Main';
import "../App.css";

//import "./App.css";

class MainLayout extends Component {

     close() {
        var d = document.querySelector('.mdl-layout');
        d.MaterialLayout.toggleDrawer();
      }

  render() {
    return (
            <div className="demo-big-content">
                <Layout>
                   <Header title={ <Link style={{textDecoration:'none', color:'white', fontSize: '30px'}} to= "/">Home</Link>} className="header"  scroll>
                        <Navigation>
                            <Link style={{fontSize: '30px'}} to="/Resume">Resume</Link>
                            <Link style={{fontSize: '30px'}} to="/AboutMe">About Me</Link>
                            <Link style={{fontSize: '30px'}} to="/Projects">Projects</Link>
                            <Link style={{fontSize: '30px'}} to="/Contact">Contact</Link>
                        </Navigation>
                    </Header>
                    <Drawer  style={{ backgroundColor: 'rgb(51, 51, 51)'}} title={<div style={{ background: 'white'}}><i className="fa fa-home" style={{fontSize: '45px'}}></i><Link onClick={() => this.close()}style={{ color:'black', fontSize: '30px'}} to= "/">Home</Link></div>}>
                        <Navigation >
                            <Link onClick={() => this.close()} style={{fontSize: '20px', fontWeight: 'bold', color: 'while'}} to="/Resume">Resume</Link>
                            <Link onClick={() => this.close()} style={{fontSize: '20px',fontWeight: 'bold', color: 'while'}} to="/AboutMe">About Me</Link>
                            <Link onClick={() => this.close()} style={{fontSize: '20px',fontWeight: 'bold', color: 'while'}} to="/Projects">Projects</Link>
                            <Link onClick={() => this.close()} style={{fontSize: '20px',fontWeight: 'bold', color: 'while'}} to="/Contact">Contact</Link>
                        </Navigation>
                    </Drawer>
                    
                    
                    <Content>
                        <div className="page-content" />
                        <Main />
                    </Content> 
                </Layout>
           </div>
    );
  }
}

export default MainLayout;


