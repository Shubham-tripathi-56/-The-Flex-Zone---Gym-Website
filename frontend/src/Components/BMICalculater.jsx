import React, { useState } from 'react'
import { toast } from 'react-toastify';


const BMICalculater = () => {
  //-----------------------------------
  const [bmiCredentials, setBmiCredentials] = useState({ height: "", weight: "", gender: "" });
  const [bmi, setBmi] = useState("");

  //---------------------------------------
  const onChange = (e) => {
    setBmiCredentials({ ...bmiCredentials, [e.target.name]: e.target.value })
  }
  //---------------------------------------
  const calculateBMI = (e) => {
    e.preventDefault();
  
    // Destructure values from bmiCredentials
    const { height, weight, gender } = bmiCredentials;
  
    // Check if any of the values are empty
    if (!height || !weight || !gender) {
      toast.error("Please enter valid credentials");
      return;
    }
  
     /********** */
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2); 
   /********** */
    // console.log(bmiValue);
    
    setBmi(bmiValue);
  
    // Check BMI range and display corresponding message
    if (bmiValue < 18.5) {
      toast.warning("You are underweight. Consider seeking advice from a healthcare provider.");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      toast.success("You have normal weight. Keep maintaining a healthy lifestyle.");
    } else if (bmiValue >= 24.9 && bmiValue < 29.9) {
      toast.warning("You are overweight. Consider seeking advice from a healthcare provider.");
    } else {
      toast.error("You are in the obese range. It is recommended to seek advice from a healthcare specialist.");
    }
  }
  
  //---------------------------------------
  return (
    <div className='BMICalculator'>

      <div className='mt-3 bmiMain' id='bmiMain'>

        <h1 style={{ "color": "orangered", "fontWeight": "700" , "textAlign" : "center"}}> BMI CALCULATOR</h1>
        <form className='BmiForm' onSubmit={calculateBMI} >

          <div className="mb-3 ">
            <label htmlFor="height" className="form-label"  >Height (cm)</label>
            <input type="number" className="form-control" id="height" name='height' aria-describedby="emailHelp" onChange={onChange} value={bmiCredentials.height} required />
          </div>

          {/* ////////////////for learning ================> */}

          {/* <div className="mb-3 ">
        <label htmlFor="height" className="form-label"  >Height</label>
        <input type="nomber" className="form-control" id="height" name='height' aria-describedby="emailHelp" onChange={(e) => setName(e.target.value)} value = {height} />
      </div> */}

          <div className="mb-3">
            <label htmlFor="weight" className="form-label" >Weight (kg)</label>
            <input type="number" className="form-control" id="weight" name='weight' aria-describedby="emailHelp" onChange={onChange} value={bmiCredentials.weight} required />
          </div>

          <div className="mb-3">
            <label htmlFor="gender" className="form-label" >Gender</label>

            <select className="form-select" aria-label="Default select example" id="gender"  onChange={onChange}  name='gender' value={bmiCredentials.gender} required>
            <option value="" >Open this select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          </div>

          <button type="submit" className="btn btn-primary w-100" style={{ "fontWeight":"900"}}>CALCULATE BMI</button>
        </form>

      </div>


      {/* //==================== */}
      <div className='mt-3 bmiMain' > 
        <img src="./gym/img17.jpg" alt="" />
    </div>
      {/* //==================== */}

    </div>
  )
}

export default BMICalculater