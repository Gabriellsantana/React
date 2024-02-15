import {useState} from 'react'

export const ListsRender = () => {
   const [list] = useState (["Gabriel ","Douglas","Alex"]);
   
   const [users] = useState ([
     {id: 1, name:"Matheus" , age:31},
     {id: 4563848, name:"João" , age: 28},
     {id:32442373, name:"Pedro", age:34},
   ])
      const deleteRandom = () => {
         const randomNumber = Math.floor(Math.random() * 4);

         setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
         });
      };
  return (
    <div>
         <ul>
            {list.map((item, i) => (<li key={i}>{item}</li>))}
         </ul>
         <hr />
         <ul>
             {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age}</li>
             ))}
         </ul>
          <button onClick={deleteRandom}>DELETE</button>
    </div>
  )
}
 
export default ListsRender;