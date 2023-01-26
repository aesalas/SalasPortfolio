import React, { useState, Component } from "react";

export default class Form extends Component{
  constructor(props){
    super(props)
    this.state = { name: '', email: '', message: '' }
  }

  handleChange = e =>
    this.setState({ [e.target.name]: e.target.value })

  render() {
    const { name, email, message } = this.state
    return (
      <form className='contactForm' >

        <input 
          type='text' 
          name='name' 
          value={name}
          placeholder='Enter your name'
          onChange={this.handleChange} />

        <input 
          type='email' 
          name='email' 
          value={email}
          placeholder='Enter your email'
          onChange={this.handleChange} />

        <textarea 
          name='message' 
          placeholder='Messaage'
          value={message}
          onChange={this.handleChange}></textarea>

        <button type='submit'>Submit</button>
      </form>
    )
  }
}
