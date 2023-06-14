import './App.css'
import FirstComponent from './components/FirstComponent'

function App() {
  const users=[
    {
      name:'Raj',
      class:10,
      occupation:'student'
    },
    {
      name:'Rohan',
      class:12,
      occupation:'student'
    },
    {
      name:'Abhisheikh',
      class:9,
      occupation:'student'
    },
    {
      name:'Rokib',
      class:13,
      occupation:'student'
    },
  ]

  return (
    <>
     <h1>Users list is displayed.</h1>
     {
      users.map(user=><FirstComponent key={user.class} user={user}/>)
     }
    </>
  )
}

export default App
