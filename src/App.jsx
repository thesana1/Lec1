import './App.css'

function App() {
1
  let username = 'daviti'
  let age = 16

  return (
    <div>
      <h1>hello world</h1>
      <h2 className='blue'>{username}</h2>
      <h2>I am {age} years old</h2>
    </div>
  )
}

export default App
