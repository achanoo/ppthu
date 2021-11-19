import React, { useState, useRef } from 'react'
import { useSubscriptionContext } from '../context/SubscriptionContext'
import Loading from './../components/Loading'
import {
  Typography,
  OutlinedInput,
  FormHelperText,
  InputAdornment,
} from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Editor from './../components/Editor'
import Link from '@mui/material/Link'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import '../assets/style.css'
let initialdata = {
  subcriptPlans: [],
  newDialog: false,
  editDialog: false,
  newData: {
    title: '',
    price: '',
    image: '',
    desc: '',
  },
  editData: {
    title: '',
    price: '',
    image: '',
    desc: '',
  },
  isError: {
    title: '',
    price: '',
    image: '',
  },
}

const Tiers = () => {
  const {
    setLevel,
    setPrice,
    setImage,
    setDescription,
    getSubscriptions,
    subscriptions,
    isloading,
    createSubscriptions,
  } = useSubscriptionContext()
  // console.log(data)
  const [state, setState] = React.useState(initialdata)
  const [open, setOpen] = React.useState(false)
  const createPlan = React.useRef()
  const editPlan = React.useRef()

  const editor = useRef(null)
  const [content, setContent] = useState('')
  const [fullWidth, setFullWidth] = React.useState(true)
  const [maxWidth, setMaxWidth] = React.useState('sm')

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  }

  const newhandleClose = () => {
    setState({
      ...state,
      newDialog: false,
    })
    // setState((state) => {
    //   return { ...state, newData: { ...state.newData, desc: value } }
    // })
  }
  const newhandleOpen = (e) => {
    setState({
      ...state,
      newDialog: true,
    })
  }
  const edithandleClose = (e) => {
    setState({
      ...state,
      editDialog: false,
    })
  }
  const edithandleOpen = (e) => {
    setState({
      ...state,
      editDialog: true,
    })
  }

  // console.log(state)
  const NewformInputValue = (e) => {
    const { name, value, files } = e.target

    const { isError, newData } = state

    switch (name) {
      case 'title':
        isError.title = value.length < 0 ? 'data is required' : ''
        break
      case 'price':
        isError.price = value.length < 0 ? 'data is required' : ''
        break
      case 'image':
        isError.image = value.length < 0 ? 'data is required' : ''
        break
    }

    if (name === 'title') {
      isError.title = value.length < 0 ? 'data is required' : ''
      setLevel(value)
      setState({ ...state, isError })
    }

    if (name === 'price') {
      isError.price = value.length < 0 ? 'data is required' : ''
      setPrice(value)
      setState({ ...state, isError })
    }

    if (name === 'image') {
      isError.price = files[0].size < 0 ? 'data is required' : ''
      setImage(files[0])
      setState({ ...state, isError })
    }

    // setState({
    //   ...state,
    //   isError,
    //   newData: { ...state.newData, [name]: value },
    // })
  }
  // console.log(state.newData)

  // Edit
  const EditformInputValue = (e) => {
    const { name, value } = e.target
    const { isError, newData } = state

    setState({
      ...state,
      editData: { ...state.editData, [name]: value },
    })
  }

  const NewgetValue = (value) => {
    setDescription(value)
    // setState({ ...state, isError })
  }
  const editGetValue = (value) => {
    setState({
      ...state,
      editData: { ...state.editData, desc: value },
    })
  }

  React.useEffect(() => {
    // getSubscriptions()
  }, [])

  const createHandleSubmit = () => {
    const newformData = {
      level: state.newData.title,
      price: state.newData.price,
      image: state.newData.image,
      desc: state.newData.desc,
    }
    // console.log(newformData)
    createSubscriptions(newformData)
    setState({
      ...state,
      newDialog: false,
    })
  }

  if (isloading) {
    return <Loading />
  }
  console.log(subscriptions)
  return (
    <>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          justifyContent='center'
          alignItems='center'
        >
          <Typography gutterBottom variant='h4' textAlign='center'>
            Tiers
          </Typography>
          <Typography gutterBottom textAlign='center'>
            Choose what to offer your patrons
          </Typography>
        </Grid>
        <Grid item container direction='column' spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Card style={{ borderRadius: '0' }}>
              {/* <CardMedia
                        component='img'
                        height='140'
                        image='/static/images/cards/contemplative-reptile.jpg'
                        alt='green iguana'
                        /> */}
              <CardContent>
                <Grid container direction='row' spacing={2}>
                  {/* <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Card style={{ borderRadius: '0' }}>
                      <CardContent>
                        <Grid item container>
                          <Grid item xs={10} sm={10} md={10} lg={10}>
                            <div className='subtitle'>
                              {' '}
                              Published Oct 18, 2021{' '}
                            </div>
                            <div className='subtitle'>0 pantpoethus</div>
                          </Grid>
                          <Grid item xs={2} sm={2} md={2} lg={2}>
                            <a
                              href='#'
                              className='blue-link'
                              onClick={edithandleOpen}
                              data-name='editPlan'
                            >
                              Edit Tier
                            </a>
                          </Grid>
                        </Grid>
                        <br />
                        <Grid item container>
                          <Grid item xs={12} sm={12} md={12} lg={12}>
                            <div className='input-label'> Official Pantpoe</div>
                            <div className='subtitle'>$3 per month</div>
                          </Grid>
                        </Grid>
                        <Grid item container>
                          <Grid item xs={12} sm={12} md={12} lg={12}>
                            <div
                              style={{
                                fontWeight: 'bold',
                                backgroundColor: 'rgb(245, 244, 242)',
                                padding: '6px',
                                margin: '16px 0px',
                              }}
                            >
                              {' '}
                              Behind-the-scenes content
                            </div>
                            <div
                              style={{
                                fontWeight: 'bold',
                                backgroundColor: 'rgb(245, 244, 242)',
                                padding: '6px',
                                margin: '16px 0px',
                              }}
                            >
                              {' '}
                              Patron-only polls
                            </div>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid> */}

                  {subscriptions.map((plan, index) => {
                    const { id, level, price, description } = plan
                    console.log(level)
                    return (
                      <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
                        <Card style={{ borderRadius: '0' }}>
                          <CardContent>
                            <Grid item container>
                              <Grid item xs={10} sm={10} md={10} lg={10}>
                                <div className='subtitle'>
                                  Published Oct 18, 2021{' '}
                                </div>
                                <div className='subtitle'>0 pantpoethus</div>
                              </Grid>
                              <Grid item xs={2} sm={2} md={2} lg={2}>
                                <a
                                  href='#'
                                  className='blue-link'
                                  onClick={edithandleOpen}
                                  data-name='editPlan'
                                >
                                  Edit Tier
                                </a>
                              </Grid>
                            </Grid>
                            <br />
                            <Grid item container>
                              <Grid item xs={12} sm={12} md={12} lg={12}>
                                <div className='input-label'>{level}</div>
                                <div className='subtitle'>
                                  Ks {price} per month
                                </div>
                              </Grid>
                            </Grid>
                            <Grid item container>
                              <Grid item xs={12} sm={12} md={12} lg={12}>
                                <div
                                  style={{
                                    fontWeight: 'bold',
                                    backgroundColor: 'rgb(245, 244, 242)',
                                    padding: '6px',
                                    margin: '16px 0px',
                                  }}
                                >
                                  {description}
                                </div>
                                {/* <div
                                  style={{
                                    fontWeight: 'bold',
                                    backgroundColor: 'rgb(245, 244, 242)',
                                    padding: '6px',
                                    margin: '16px 0px',
                                  }}
                                >
                                  {' '}
                                  Patron-only polls
                                </div> */}
                              </Grid>
                            </Grid>
                          </CardContent>
                        </Card>
                      </Grid>
                    )
                  })}

                  <Grid item xs={12} sm={6} md={4} lg={4}>
                    <div
                      style={{
                        fontWeight: 'bold',
                        backgroundColor: 'rgb(245, 244, 242)',
                        padding: '16px',
                        margin: '16px 0px',
                        textAlign: 'center',
                        borderRadius: '4px',
                      }}
                    >
                      +{' '}
                      <a
                        href='#'
                        className='blue-link'
                        onClick={newhandleOpen}
                        data-name='createPlan'
                      >
                        Add Tiers
                      </a>
                    </div>
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
      {/* create new dialog start */}
      <Dialog
        open={state.newDialog}
        onClose={newhandleClose}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
      >
        <DialogTitle>Create New Subscription</DialogTitle>
        <DialogContent>
          <Grid container style={{ margin: '16px 0px' }}>
            <Grid item xs={12} sm={12} md={4}>
              <p className='input-label'> Tier title </p>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <TextField
                fullWidth
                required
                id='outlined-required'
                label='Required'
                defaultValue='Official Patron'
                placeholder='Official Patron'
                color='info'
                name='title'
                onChange={NewformInputValue}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={4}>
              <p className='input-label'> Tier Price </p>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <TextField
                fullWidth
                required
                id='outlined-required'
                label='Required'
                defaultValue='Official Patron'
                placeholder='300000'
                color='info'
                name='price'
                onChange={NewformInputValue}
              />
            </Grid>
          </Grid>
          <Grid container style={{ margin: '16px 0px' }}>
            <Grid item xs={12} sm={12} md={4}>
              <p className='input-label'> Tier Image </p>
            </Grid>
            <Grid item xs={12} sm={12} md={8} style={{ alignSelf: 'center' }}>
              <input
                accept='image/*'
                className=''
                id='contained-button-file'
                multiple
                type='file'
                name='image'
                onChange={NewformInputValue}
              />

              <label htmlFor='contained-button-file'></label>
            </Grid>
          </Grid>

          <Grid container style={{ margin: '16px 0px' }}>
            <Grid item xs={12} sm={12} md={4}>
              <p className='input-label'> Tier Description </p>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <Editor contents={content} getValue={NewgetValue} />
              <label htmlFor='contained-button-file'></label>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={newhandleClose} data-name='createPlan'>
            Cancel
          </Button>
          <Button onClick={createHandleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>

      {/* edit new dialog start */}
      <Dialog
        open={state.editDialog}
        onClose={edithandleClose}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        data-name='editPlan'
      >
        <DialogTitle>Update Subscription</DialogTitle>
        <DialogContent>
          <Grid container style={{ margin: '16px 0px' }}>
            <Grid item xs={12} sm={12} md={4}>
              <p className='input-label'> Tier title </p>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <TextField
                fullWidth
                required
                id='outlined-required'
                label='Required'
                defaultValue='Official Patron'
                placeholder='Official Patron'
                color='info'
                name='title'
                onChange={EditformInputValue}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={4}>
              <p className='input-label'> Tier Price </p>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <TextField
                fullWidth
                required
                id='outlined-required'
                label='Required'
                defaultValue='Official Patron'
                placeholder='300000'
                color='info'
                name='price'
                onChange={EditformInputValue}
              />
            </Grid>
          </Grid>
          <Grid container style={{ margin: '16px 0px' }}>
            <Grid item xs={12} sm={12} md={4}>
              <p className='input-label'> Tier Image </p>
            </Grid>
            <Grid item xs={12} sm={12} md={8} style={{ alignSelf: 'center' }}>
              <input
                accept='image/*'
                className=''
                id='contained-button-file'
                multiple
                type='file'
                name='image'
                onChange={EditformInputValue}
              />

              <label htmlFor='contained-button-file'></label>
            </Grid>
          </Grid>

          <Grid container style={{ margin: '16px 0px' }}>
            <Grid item xs={12} sm={12} md={4}>
              <p className='input-label'> Tier Description </p>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <Editor contents={content} getValue={editGetValue} />
              <label htmlFor='contained-button-file'></label>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={edithandleClose} data-name='editPlan'>
            Cancel
          </Button>
          <Button onClick={() => console.log('sure')}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
export default Tiers
