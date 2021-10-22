import React, {useState, useRef} from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import JoditEditor from "jodit-react";
import Link from '@mui/material/Link';
import { CheckCircle, RadioButtonUnchecked } from '@mui/icons-material';
import '../style.css';
import Avatar from '@mui/material/Avatar';

const Basic = () => {
    const editor = useRef(null)
    const [content, setContent] = useState('')

    const config = {
        readonly: false // all options from https://xdsoft.net/jodit/doc/
    }

    return (
        <Grid sx={{ width: '100%' }} container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="center" alignItems="center">
                <Typography gutterBottom variant='h4' textAlign="center">
                    Basics
                </Typography>
                <Typography gutterBottom textAlign="center">
                    Set your creator details
                </Typography>
            </Grid>
            <Grid item container xs={12} sm={12} md={8} direction="column" spacing={2}>
                <Grid item>
                    <Card style={{ borderRadius: '0' }}>
                        {/* <CardMedia
                        component='img'
                        height='140'
                        image='/static/images/cards/contemplative-reptile.jpg'
                        alt='green iguana'
                        /> */}
                        <CardContent>
                            <Grid container direction="row" spacing={3}>
                                <Grid item container >
                                    <Grid xs={4} sm={4} md={4}>
                                        <p className="input-label"> Name of Patreon page  </p>
                                    </Grid>
                                    <Grid xs={8} sm={8} md={8}>
                                        <TextField
                                            fullWidth
                                            required
                                            id="outlined-required"
                                            label="Required"
                                            placeholder="pseudonym, band name, personal name, whatever"
                                            color="info"
                                            />
                                    </Grid>
                                </Grid>
                                <Grid item container>
                                    <Grid xs={4} sm={4} md={4} alignSelf="center">
                                    <p className="input-label"> What are you creating? </p>
                                    </Grid>
                                    <Grid xs={8} sm={8} md={8}>
                                        <TextField
                                            fullWidth
                                            required
                                            id="outlined-required"
                                            label="Required"
                                            placeholder="music videos, water color paintings, This American Life"
                                            color="info"
                                            />
                                    </Grid>
                                </Grid>
                                <Grid item container>
                                    <Grid xs={4} sm={4} md={4} alignSelf="center">
                                    <p className="input-label"> Which sounds more correct? </p>
                                    </Grid>
                                    <Grid xs={8} sm={8} md={8}>
                                    <RadioGroup
                                        aria-label="role"
                                        defaultValue="is"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="is" control={<Radio sx={{ fontWeight : 'bold'}}/>} label="is creating" />
                                        <FormControlLabel value="are" control={<Radio />} label="are creating" />
                                    </RadioGroup>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                        {/* <CardActions>
                        <Button size='small'>Share</Button>
                        <Button size='small'>Learn More</Button>
                        </CardActions> */}
                    </Card>
                </Grid>
                <Grid item>
                    <Card style={{ borderRadius: '0' }}>
                        {/* <CardMedia
                        component='img'
                        height='140'
                        image='/static/images/cards/contemplative-reptile.jpg'
                        alt='green iguana'
                        /> */}
                        <CardContent>
                            <Grid container direction="row" spacing={3}>
                                <Grid item container >
                                    <Grid xs={4} sm={4} md={4} alignSelf="center">
                                        <p className="input-label"> Profile photo  </p>
                                        <p className="input-required subtitle">Required</p>
                                        <span className="subtitle">We recommend a 256px by 256px image.</span>
                                    </Grid>
                                    <Grid xs={8} sm={8} md={8} alignSelf="center" className="container">
                                        
                                        <Avatar src="http://localhost:3000/static/media/logo.39c48425.png" alt="Avatar" class="image circle-img" />
                                        
                                        {/* <input type="file" name="file" id="profile1" className="profile" />
                                        <label for="profile1" className="show-profile"></label> */}
                                            <div class="overlay">
                                                <div class="upload">
                                                    
                                                    <input type="file" name="file" id="profile" className="profile" />
                                                    <label for="profile" className="show-profile"></label>
                                                        <div centered>Edit</div>
                                                </div>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid item container >
                                    <Grid xs={4} sm={4} md={4} alignSelf="center">
                                        <p className="input-label"> Cover photo  </p>
                                        <p className="input-required subtitle">Required</p>
                                        <span className="subtitle">We recommend an image at least 1600px wide and 400px tall.</span>
                                    </Grid>
                                    <Grid xs={8} sm={8} md={8} alignSelf="center">
                                        <input type="file" name="file" id="cover-photo" className="cover-photo" />
                                        <label for="cover-photo" className="show-cover-photo"></label>
                                    </Grid>
                                </Grid>
                                <Grid item container>
                                    <Grid xs={4} sm={4} md={4} alignSelf="center">
                                        <p className="input-label"> Patreon page URL </p>
                                    </Grid>
                                    <Grid xs={8} sm={8} md={8}>
                                        <p style={{marginTop: '20px', display: 'inline-block'}}>pantpoe.com/</p>
                                        <TextField
                                        style={{display: 'inline-block'}}
                                            id="outlined-required"
                                            placeholder="creator account"
                                            color="info"
                                            />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                        {/* <CardActions>
                        <Button size='small'>Share</Button>
                        <Button size='small'>Learn More</Button>
                        </CardActions> */}
                    </Card>
                </Grid>
                <Grid item>
                    <Card style={{ borderRadius: '0' }}>
                        {/* <CardMedia
                        component='img'
                        height='140'
                        image='/static/images/cards/contemplative-reptile.jpg'
                        alt='green iguana'
                        /> */}
                        <CardContent>
                            <Grid container direction="row" spacing={3}>
                                <Grid item container >
                                    <Grid xs={12} sm={12} md={12} lg={12} alignSelf="center">
                                        <p className="input-label"> About your Patreon page  </p>
                                        <p className="input-required subtitle">Required</p>
                                        <span className="subtitle">This is the first thing potential patrons will see when they land on your page, so make sure you paint a compelling picture of how they can join you on this journey.</span>
                                    </Grid>
                                </Grid>
                                <Grid item container >
                                    <Grid xs={12} sm={12} md={12} lg={12} alignSelf="center">
                                    <JoditEditor
                                        ref={editor}
                                        value={content}
                                        config={config}
                                        tabIndex={1} // tabIndex of textarea
                                        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                        onChange={newContent => {}}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid item container>
                                    <Grid xs={4} sm={4} md={4} alignSelf="center">
                                        <p className="input-label"> Intro video </p>
                                        <p className="subtitle">Don't worry — this is optional and it's okay to launch without a video.</p>
                                    </Grid>
                                    <Grid xs={8} sm={8} md={8} alignSelf="center">
                                        <TextField
                                            style={{display: 'inline-block'}}
                                            fullWidth
                                            id="outlined-required"
                                            placeholder="Video URL"
                                            color="info"
                                            />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
                <Button variant="contained" disabled fullWidth style={{borderRadius : '24px', padding : '12px', marginBottom : '4px'}}>Save Changes</Button>
                <Card style={{ borderRadius: '0' }}>
                    <CardContent>
                        <Typography gutterBottom variant='h6' component='div'>
                            CHECKLIST
                        </Typography>
                        <Grid container>
                            <Grid item xs={2} sm={2} md={1} lg={1}>
                                <CheckCircle style={{color: 'green'}}/>
                            </Grid>
                            <Grid item xs={10} sm={10} md={11} lg={11}>
                                <span style={{color: 'green'}}>Set your page name</span>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={2} sm={2} md={1} lg={1}>
                                <RadioButtonUnchecked style={{color: 'red'}}/>
                            </Grid>
                            <Grid item xs={10} sm={10} md={11} lg={11}>
                                <span style={{color: 'red'}}>Create your headline</span>
                                <div className="input-required subtitle">Required. <Link href='#' className="blue-link">Add Now</Link> </div>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={2} sm={2} md={1} lg={1}>
                                <CheckCircle style={{color: 'green'}}/>
                            </Grid>
                            <Grid item xs={10} sm={10} md={11} lg={11}>
                                <span style={{color: 'green'}}>Verify email address</span>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={2} sm={2} md={1} lg={1}>
                                <CheckCircle style={{color: 'green'}}/>
                            </Grid>
                            <Grid item xs={10} sm={10} md={11} lg={11}>
                                <span style={{color: 'green'}}>Upload profile picture</span>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={2} sm={2} md={1} lg={1}>
                                <RadioButtonUnchecked style={{color: 'red'}}/>
                            </Grid>
                            <Grid item xs={10} sm={10} md={11} lg={11}>
                                <span style={{color: 'red'}}>Upload cover image</span>
                                <div className="input-required subtitle">Required. <Link href='#' className="blue-link">Add Now</Link> </div>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={2} sm={2} md={1} lg={1}>
                                <RadioButtonUnchecked style={{color: 'red'}}/>
                            </Grid>
                            <Grid item xs={10} sm={10} md={11} lg={11}>
                                <span style={{color: 'red'}}>Create about section</span>
                                <div className="input-required subtitle">Required. <Link href='#' className="blue-link">Add Now</Link> </div>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={2} sm={2} md={1} lg={1}>
                                <RadioButtonUnchecked style={{color: 'red'}}/>
                            </Grid>
                            <Grid item xs={10} sm={10} md={11} lg={11}>
                                <span style={{color: 'red'}}>Finish account details</span>
                                <div className="input-required subtitle">Required. <Link href='#' className="blue-link">Add Now</Link> </div>
                            </Grid>
                        </Grid>
                        <Typography gutterBottom variant='h6' component='div'>
                            <p className="input-label">LEARN MORE</p>
                        </Typography>
                        
                        <ul>
                                <li><Link href='#' className="gray-link">Membership 101: Best Practices</Link></li>
                                <li><Link href='#' className="gray-link">How to choose your business model</Link></li>
                                <li><Link href='#' className="gray-link">How to talk about Patreon to your audience</Link></li>
                                <li><Link href='#' className="gray-link">Knowing your worth as a creator</Link></li>
                            </ul>
                    </CardContent>
                </Card> 
            </Grid>
        </Grid>
    )
}

export default Basic;