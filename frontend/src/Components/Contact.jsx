import axios from "axios";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

const Contact = () => {
  //===============================
  // const[name , setName] = useState("");
  // const[email , setEmail] = useState("");
  // const[message , setMessage] = useState("");
  // const[loading , setLoading] = useState("");
  //mail=================================
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  //=================================

  const sendMail = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const { name, email, message } = credentials;
  
    try {
      const response = await fetch("http://localhost:4000/send/mail", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong.");
      }
  
      const note = await response.json();
      
      // Reset form fields
      setCredentials({ name: "", email: "", message: "" });
      toast.success(note.message);
      
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  //=================================

  // const sendMail = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   //---------------------------
  //   const { name, email, message } = credentials;
  //   //---------------------------

  //   try {
  //     const { data } = await axios.post(
  //       "http://localhost:4000/send/mail",
  //       {
  //         name,
  //         email,
  //         message,
  //       },
  //       {
  //         withCredentials: true,
  //         headers: { "Content-Type": "application/json" },
  //       }
  //     );
  //     setCredentials({
  //       name: "",
  //       email: "",
  //       message: "",
  //     })
  //     toast.success(data.message);
  //     setLoading(false)

    //==================================
 
    // const response = await fetch("http://localhost:4000/send/mail", {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ name, email, message } )          // body data type must match "Content-Type" header
      
    // });
    // const note = await response.json();              // parses JSON response into native JavaScript objects
    // setCredentials(credentials.concat(note))   //  concat returns an array where push update a array
   //==================================

  
 
  //       } catch (error) { 
  //             const errorMessage = error.response && error.response.data && error.response.data.message
  //               ? error.response.data.message
  //               : "Something went wrong. Please try again later.";
              
  //             toast.error(errorMessage);
  //           } finally {
  //             setLoading(false);
  //   }
  // };


  //=================================
  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  //=================================

  return (
    <div className="Contact">
      <div className="mt-3 ContBack">
        <h1 style={{ color: "orangered", margin: "" }}> CONTACT US</h1>
        <form className="ContactForm" onSubmit={sendMail}>
          <div className="mb-3 ">
            <label htmlFor="text" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="text"
              name="name"
              aria-describedby="emailHelp"
              onChange={handleOnChange}
              value={credentials.name}
            />
          </div>

          {/* ////////////////for learning ================> */}

          {/* <div className="mb-3 ">
          <label htmlFor="text" className="form-label"  >Name</label>
          <input type="text" className="form-control" id="text" name='text' aria-describedby="emailHelp" onChange={(e) => setName(e.target.value)} value = {name} />
        </div> */}

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              onChange={handleOnChange}
              value={credentials.email}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <input
              type="text"
              className="form-control"
              id="message"
              name="message"
              aria-describedby="emailHelp"
              onChange={handleOnChange}
              value={credentials.message}
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {" "}
            {loading && <ClipLoader size={20} color="white" />} Send Message{" "}
          </button>
        </form>
      </div>

      {/* //==================== */}
    </div>
  );
};

export default Contact;
