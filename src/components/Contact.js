import React, { useState } from "react"

const Contact = () => {
    const[data, setData] = useState({
        fullname: '',
        email:'',
        phone: '',
        msg:'',
    })

    const InputEvent = (event) => {
        const {name, value} = event.target;
        setData((preVal)=>{
            return {
                ...preVal,
                [name] : value,
            }
        })
    }
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullname}. My Mobile number is ${data.phone} and email is ${data.email}, Here are my feedback ${data.msg}`)
    };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact IN</h1>
      </div>
      <div className="contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}> 
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Full Name : 
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="fullName"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                  required=""
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Mobile No. :
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="+91"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                 Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
