import React, { useState } from 'react'

function FirstComponent({user,i}) {
  const [isUpdated,setIsUpdated]=useState(false);
  const handleUpdate=()=>{
    setIsUpdated(true)
  }
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {i+1}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user.name}
                </th>
                <td className="px-6 py-4">
                    {user.class}
                </td>
                <td className="px-6 py-4">
                    {user.occupation}
                </td>
                <td onClick={handleUpdate} className="px-6 py-4">
                    <button disabled={isUpdated} className={`p-2 bg-gray-900 text-white ${isUpdated? 'disabled:cursor-not-allowed disabled:opacity-70':''}`}>
                      {isUpdated? 'Updated':'Click to Update'}
                    </button>
                </td>
                
            </tr>
  )
}

export default FirstComponent;