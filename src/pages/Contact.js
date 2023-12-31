import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Table } from "reactstrap"
import emailjs from 'emailjs-com'






const Contact = () => {


    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs.sendForm('service_1fss4ch', 'template_0fk7qdq', e.target, 'KlQQRu38HiU1BZEOm')
        .then((result) => {
        }, (error) => {
            console.log(error.text)
        })
        alert('Email sent')
    }

return(
    
<div className="sign-main">
    <div className="plans-title">
    <h1>Workout and nutrition plans</h1>
    </div>
    <div className="table">

        <Table bordered>
            <thead>
            <tr>

                <th>8 Weeks</th>
                <th>12 Weeks</th>
                <th>16 Weeks</th>
                <th>16 Weeks Plus</th>
            </tr>
            </thead>
            <tbody>
            <tr>

                <td>Three workout/meal plans per week</td>
                <td>Three workout/meal plans per week</td>
                <td>Three workout/meal plans per week</td>
                <td>Three workout/meal plans per week + check-ins + 1 video check up to 45 minutes</td>
            </tr>
            <tr>
                <td>$99</td>
                <td>$135</td>
                <td>$160</td>
                <td>$399</td>
            </tr>
            </tbody>
        </Table>
    </div>
    <p className="small-text">* If there are any changes you'd like to make to the plans please feel free to contact me and ask questions. *</p>
    
    <div className="reach">
        <p className="reach-p">Contact me by filling out the form below with the plan you would prefer. Or call or text me (661)717-2361</p>
    </div>

    <div className="contact">
    <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <div className="name">
            <div> <label>First & Last Name:</label> </div>
            <input type="text" name="from_name" />
        </div> 
        <div className="email">
            <div> <label>Your Email:</label> </div>
            <input type="email" name="from_email" />
        </div>
        <div className="subject">
            <div> <label>Subject:</label> </div>
            <input type="text" name="subject" />
        </div>
        <div className="message">
            <div><label>Message:</label></div>
            <textarea name="html_message" />
            <div> <input type="submit" value="Send" /></div>
        </div>
    </form>
    </div>
</div>
    )
}

export default Contact