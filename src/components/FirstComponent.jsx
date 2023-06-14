import React from 'react'

function FirstComponent({user,i}) {
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
            </tr>
  )
}

export default FirstComponent;