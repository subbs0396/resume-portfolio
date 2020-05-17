import  React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
    render() {
        return (
             <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img src='https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png' alt="avatar" style={{height:'200px'}} />
                        </div>
                        <h2 style={{paddingTop:'2em'}}>SUBRAMANYAM</h2>
                        <h4 style={{color:'grey'}}>Front-End developer</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}} />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}} />
                        <h5>Address</h5>
                        <p>133, 7th Cross Rd, Jakkasandra, HSR Layout 5th Sector, Bengaluru, Karnataka 560034</p>
                        <h5>Phone Number</h5>
                        <p>9340110825</p>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                       
                       
                        <Education
                            startYear={2011}
                            endYear={2012}
                            schoolName="Holy Cross Sr. Sec. School"
                            schoolDescription="Completed 10th with 8 CGPA"
                         />

                        <Education
                            startYear={2013}
                            endYear={2014}
                            schoolName="Holy Cross Sr. Sec. School"
                            schoolDescription="Completed 12th with 60%"
                         />
                        <Education
                            startYear={2014}
                            endYear={2018}
                            schoolName="Rungta College of Engg and Tech"
                            schoolDescription="Graduated in B.E.(CSE) with 7.22 CPI "
                         />
                    <hr style={{borderTop:'3px solid #e22947'}} />
                    <h2>Experience</h2>
                    <Experience 
                        startYear={2018}
                            endYear="Present"
                            companyName="MoEngage Pvt. Ltd."
                            designation="Technical Solutions Engineer"
                            companyDescription="A SAAS based customer re-engagement platform based company"
                        />
                    <hr style={{borderTop:'3px solid #e22947'}} />
                    <h2>Skills</h2>
                    <Skills 
                        skill="JavaScript"
                        progress={40}
                    />

                    <Skills 
                        skill="HTML"
                        progress={50}
                    />

                    <Skills 
                        skill="React"
                        progress={40}
                    />

                    <Skills 
                        skill="PHP"
                        progress={50}
                    />

                    <Skills 
                        skill="SQL"
                        progress={50}
                    />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;