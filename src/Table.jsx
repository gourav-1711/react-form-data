import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

export default function Table() {


    let [apiData, setApiData] = useState([])

    // api data
    let apiFun = () => {

        axios.get("https://form-backend-by-py.onrender.com/api/website/user/getuser")
            .then((ress) => {
                setApiData(ress.data.data)
                // console.log(ress.data.data);

            })
            .catch((err) => {
                console.log(err);

            })

    }


    // user delete
    let userDel = (id) => {
        console.log(id);
        axios.delete(`https://form-backend-by-py.onrender.com/api/website/user/single-user-delete/${id}`)
            .then((ress) => {
                console.log(ress);
                toast.success("user deleted succesfully")

            })
            .catch((err) => {
                console.log(err);

            })
        console.log(id);

    }


    let [allId, setAllId] = useState([])
    // selected id
    let checkedInputData = (e) => {
        let { value, checked } = e.target
        console.log(value, checked);

        if (checked) {
            setAllId(old => [...old, value])
        }
        else {
            let newIds = allId.filter((v) => {
                if (value != v) {
                    return v
                }

            })
            setAllId(newIds)
        }

    }


    // selected delete
    let selectDel = () => {
        axios.post("https://form-backend-by-py.onrender.com/api/website/user/seleted-user-delete", allId)
            .then((ress) => {
                console.log(ress);
                toast.success("user deleted succesfully")

            })
            .catch((err) => {
                console.log(err);

            })
    }


    let allInputChecked = (e) => {
        console.log(e.target.checked);

        if (e.target.checked) {
            let newAllIds = apiData.map((v, i) => {
                return v._id
            })
            setAllId(newAllIds)
        }
        else {
            setAllId([])
        }


    }

    useEffect(() => {
        apiFun()

    }, [apiData])



    // modal function
    let [modal, setModal] = useState(false)

    let [modalData, setModalData] = useState({})

    let edit = (value) => {
        console.log(value);
        setModalData(value)

        setModal(true)
    }

    return (
        <>
            <ToastContainer />

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-[100%] mx-auto p-3">
                <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white ">
                    <div>
                        <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5" type="button">
                            <span className="sr-only">Action button</span>
                            Action

                        </button>
                        {/* <!-- Dropdown menu --> */}
                        <div id="dropdownAction" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                                <li>
                                    <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                                </li>
                                <li>
                                    <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                                </li>
                                <li>
                                    <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
                                </li>
                            </ul>
                            <div className="py-1">
                                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
                            </div>
                        </div>
                    </div>
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">

                        </div>
                        <input type="text" id="table-search-users" className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search for users" />
                    </div>
                </div>

                {/* table */}
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr className=''>
                            <th scope="col" className="">
                                <div className="flex items-center">
                                    <input onChange={allInputChecked}
                                        id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                </div>
                            </th>
                            {/* <th>
                                profile picture
                            </th> */}
                            <th className='px-2 '>
                                Name and Email
                            </th>
                            <th className='px-2'>
                                DOB
                            </th>
                            <th className='px-2'>
                                gender
                            </th>
                            <th className='px-2'>
                                qualification
                            </th>
                            <th className='px-2'>
                                contact
                            </th>
                            <th className='px-2' >
                                address
                            </th>
                            <th className='px-2'>
                                <button onClick={selectDel}
                                    className=' bg-red-600 p-[5px_20px] rounded-[8px] text-white shadow hover:bg-red-500 cursor-pointer duration-150 hover:text-shadow-2xs capitalize text-[18px] '>Delete</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {

                            apiData.length > 0 ?
                                apiData.map((v, i) => {
                                    return (

                                        <tr key={i} className="bg-white border-b border-gray-200 hover:bg-gray-50 ">
                                            <td className="w-4 p-4">
                                                <div className="flex items-center">
                                                    <input onChange={(e) => checkedInputData(e)} value={v._id}
                                                        checked={allId.includes(v._id)}
                                                        id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                                </div>
                                            </td>
                                            <td scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                                                <img className="w-10 h-10 rounded-full" src={`https://form-backend-by-py.onrender.com/uploads/${v.profilePicture}`} alt="Jese image" />
                                                <div className="ps-3">
                                                    <div className="text-base font-semibold"> {v.name} </div>
                                                    <div className="font-normal text-gray-500"> {v.email} </div>
                                                </div>
                                            </td>
                                            <td>
                                                {v.dob}
                                            </td>
                                            <td className="">
                                                {v.gender}
                                            </td>
                                            <td>
                                                {
                                                    v.qualification
                                                }
                                            </td>
                                            <td>
                                                {v.contact}
                                            </td>
                                            <td className="">
                                                <div className="flex items-center w-36">
                                                    {
                                                        v.address
                                                    }
                                                </div>
                                            </td>
                                            <td className="">
                                                {/* <!-- Modal toggle --> */}
                                                <button onClick={() => edit(v)} type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">Edit user</button>

                                                {/* delete btn */}
                                                <button onClick={() => userDel(v._id)} className='text-red-600 block capitalize hover:underline font-bold cursor-pointer'> delete</button>
                                            </td>
                                        </tr>
                                    )
                                })

                                :
                                <tr>
                                    <td>
                                        no user
                                    </td>
                                </tr>
                        }


                    </tbody>
                </table>


                {/* modal  */}

                {modal &&
                    <ModalDiv value={modalData} setModal={setModal} modal={modal} />}

            </div>

        </>
    )
}

let ModalDiv = ({ value, setModal, modal }) => {





    // edit function

    let editForm = (e) => {
        e.preventDefault();


        // new object 
        let editObj = {
            name: e.target.name.value,
            email: e.target.email.value,
            contact: e.target.contact.value,
            gender: e.target.gender.value,
            profilePicture: e.target.profilePicture.value,
            address: e.target.address.value,
            dob: e.target.dob.value,
            qualification: e.target.qualification.value,
        }

        // console.log(event.target);

        axios.put(`https://form-backend-by-py.onrender.com/api/website/user/update-user/${value._id}`, editObj)
            .then((ress) => {
                console.log(ress);
                toast.success("user edited")
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <ToastContainer />

            <div id="editUserModal" tabIndex="-1" className={` ${modal ? "block" : "hidden"} fixed top-0 left-0 right-0 z-50 items-center justify-center  w-full overflow-y-scroll  md:inset-0 `}>
                <div
                    onClick={() => setModal(false)}
                    className="z-50 cursor-pointer font-bold text-2xl absolute top-10 left-[75%] md:left-[65%] ">
                    X
                </div>
                {/* form */}
                <form onSubmit={editForm} className=" bg-white max-w-lg shadow mb-8 mx-auto mt-8 p-5 rounded-2xl border"  >

                    {/* picture */}
                    <div className="relative z-0 w-full  mb-3.5">
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="user_avatar">Upload profile picture</label>
                        <input name='profilePicture'
                            className="block w-full p-[10px_5px] text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:placeholder-gray-400 border-l-1" aria-describedby="user_avatar_help"
                            id="user_avatar" type="file" />

                    </div>


                    {/* name */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input defaultValue={value.name}
                            type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
                        <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                    </div>


                    {/* email */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input defaultValue={value.email}
                            type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>


                    {/* number */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input defaultValue={value.contact} type="number" name="contact" id="contact"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />

                        <label htmlFor="contact"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Number</label>
                    </div>


                    {/* dob */}

                    <div className="relative z-0 w-full mb-5 group">
                        <label htmlFor="dob" className="text-gray-800 text-[14px]">DOB</label>
                        <input type="date" name="dob" id="dob" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />

                    </div>

                    {/* address */}
                    <div className="">

                        <div className="w-full mx-auto mb-3">
                            <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Address</label>
                            <textarea defaultValue={value.address} name='address' id="address" rows="4" className=" resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Address..."></textarea>
                        </div>

                    </div>

                    {/* gender */}
                    <div className="">

                        <legend className="">Gender</legend>

                        <div className="flex gap-5">
                            <div className="flex items-center mb-4">
                                <input
                                    defaultChecked={value.gender}
                                    id="country-option-1" type="radio" name="gender" value="male" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="country-option-1" className="block ms-2  text-sm font-medium text-gray-900 ">
                                    Male
                                </label>
                            </div>

                            <div className="flex items-center mb-4">
                                <input
                                    defaultChecked={value.gender}
                                    id="country-option-2" type="radio" name="gender" value="female" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
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
                            <input name='qualification' id="checkbox-2" type="checkbox" value="12" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="checkbox-2" className="ms-2 text-sm font-medium text-gray-900">12th</label>
                        </div>

                        <div className="flex items-center mb-4">
                            <input name='qualification' id="checkbox-3" type="checkbox" value="UG" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="checkbox-3" className="ms-2 text-sm font-medium text-gray-900">UG</label>
                        </div>

                        <div className="flex items-center mb-4">
                            <input name='qualification' id="checkbox-4" type="checkbox" value="PG" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="checkbox-4" className="ms-2 text-sm font-medium text-gray-900">PG</label>
                        </div>



                    </div>

                    <button type='submit' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>


                </form>
            </div>

        </>
    )
}
