import React from 'react'
import { Button, Typography } from '@mui/material'
import LifeCircleDialog from './LifeCircleDialog'

const TestPage = () => {
  const [open, setOpen] = React.useState(false)
  const [isIn, setIsIn] = React.useState(false)

  const handleClickOpen = () => {
    setIsIn(true)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    // setIsIn(false)
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      {
        isIn
          ? (
            <LifeCircleDialog
              open={open}
              handleClose={handleClose}
              setIsIn={setIsIn}
            />
          )
          : null
      }
      <Typography variant="h3">
        I am h3!
      </Typography>
    </div>
  )
}

export default TestPage