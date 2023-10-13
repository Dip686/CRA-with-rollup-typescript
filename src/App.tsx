import React, { type ReactNode } from 'react';
import Button from './components/Button/Button';
function App (): ReactNode {
  return <Button type='primary' onClick={() => { console.log('clicked') }} text='Click here' />
}
export default App
