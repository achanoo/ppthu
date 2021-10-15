import { Typography, Grid, Box } from '@material-ui/core'
import { styled, alpha } from '@mui/material/styles'
import { TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Item } from '../layout/CustomSection'
import SearchInput from '../layout/SearchInput'
import Sectiontitle from '../layout/SectionTitle'
import { CustomButton } from '../layout/CutomerButton'

const useStyle = makeStyles((theme) => ({
  section: {
    margin: theme.spacing(1),
  },
}))

const CreatorSearch = () => {
  return (
    <>
      <Item align='center' marginTop={5}>
        <Sectiontitle label='Search 200,000+ creator on PantPoe' />
      </Item>
      <Grid container alignItems='center' justifyContent='space-around'>
        <SearchInput style={{ flextGrow: '1' }} />

        <Grid>
          <CustomButton>Search</CustomButton>
        </Grid>
      </Grid>
    </>
  )
}

export default CreatorSearch
