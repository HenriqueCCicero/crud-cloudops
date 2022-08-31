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
    <div className="App">
      <Link to='/'>Voltar</Link>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={event => setName(event.target.value)} />
        <input type="email" onChange={event => setEmail(event.target.value)} />
        <input type="text" onChange={event => setPhone(event.target.value)} />
        <div>
          <input type="checkbox" onChange={event => manageJobs(1)} />
          <label>Frontend</label>
        </div>
        <div>
          <input type="checkbox" onChange={event => manageJobs(2)} />
          <label>Backend</label>
        </div>
        <button>Criar</button>
      </form>
    </div>
  )
}