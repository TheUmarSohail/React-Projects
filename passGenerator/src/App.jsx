import { useState, useRef, useCallback } from 'react'


function App() {

  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passRef = useRef(null)

  let str = 'ABCDEFGHIJKLMNOQRSTUVWXYZabcdefghijklmnoqrstuvwxyz'
  let pass = ''
  if (numAllowed) {
    str += '1234567890'

  }
  if (charAllowed) {
    str += '!@#$%^&*()'
  }

  for (let i = 1; i <= length; i++) {
    pass += str.charAt((Math.floor(Math.random() * str.length)) + 1)
  }

  const copyToClipboard = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(pass)
  })

  return (
    <>
      <div className=' w-100% h-lvh bg-gray-800'>
        <div className=' text-center px-2 py-4 text-4xl font-bold text-orange-500 w-full max-w-md mx-auto bg-gray-950 rounded-lg '>
          Generate Password
        </div>
        <div className='flex justify-center shadow rounded-lg ml-80 mr-80 mb-4 mt-4'>
          <input
            value={pass}
            type="text"
            placeholder='Password'
            readOnly
            ref={passRef}
            className=' self-center outline-none w-full py-1 px-3'
          />
          <button
            onClick={copyToClipboard}
            className=' bg-blue-800 rounded-md mr-1 px-2 py-1 text-white text-md'>Copy</button>
        </div>
        <div className='flex justify-center gap-x-2 text-white'>
          <label>Length: {length}</label>
          <input type="range"
            value={length}
            onChange={(e) => { setLength(e.target.value) }}
          />
          <input type="checkbox"
            value={numAllowed}
            onChange={(e) => { setNumAllowed((prev) => !prev) }}
          />
          <label>Numbers: {numAllowed}</label>
          <input type="checkbox"
            value={charAllowed}
            onChange={(e) => { setCharAllowed((prev) => !prev) }}
          />
          <label>Characters: {charAllowed}</label>
        </div>
      </div>
    </>
  )
}

export default App
