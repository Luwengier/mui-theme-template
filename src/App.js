import React from 'react'
import { Box } from '@mui/system'
import ColorModeButton from './components/ColorModeButton'
import TestPage from './components/TestPage'
import useCustomizedTheme from './hooks/useCustomizedTheme'

const App = () => {
  const { CustomizedThemeProvider } = useCustomizedTheme()

  return (
    <CustomizedThemeProvider>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          color: 'text.primary',
          borderRadius: 1,
          p: 3,
        }}
      >
        <ColorModeButton />
        <TestPage />
      </Box>
    </CustomizedThemeProvider>
  )
}

export default App
