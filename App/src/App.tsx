import { useState } from 'react'
import Card from './components/Card'

function App() {


  return (
      <div id='App' className="bg-[rgba(32,38,50,255)] text-white">
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className='w-[100%] '>
          
          <Card />
          </div>
      </main>
    </div>
  )
}

export default App
