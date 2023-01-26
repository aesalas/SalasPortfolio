
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
        <div class="row">
          <div class="col-25">
            <label for="name">Name: </label>
          </div>
          <div class="col-75">
            <input 
                type='text' 
                name='name' 
                placeholder='Enter your name' />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="email">Email</label>
          </div>
          <div class="col-75">
            <input 
                type='email' 
                name='email' 
                placeholder='Enter your email' />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="subject">Message</label>
          </div>
          <div class="col-75">
            <textarea id="message" name="message" placeholder="Write something.." style="height:200px"></textarea>
          </div>
        </div>
        <button type='submit'>Submit</button>

      </form>
    </div>
  )
}