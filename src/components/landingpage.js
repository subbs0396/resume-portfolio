import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
class Landing extends Component {
    render() {
        return (
           <div style={{width: '100%', margin: 'auto'}}>
               <Grid className="landing-grid">
                <Cell col={12}>
                    <img src="https://www.w3schools.com/w3images/avatar2.png" alt="avatar" className="avatar-img" />
                    <div className="banner-text">
                        <h1>Front-End Developer</h1>
                    
                        <hr />

                        <p>HTML/CSS | JavaScript | React | React Native | SQL | PHP | Figma | XD | Sketch</p>

                        <div className="social-links">
                            {/* LinkedIn*/}
                            <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                            </a>

                            {/* Github*/}
                            <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                            <i class="fa fa-github-square" aria-hidden="true"></i>
                            </a>

                            {/* FreeCodeCamp*/}
                            <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                            <i class="fa fa-free-code-camp" aria-hidden="true"></i>
                            </a>

                            {/* YouTube*/}
                            <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                            <i class="fa fa-youtube-square" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                    
                </Cell>
                </Grid> 
           </div>
        );
    }
}

export default Landing;