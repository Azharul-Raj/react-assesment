import { useState } from "react";
import "./App.css";
import FirstComponent from "./components/FirstComponent";

const users = [
  {
    name: "Raj",
    class: 10,
    occupation: "student",
  },
  {
    name: "Rohan",
    class: 12,
    occupation: "student",
  },
  {
    name: "Abhisheikh",
    class: 9,
    occupation: "student",
  },
  {
    name: "Rokib",
    class: 13,
    occupation: "student",
  },
];
const randomItem=[
  {
    name:'rousho',
    class:8,
    occupation:'student'
  },
  {
    name:'rousho',
    class:1,
    occupation:'student'
  },
  {
    name:'ruko',
    class:2,
    occupation:'student'
  },
  {
    name:'naim',
    class:3,
    occupation:'student'
  },
  {
    name:'robin',
    class:4,
    occupation:'student'
  },
  {
    name:'rohil',
    class:5,
    occupation:'student'
  },
  {
    name:'jwel',
    class:6,
    occupation:'student'
  },
  {
    name:'joli',
    class:7,
    occupation:'student'
  },
]
function App() {
  const [items,setItems]=useState(users);
  const getRandomNumber=()=> {
    let num= Math.floor(Math.random()*randomItem.length)+1;
      
    return num;
  }
  const getRadomUser=()=>{
    const item= randomItem.filter(item=>item.class===getRandomNumber());
    if(item[0]===undefined) {
      const newItem=randomItem.filter(item=>item.class===getRandomNumber());
      return newItem[0];
    }
    return item[0];
  }

  // console.log(getRadomUser())
  const addRandomUser=(user)=>{
    console.log(user)
   setItems(prev=>{
   return  [...prev,user]
   })
  }
  console.log(items)
  return (
    <>
      <div className="flex items-center justify-center">
        <h1 className="font-bold text-3xl">Users list is displayed.</h1>
      </div>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Class
              </th>
              <th scope="col" className="px-6 py-3">
                Occupation
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {items?.map((user,i) => (
              <FirstComponent key={user.class} i={i} user={user} />
            ))}
          </tbody>
        </table>
        <button onClick={()=>addRandomUser(getRadomUser())} className="bg-gray-800 p-4 rounded-md w-full text-white my-2 font-bold"> Add a new Item</button>
      </div>
    </>
  );
}

export default App;
