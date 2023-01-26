
export default function Form() {
  return (
    <div className="contact">
      <form 
        method='POST' 
        name='contactform' 
        className='contactForm'>
      <input 
        type='hidden' 
        name='form-name'
        value='contactForm' />


        <input 
          type='text' 
          name='name' 
          placeholder='Enter your name' />

        <input 
          type='email' 
          name='email' 
          placeholder='Enter your email' />

        <textarea 
          name='message' 
          placeholder='Message'></textarea>

        <button type='submit'>Submit</button>

      </form>
    </div>
  )
}