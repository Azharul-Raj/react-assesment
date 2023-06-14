import "./App.css";
import FirstComponent from "./components/FirstComponent";

function App() {
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
            {users.map((user,i) => (
              <FirstComponent key={user.class} i={i} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
