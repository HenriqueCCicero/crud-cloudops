import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import axios from "axios"

export default function App() {
  const [users, setUsers] = useState([])

  async function getUsers() {
    const {data} = await axios.get("http://localhost:3000/api/list-users.php") //destruturacao de objeto(response)
    setUsers(data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="container">
      <Link to='/usuarios/novo' className="btn btn-primary">Criar usuario</Link>

      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th>Vaga(s)</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}> 
              <td>
                {user.id}
              </td>
              <td>
                {user.name}
              </td>
              <td>
                {user.email}
              </td>
              <td>
                {user.phone}
              </td>
              <td>
                {user.jobs.join(" | ")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}