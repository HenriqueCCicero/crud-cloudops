import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function UserNew() {
  const navigate = useNavigate()
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [phone, setPhone] = useState(null)
  const [jobs, setJobs] = useState([])

  async function handleSubmit(event) {
    event.preventDefault()
    const data = {
      name, email, phone, jobs
    }
    await axios.post("http://localhost:3000/api/create-user.php", data)

    navigate("/")
  }

  function manageJobs(jobId) {
    if (jobs.includes(jobId)) {
      setJobs(
        jobs.filter(job => job != jobId)
      )
      return
    }

    setJobs(jobs.concat(jobId))
  }

  return (
    <div className="container">
      <Link to='/' className="btn btn-primary">Voltar</Link>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome</label>
          <input type="text" onChange={event => setName(event.target.value)} className="form-control" />
        </div>
        <div>
          <label>E-mail</label>
          <input type="email" onChange={event => setEmail(event.target.value)} className="form-control" />
        </div>
        <div>
          <label>Telefone</label>
          <input type="text" onChange={event => setPhone(event.target.value)} className="form-control" />
        </div>
        <div>
          <input type="checkbox" onChange={event => manageJobs(2)} className="form-check-input" />
          <label>Frontend</label>
        </div>
        <div>
          <input type="checkbox" onChange={event => manageJobs(1)} className="form-check-input" />
          <label>Backend</label>
        </div>
        <button className="btn btn-success">Criar</button>
      </form>
    </div>
  )
}