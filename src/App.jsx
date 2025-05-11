
import axios from 'axios';
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function App() {

  let navigate = useNavigate()

  let data = (event) => {
    event.preventDefault();
    // console.log(event.target);

    axios.post("https://form-backend-by-py.onrender.com/api/website/user/register" , event.target)
    .then((ress)=>{
      console.log(ress);
      toast.success("registerd successfully")
      
      setTimeout(()=>{
        navigate("/data")
      },2000)

    })
    .catch((err)=>{
      console.log(err);
      toast.error("something went wrong");
      
    })


  }

  return (
    <>

<ToastContainer />

      <form className="max-w-lg shadow mb-8 mx-auto mt-8 p-5 rounded-2xl border" onSubmit={data} >

        {/* picture */}
        <div className="relative z-0 w-full  mb-3.5">
          <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="user_avatar">Upload profile picture</label>
          <input name='profilePicture'
            className="block w-full p-[10px_5px] text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:placeholder-gray-400 border-l-1" aria-describedby="user_avatar_help"
            id="user_avatar" type="file" />

        </div>


        {/* name */}
        <div className="relative z-0 w-full mb-5 group">
          <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=""  />
          <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
        </div>


        {/* email */}
        <div className="relative z-0 w-full mb-5 group">
          <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
          <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
        </div>


        {/* number */}
        <div className="relative z-0 w-full mb-5 group">
          <input type="number" name="contact" id="contact"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />

          <label htmlFor="contact"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Number</label>
        </div>


        {/* dob */}

        <div className="relative z-0 w-full mb-5 group">
          <label htmlFor="dob" className="text-gray-800 text-[14px]">DOB</label>
          <input type="date" name="dob" id="dob" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />

        </div>

        {/* address */}
        <div className="">

          <div className="w-full mx-auto mb-3">
            <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Address</label>
            <textarea name='address' id="address" rows="4" className=" resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Address..."></textarea>
          </div>

        </div>

        {/* gender */}
        <div className="">

          <legend className="">Gender</legend>

          <div className="flex gap-5">
            <div className="flex items-center mb-4">
              <input id="country-option-1" type="radio" name="gender" value="male" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="country-option-1" className="block ms-2  text-sm font-medium text-gray-900 ">
                Male
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input id="country-option-2" type="radio" name="gender" value="female" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="country-option-2" className="block ms-2 text-sm font-medium text-gray-900 ">
                Female
              </label>
            </div>
          </div>

        </div>

        {/* qualification */}
        <legend className=" capitalize mb-2.5">qualification</legend>
        <div className="mb-3.5 grid grid-cols-4">




          <div className="flex items-center mb-4">
            <input name='qualification' id="checkbox-1" type="checkbox" value="10" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="checkbox-1" className="ms-2 text-sm font-medium text-gray-900">10th</label>
          </div>

          <div className="flex items-center mb-4">
            <input name='qualification'  id="checkbox-2" type="checkbox" value="12" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="checkbox-2" className="ms-2 text-sm font-medium text-gray-900">12th</label>
          </div>

          <div className="flex items-center mb-4">
            <input name='qualification'  id="checkbox-3" type="checkbox" value="UG" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="checkbox-3" className="ms-2 text-sm font-medium text-gray-900">UG</label>
          </div>

          <div className="flex items-center mb-4">
            <input name='qualification'  id="checkbox-4" type="checkbox" value="PG" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="checkbox-4" className="ms-2 text-sm font-medium text-gray-900">PG</label>
          </div>



        </div>

        <button type='submit' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>


      </form>




    </>
  )
}

export default App
