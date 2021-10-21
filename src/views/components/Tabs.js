import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import JoditEditor from "jodit-react";
import Link from '@mui/material/Link';
import { Add, CheckCircle, CheckCircleOutline, RadioButtonUnchecked } from '@mui/icons-material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const editor = useRef(null)
    const [content, setContent] = useState('')

    const config = {
        readonly: false // all options from https://xdsoft.net/jodit/doc/
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


  return (
        <Toolbar sx={{padding: '1%'}}>
        <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="fullWidth" centered>
                <Tab label="Basics" {...a11yProps(0)} style={{fontVariant: 'normal'}}/>
                <Tab label="Tiers" {...a11yProps(1)} />
                <Tab label="Getting Paid" {...a11yProps(2)} />
                <Tab label="Page Settings" {...a11yProps(3)} />
                <Tab label="Preview" {...a11yProps(3)} />
            </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            <Grid sx={{ width: '100%' }} container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="center" alignItems="center">
                    <Typography gutterBottom variant='h4' textAlign="center">
                        Basics
                    </Typography>
                    <Typography gutterBottom textAlign="center">
                        Set your creator details
                    </Typography>
                </Grid>
                <Grid item container xs={12} sm={8} md={8} direction="column" spacing={2}>
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
                                            <p style={{fontWeight : 'bold'}}> Name of Patreon page  </p>
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
                                        <p style={{fontWeight : 'bold'}}> What are you creating? </p>
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
                                        <p style={{fontWeight : 'bold'}}> Which sounds more correct? </p>
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
                                            <p style={{fontWeight : 'bold'}}> Profile photo  </p>
                                            <p style={{fontWeight : 'bold'}}>Required</p>
                                            <span>We recommend a 256px by 256px image.</span>
                                        </Grid>
                                        <Grid xs={8} sm={8} md={8} alignSelf="center">
                                        <input
                                            accept="image/*"
                                            className=""
                                            id="contained-button-file"
                                            multiple
                                            type="file"
                                            />
                                            <label htmlFor="contained-button-file">
                                            </label>
                                        </Grid>
                                    </Grid>
                                    <Grid item container >
                                        <Grid xs={4} sm={4} md={4} alignSelf="center">
                                            <p style={{fontWeight : 'bold'}}> Cover photo  </p>
                                            <p style={{fontWeight : 'bold'}}>Required</p>
                                            <span>We recommend an image at least 1600px wide and 400px tall.</span>
                                        </Grid>
                                        <Grid xs={8} sm={8} md={8} alignSelf="center">
                                        <input
                                            accept="image/*"
                                            className=""
                                            id="contained-button-file"
                                            multiple
                                            type="file"
                                            />
                                            <label htmlFor="contained-button-file">
                                            </label>
                                        </Grid>
                                    </Grid>
                                    <Grid item container>
                                        <Grid xs={4} sm={4} md={4} alignSelf="center">
                                            <p style={{fontWeight : 'bold'}}> Patreon page URL </p>
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
                                            <p style={{fontWeight : 'bold'}}> About your Patreon page  </p>
                                            <p>Required</p>
                                            <span>This is the first thing potential patrons will see when they land on your page, so make sure you paint a compelling picture of how they can join you on this journey.</span>
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
                                            <p style={{fontWeight : 'bold'}}> Intro video </p>
                                            <p>Don't worry — this is optional and it's okay to launch without a video.</p>
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
                <Grid item xs={12} sm={4} md={4}>
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
                                    <div>Required. <Link href='#'>Add Now</Link> </div>
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
                                    <div>Required. <Link href='#'>Add Now</Link> </div>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={2} sm={2} md={1} lg={1}>
                                    <RadioButtonUnchecked style={{color: 'red'}}/>
                                </Grid>
                                <Grid item xs={10} sm={10} md={11} lg={11}>
                                    <span style={{color: 'red'}}>Create about section</span>
                                    <div>Required. <Link href='#'>Add Now</Link> </div>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={2} sm={2} md={1} lg={1}>
                                    <RadioButtonUnchecked style={{color: 'red'}}/>
                                </Grid>
                                <Grid item xs={10} sm={10} md={11} lg={11}>
                                    <span style={{color: 'red'}}>Finish account details</span>
                                    <div>Required. <Link href='#'>Add Now</Link> </div>
                                </Grid>
                            </Grid>
                            <Typography gutterBottom variant='h6' component='div'>
                                <p style={{fontWeight : 'bold'}}>LEARN MORE</p>
                            </Typography>
                            
                            <ul>
                                    <li><Link href='#' style={{color: 'gray'}}>Membership 101: Best Practices</Link></li>
                                    <li><Link href='#' style={{color: 'gray'}}>How to choose your business model</Link></li>
                                    <li><Link href='#' style={{color: 'gray'}}>How to talk about Patreon to your audience</Link></li>
                                    <li><Link href='#' style={{color: 'gray'}}>Knowing your worth as a creator</Link></li>
                                </ul>
                        </CardContent>
                    </Card> 
                </Grid>
            </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Grid sx={{ width: '100%' }} container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="center" alignItems="center">
                    <Typography gutterBottom variant='h4' textAlign="center">
                        Tiers
                    </Typography>
                    <Typography gutterBottom textAlign="center">
                        Choose what to offer your patrons
                    </Typography>
                </Grid>
                <Grid item container  direction="column" spacing={2}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Card style={{ borderRadius: '0' }}>
                            {/* <CardMedia
                            component='img'
                            height='140'
                            image='/static/images/cards/contemplative-reptile.jpg'
                            alt='green iguana'
                            /> */}
                            <CardContent>
                                <Grid container direction="row" spacing={2}>
                                    <Grid item xs={12} sm={6} md={4} lg={4}>
                                        <Card style={{ borderRadius: '0' }}>
                                            <CardContent>
                                                <Grid item container >
                                                    <Grid xs={10} sm={10} md={10} lg={10}>
                                                        <div> Published Oct 18, 2021  </div>
                                                        <div>0 pantpoethus</div>
                                                    </Grid>
                                                    <Grid xs={2} sm={2} md={2} lg={2}>
                                                        <Link href="#" onClick={handleClickOpen}>Edit Tier</Link>
                                                        <Dialog open={open} onClose={handleClose}>
                                                            <DialogTitle>Edit</DialogTitle>
                                                            <DialogContent>
                                                            {/* <DialogContentText>
                                                                To subscribe to this website, please enter your email address here. We
                                                                will send updates occasionally.
                                                            </DialogContentText> */}
                                                                <Grid container direction="row" spacing={3}>
                                                                    <Grid item container >
                                                                        <Grid xs={4} sm={4} md={4}>
                                                                            <p style={{fontWeight : 'bold'}}> Tier title  </p>
                                                                        </Grid>
                                                                        <Grid xs={8} sm={8} md={8}>
                                                                            <TextField
                                                                                fullWidth
                                                                                required
                                                                                id="outlined-required"
                                                                                label="Required"
                                                                                defaultValue="Official Patron"
                                                                                placeholder="Official Patron"
                                                                                color="info"
                                                                                />
                                                                        </Grid>
                                                                    </Grid>
                                                                    <Grid item container>
                                                                        <Grid xs={4} sm={4} md={4} alignSelf="center">
                                                                        <p style={{fontWeight : 'bold'}}> Tier price </p>
                                                                        </Grid>
                                                                        <Grid xs={8} sm={8} md={8}>
                                                                            <TextField
                                                                                fullWidth
                                                                                required
                                                                                id="outlined-required"
                                                                                label="Required"
                                                                                placeholder="30000"
                                                                                defaultValue="30000"
                                                                                color="info"
                                                                                />
                                                                        </Grid>
                                                                    </Grid>
                                                                    
                                                                    <Grid item container >
                                                                        <Grid xs={4} sm={4} md={4} alignSelf="center">
                                                                            <p style={{fontWeight : 'bold'}}> Tier Image  </p>
                                                                            {/* <p style={{fontWeight : 'bold'}}>Required</p> */}
                                                                            {/* <span>We recommend a 256px by 256px image.</span> */}
                                                                        </Grid>
                                                                        <Grid xs={8} sm={8} md={8} alignSelf="center">
                                                                        <input
                                                                            accept="image/*"
                                                                            className=""
                                                                            id="contained-button-file"
                                                                            multiple
                                                                            type="file"
                                                                            />
                                                                            <label htmlFor="contained-button-file">
                                                                            </label>
                                                                        </Grid>
                                                                    </Grid>

                                                                    <Grid item container >
                                                                        <Grid xs={4} sm={4} md={4} alignSelf="center">
                                                                            <p style={{fontWeight : 'bold'}}> Tier Description  </p>
                                                                            {/* <p style={{fontWeight : 'bold'}}>Required</p> */}
                                                                            {/* <span>We recommend a 256px by 256px image.</span> */}
                                                                        </Grid>
                                                                        <Grid xs={8} sm={8} md={8} alignSelf="center">
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
                                                                </Grid>
                                                            </DialogContent>
                                                            <DialogActions>
                                                            <Button onClick={handleClose}>Cancel</Button>
                                                            <Button onClick={handleClose}>Save</Button>
                                                            </DialogActions>
                                                        </Dialog> 
                                                    </Grid>
                                                </Grid>
                                                <br />
                                                <Grid item container >
                                                    <Grid xs={12} sm={12} md={12} lg={12}>
                                                        <div style={{fontWeight : 'bold'}}> Official Pantpoe</div>
                                                        <div>$3 per month</div>
                                                    </Grid>
                                                </Grid>
                                                <Grid item container >
                                                    <Grid xs={12} sm={12} md={12} lg={12}>
                                                        <div style={{fontWeight : 'bold', backgroundColor : 'rgb(245, 244, 242)', padding : '6px', margin: '16px 0px'}}> Behind-the-scenes content</div>
                                                        <div style={{fontWeight : 'bold', backgroundColor : 'rgb(245, 244, 242)', padding : '6px', margin: '16px 0px'}}> Patron-only polls</div>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </Grid> 
                                    <Grid item xs={12} sm={6} md={4} lg={4}>
                                        <Card style={{ borderRadius: '0' }}>
                                            <CardContent>
                                                <Grid item container >
                                                    <Grid xs={10} sm={10} md={10} lg={10}>
                                                        <div> Published Oct 18, 2021  </div>
                                                        <div>0 pantpoethus</div>
                                                    </Grid>
                                                    <Grid xs={2} sm={2} md={2} lg={2}>
                                                        <Link href="#" onClick={handleClickOpen}>Edit Tier</Link>
                                                    </Grid>
                                                </Grid>
                                                <br />
                                                <Grid item container >
                                                    <Grid xs={12} sm={12} md={12} lg={12}>
                                                        <div style={{fontWeight : 'bold'}}> Official Pantpoe</div>
                                                        <div>$3 per month</div>
                                                    </Grid>
                                                </Grid>
                                                <Grid item container >
                                                    <Grid xs={12} sm={12} md={12} lg={12}>
                                                        <div style={{fontWeight : 'bold', backgroundColor : 'rgb(245, 244, 242)', padding : '6px', margin: '16px 0px'}}> Behind-the-scenes content</div>
                                                        <div style={{fontWeight : 'bold', backgroundColor : 'rgb(245, 244, 242)', padding : '6px', margin: '16px 0px'}}> Patron-only polls</div>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </Grid>  
                                    <Grid item xs={12} sm={6} md={4} lg={4}>
                                        <Card style={{ borderRadius: '0' }}>
                                            <CardContent>
                                                <Grid item container >
                                                    <Grid xs={10} sm={10} md={10} lg={10}>
                                                        <div> Published Oct 18, 2021  </div>
                                                        <div>0 pantpoethus</div>
                                                    </Grid>
                                                    <Grid xs={2} sm={2} md={2} lg={2}>
                                                        <Link href="#" onClick={handleClickOpen}>Edit Tier</Link>
                                                    </Grid>
                                                </Grid>
                                                <br />
                                                <Grid item container >
                                                    <Grid xs={12} sm={12} md={12} lg={12}>
                                                        <div style={{fontWeight : 'bold'}}> Official Pantpoe</div>
                                                        <div>$3 per month</div>
                                                    </Grid>
                                                </Grid>
                                                <Grid item container >
                                                    <Grid xs={12} sm={12} md={12} lg={12}>
                                                        <div style={{fontWeight : 'bold', backgroundColor : 'rgb(245, 244, 242)', padding : '6px', margin: '16px 0px'}}> Behind-the-scenes content</div>
                                                        <div style={{fontWeight : 'bold', backgroundColor : 'rgb(245, 244, 242)', padding : '6px', margin: '16px 0px'}}> Patron-only polls</div>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </Grid> 
                                    <Grid item xs={12} sm={6} md={4} lg={4}>
                                    <div style={{fontWeight : 'bold', backgroundColor : 'rgb(245, 244, 242)', padding : '16px', margin: '16px 0px', textAlign : 'center', borderRadius: '4px'}}>+ <Link href='#' onClick={handleClickOpen}>Add Tiers</Link></div>
                                    </Grid>                                   
                                </Grid>
                            </CardContent>
                            {/* <CardActions>
                            <Button size='small'>Share</Button>
                            <Button size='small'>Learn More</Button>
                            </CardActions> */}
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
            Item Three
        </TabPanel>
        </Box>
        </Toolbar>
  );
}
