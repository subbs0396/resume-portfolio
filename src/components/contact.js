import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>SUBRAMANYAM</h2>
                        <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" alt="avatar" 
                        style={{height:'250px'}} />

                        <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                    <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                 <i class='fa fa-phone-square' aria-hidden='true' />
                                91-9340110825
                                </ListItemContent>
                            </ListItem>
                            
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                                 <i class='fa fa-envelope' aria-hidden='true' />
                                subramanyamc09@gmail.com
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                                 <i class='fa fa-map-marker' aria-hidden='true' />
                                 133, 7th Cross Rd, Jakkasandra, HSR Layout 5th Sector, Bengaluru, Karnataka 560034
                                </ListItemContent>
                            </ListItem>
                            
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                                 <i class='fa fa-skype' aria-hidden='true' />
                                My Skype ID
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