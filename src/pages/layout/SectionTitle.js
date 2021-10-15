import { Typography } from '@material-ui/core'
import { makeStyles } from '@mui/styles'

const Sectiontitle = (props) => {
  const { label, color } = props

  return (
    <Typography variant='h4' style={{ color: '#000', fontWeight: '600' }}>
      {label}
    </Typography>
  )
}

export default Sectiontitle
