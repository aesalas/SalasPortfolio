import React from 'react'
import {useState, useEffect} from 'react'
import Button from "react-bootstrap/Button";


const Form = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setFormData({
            ...formData, 
            [name]: value
        })
    }

    const [errors, setErrors] = useState({})
    const validate = (formData) => {
        let formErrors = {}
        if(!formData.name){
            formErrors.name = "Name required"
        }
        if(!formData.email){
            formErrors.email = "Email required"
        } 
        if(!formData.message){
            formErrors.message = "Message is required"
        }
        return formErrors
    }

    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = e => {
        setErrors(validate(formData))
        setIsSubmitted(true)
        e.preventDefault();

    }

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
      }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitted){

            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact-form", ...formData })
            })
            .then(() => alert("Success!"))
            .then(() => setIsSubmitted(false))
            .then(() => setFormData({name: "", email: "",  message: ""}))
            .catch(error => alert(error))
        }
    }, [errors, formData, isSubmitted])

    // console.log(errors, formData)
    return (
        <div className="contact">
            <form onSubmit={handleSubmit} 
            method='POST' 
            name='contactform' 
            className='contactForm'>
              <input 
                type='hidden' 
                name='form-name'
                value='contactForm' />
                <div className="form-inputs">
                    <label htmlFor="name" className="form-label">
                        Name: 
                    </label>     
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        className="form-input" 
                        value={formData.name} 
                        onChange={handleChange}/>
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                        Email: 
                    </label>     
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        className="form-input" 
                        value={formData.email} 
                        onChange={handleChange}/>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="message" className="form-label">
                        Message: 
                    </label>     
                    <textarea  
                        name="message" 
                        id="message" 
                        className="form-input" 
                        value={formData.message} onChange={handleChange} />
                    {errors.message && <p>{errors.message}</p>}
                </div>
                <Button type="submit" className="submit-btn">
                    Send
                </Button>
            </form>
        </div>

    )
}

export default Form;