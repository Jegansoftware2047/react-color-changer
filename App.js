import Square from './Square'
import Input from './input'
import { useState } from 'react'



function App() {
  const [colorvalue, setColorValue]=useState('')
  const [hexvalue, setHexValue]=useState('')
  const [isDarkText, setIsDarkText]=useState(true)

  return (
    <div className='App'>
      <Square
      colorvalue={colorvalue}
      hexvalue={hexvalue}
      isDarkText={isDarkText}
      />
      <Input
      colorvalue={colorvalue}
      setColorValue={setColorValue}
      setHexValue={setHexValue}
      isDarkText={isDarkText}
      setIsDarkText={setIsDarkText}
      />
    </div>
   
  )
}

export default App;
