import {useState} from 'react'
import Button from "react-bootstrap/Button";

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
}

export default function Form (){
  const [state, setState] = useState({name: '', email: '', message: '' })

  const handleChange = e =>
    setState({...state, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contactForm', ...state })
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error))
    e.preventDefault()
  }

  return (
    <div className="contact">
    <form 
      className='contactForm' 
      onSubmit={handleSubmit}>
    <label htmlFor="name" className="form-label">
        Name: 
    </label>
      
      <input 
        type='text' 
        name='name' 
        value={state.name}
        required
        onChange={handleChange} />

    <label htmlFor="email" className="form-label">
        Email: 
    </label>  
    <input 
    type='email' 
    name='email' 
    value={state.email}
    required
    onChange={handleChange} />

    <label htmlFor="message" className="form-label">
        Message: 
    </label> 
      <textarea 
        name='message' 
        required
        value={state.message}
        onChange={handleChange}></textarea>
      <Button type='submit'>Submit</Button>
    </form>
    </div>
  )
}