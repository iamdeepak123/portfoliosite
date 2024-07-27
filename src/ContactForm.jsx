import React, { useState } from 'react'
import { Fade, Slide } from "react-awesome-reveal";
const ContactForm = () => {

    const [userdata, setUserdata] = useState({
        name: "",
        email: "",
        contact: "",
        message: "",
        address: ""
    })

    const getvalue = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setUserdata({ ...userdata, [name]: value });
    }

    const updateUserdata = async (e) => {
        e.preventDefault();
        const { name, email, contact, message, address } = userdata;

        if (name && email && contact && message && address) {
            const res = await fetch("https://formsdataproject-default-rtdb.firebaseio.com/fomrdata.json", {

                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userdata),
            }
            )
            if (res) {

                setUserdata({
                    name: "",
                    email: "",
                    contact: "",
                    message: "",
                    address: "",
                })
                alert("form submitted");
            } else {
                alert("Enter the data")
            }

        } else {
            alert("Enter the data")
        }
    }

    return (
        <>
            <Slide direction='up' >
                <div className="conatiner">
                    <label className='style_label'>Contact Form</label>
                    <form className="conatiner2" method='POST'>

                        <div className="entry">

                            <input
                                type="text"
                                name='name'
                                placeholder='Name'
                                value={userdata.name}
                                onChange={getvalue}
                            />
                        </div>
                        <div className="entry">


                            <input
                                type="email"
                                name='email'
                                placeholder='Email'
                                value={userdata.email}
                                onChange={getvalue}
                            />
                        </div>
                        <div className="entry">

                            <input
                                type="number"
                                name='contact'
                                placeholder='Phone Number'
                                value={userdata.contact}
                                onChange={getvalue}

                            />
                        </div>
                        <div className="entry">

                            <input
                                type="text"
                                name='address'
                                placeholder='Address'
                                onChange={getvalue}
                                value={userdata.address}
                            />
                        </div>
                        <div className="entry2">
                            <textarea
                                type="text"
                                name='message'
                                placeholder='Type Your Message'
                                value={userdata.message}
                                onChange={getvalue}
                                autoComplete='off'
                            />


                        </div>
                        <div className="entry3">
                            <button onClick={updateUserdata} >Submit</button>
                        </div>

                    </form>

                </div>

            </Slide>


        </>
    )
}

export default ContactForm