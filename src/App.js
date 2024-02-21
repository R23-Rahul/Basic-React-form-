
import './App.css';
import {useState} from 'react';
function App() {
  const [formData,setFormData]=useState({
  firstName:"",
  lastName:"",
  email:"",
  country:"India",
  streetAddress:"",
  city:"",
  state:"",
  postalcode:"",
  comments:false,
  candidates:false,
  offers:false,
  pushNotification:""
  })

  function changeHandler(event){
   const {name,value,checked,type}=event.target;
   setFormData((prev)=>({
    ...prev,
    [name]:type==="checkbox"? checked : value
  }))
  }

  function submitHandler(event){
event.preventDefault();
console.log("Finally printing the data");
console.log(formData);
  }
  return (
    <div className='top-container'>
      <form onSubmit={submitHandler}>
      <label htmlFor='firstName'>First Name</label>
      <br/>
        <input type="text"
        name='firstName'
        id='firstName'
        placeholder='First Name'
        value={formData.firstName}
        onChange={changeHandler}
        />
       <br/>
      
       <label htmlFor='LastName'>Last Name</label>
      <br/>
        <input type="text"
        name='lastName'
        id='lastName'
        placeholder='Last Name'
        value={formData.lastName}
        onChange={changeHandler}
        />

       <br/>
       <label htmlFor='email'>Email Address</label>
      <br/>
        <input type="email"
        name='email'
        id='email'
        placeholder='xyz123@gmail.com'
        value={formData.email}
        onChange={changeHandler}
        />


        <br/>
       <label htmlFor='country'>Country</label>
       <br/>
       <select
       name="country"
       id='country'
       value={formData.country}
       onChange={changeHandler}
       >
       <option>India</option>
       <option>United States</option>
       <option>Canada</option>
       <option>Mexico</option>
       </select>
       <br/>
       <label htmlFor='streetAddress'>Street Address</label>
      <br/>
        <input type="text"
        name='streetAddress'
        id='streetAddress'
        placeholder='124 Main st '
        value={formData.streetAddress}
        onChange={changeHandler}
        />
       <br/>
       <label htmlFor='city'>City</label>
      <br/>
        <input type="text"
        name='city'
        id='city'
        placeholder='Asansol '
        value={formData.city}
        onChange={changeHandler}
        />
       <br/>

       <label htmlFor='state'>State/Province</label>
      <br/>
        <input type="text"
        name='state'
        id='state'
        placeholder='West Bengal'
        value={formData.state}
        onChange={changeHandler}
        />
       <br/>
       <label htmlFor='postalcode'>Postal Code</label>
      <br/>
        <input type="text"
        name='postalcode'
        id='postalcode'
        placeholder='1234'
        value={formData.postalcode}
        onChange={changeHandler}
        />
       <br/>

      <fieldset>
        <legend>By email</legend>

      <div className='checking'>
      <input className='checkbox'
       id='comments'
        name='comments'
        type='checkbox'
        checked={formData.comments}
        onChange={changeHandler}
        />
        <div>
        <label htmlFor='comments'>Comments</label>
        <p>Get notified when someone posts a comment on a posting.</p>
        </div>
      </div>

      <div className='checking'>
      <input className='checkbox'
       id='candidates'
        name='candidates'
        type='checkbox'
        checked={formData.candidates}
        onChange={changeHandler}
        />
        <div>
        <label htmlFor='candidates'>Candidates</label>
        <p>Get notified when a candidate applies for a job.</p>
        </div>
      </div>

      <div className='checking'>
      <input className='checkbox'
       id='offers'
        name='offers'
        type='checkbox'
        checked={formData.offers}
        onChange={changeHandler}
        />
        <div>
        <label htmlFor='offers'>Offers</label>
        <p>Get notified when a candidate accept or rejects an offer.</p>
        </div>

      </div>
   
     
      </fieldset>
<fieldset>
        <legend>
          Push Notification
        </legend>
      <p>These are delivered via SMS to your mobile phone .</p>

       <div className='field'>
       <div className='btn'>
          <input  className='radio'
            type='radio'
            id='pushEverything'
            name='pushNotification'
            value='Everything'
            onChange={changeHandler}
          
            />
            <label htmlFor='pushEverything'>Everything</label>
            <br/>
        </div>

          <div className='btn'>
              <input className='radio'
              type='radio'
              id='pushemail'
              name='pushNotification'
              value='same as email'
              onChange={changeHandler}
            
              />
              <label htmlFor='pushemail'>Same as Email</label>
              <br/>
          </div>

            <div className='btn'>
              <input className='radio'
              type='radio'
              id='pushNotthing'
              name='pushNotification'
              value='no push notification'
              onChange={changeHandler}
            
              />
              <label htmlFor='pushNotthing'>No push Notification
              </label>
              </div>
       </div>

    </fieldset>

    <button>Save</button>
      </form>
    </div>
  );
}

export default App;
