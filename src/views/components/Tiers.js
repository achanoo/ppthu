import React, {useState, useRef} from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import JoditEditor from "jodit-react";
import Link from '@mui/material/Link';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import '../style.css';

const Tiers = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const editor = useRef(null)
    const [content, setContent] = useState('')

    const config = {
        readonly: false // all options from https://xdsoft.net/jodit/doc/
    }
    return (
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
                                                    <div className="subtitle"> Published Oct 18, 2021  </div>
                                                    <div className="subtitle">0 pantpoethus</div>
                                                </Grid>
                                                <Grid xs={2} sm={2} md={2} lg={2}>
                                                    <Link href="#" className="blue-link" onClick={handleClickOpen}>Edit Tier</Link>
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
                                                                        <p className="input-label"> Tier title  </p>
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
                                                                    <p className="input-label"> Tier price </p>
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
                                                                        <p className="input-label"> Tier Image  </p>
                                                                        {/* <p className="input-label">Required</p> */}
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
                                                                        <p className="input-label"> Tier Description  </p>
                                                                        {/* <p className="input-label">Required</p> */}
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
                                                    <div className="input-label"> Official Pantpoe</div>
                                                    <div className="subtitle">$3 per month</div>
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
                                                    <div className="subtitle"> Published Oct 18, 2021  </div>
                                                    <div className="subtitle">0 pantpoethus</div>
                                                </Grid>
                                                <Grid xs={2} sm={2} md={2} lg={2}>
                                                    <Link href="#" className="blue-link" onClick={handleClickOpen}>Edit Tier</Link>
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
                                                                        <p className="input-label"> Tier title  </p>
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
                                                                    <p className="input-label"> Tier price </p>
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
                                                                        <p className="input-label"> Tier Image  </p>
                                                                        {/* <p className="input-label">Required</p> */}
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
                                                                        <p className="input-label"> Tier Description  </p>
                                                                        {/* <p className="input-label">Required</p> */}
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
                                                    <div className="input-label"> Official Pantpoe</div>
                                                    <div className="subtitle">$3 per month</div>
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
                                                    <div className="subtitle"> Published Oct 18, 2021  </div>
                                                    <div className="subtitle">0 pantpoethus</div>
                                                </Grid>
                                                <Grid xs={2} sm={2} md={2} lg={2}>
                                                    <Link href="#" className="blue-link" onClick={handleClickOpen}>Edit Tier</Link>
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
                                                                        <p className="input-label"> Tier title  </p>
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
                                                                    <p className="input-label"> Tier price </p>
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
                                                                        <p className="input-label"> Tier Image  </p>
                                                                        {/* <p className="input-label">Required</p> */}
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
                                                                        <p className="input-label"> Tier Description  </p>
                                                                        {/* <p className="input-label">Required</p> */}
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
                                                    <div className="input-label"> Official Pantpoe</div>
                                                    <div className="subtitle">$3 per month</div>
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
                                <div style={{fontWeight : 'bold', backgroundColor : 'rgb(245, 244, 242)', padding : '16px', margin: '16px 0px', textAlign : 'center', borderRadius: '4px'}}>+ <Link href='#' className="blue-link" onClick={handleClickOpen}>Add Tiers</Link></div>
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
    )
}
export default Tiers;