import { useState } from 'react'
import { MutatingDots } from 'react-loader-spinner';
import { addDoc } from 'firebase/firestore';
import { employeeRef } from '../firebase/firebase';
import swal from 'sweetalert';


const NewEmployee = () => {
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        img: "",
        name: "",
        post: '',
        charges: '',
        exp: '',
        desc: ''
    })

    const newEmp = async () => {
        setLoading(true);
        try {
            await addDoc(employeeRef, form);
            swal({
                title: 'Succesfully Added',
                icon:'success',
                timer: 5000
            })
        }
        catch(err) {
            swal({
                title: err,
                icon:'error',
                timer: 5000
            })
        }
        setLoading(false);
    }


    return (
        <div className='bg-gradient-to-tr from-[#52616B] via-[#E3DFFD] to-[#97DEFF] w-full h-screen'>
            <section class="text-black body-font relative">
                <div class="container px-5 py-8 mx-auto">
                    <div class="flex flex-col text-center w-full mb-4">
                        <h1 class="sm:text-3xl text-xl font-medium title-font mb-4 ">
                            New Employee
                        </h1>
                    </div>


                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                        <div class="flex flex-wrap -m-2">

{/* Name  */}
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="name" class="leading-7 text-sm ">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>

{/* Post */}
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="email" class="leading-7 text-sm ">
                                        Post
                                    </label>
                                    <input
                                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        value={form.post}
                                        onChange={(e) => setForm({ ...form, post: e.target.value })}
                                    />
                                </div>
                            </div>

{/* Experience */}
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="email" class="leading-7 text-sm ">
                                        Experience
                                    </label>
                                    <input
                                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        value={form.exp}
                                        onChange={(e) => setForm({ ...form, exp: e.target.value })}
                                    />
                                </div>
                            </div>

{/* Charges */}
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="email" class="leading-7 text-sm ">
                                        Charges
                                    </label>
                                    <input
                                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        value={form.charges}
                                        onChange={(e) => setForm({ ...form, charges: e.target.value })}
                                    />
                                </div>
                            </div>


                            {/* <div class="p-2 w-full">
                                <div class="relative">
                                    <label for="message" class="leading-7 text-sm ">
                                        Image Link
                                    </label>
                                    <input type="file" name="ImageStyle" id=""
                                        value={form.img}
                                        // onSelect{...form, setForm({})}
                                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div> */}


{/* Image */}
                            <div class="p-2 w-full">
                                <div class="relative">
                                    <label for="message" class="leading-7 text-sm ">
                                        Image Link
                                    </label>
                                    <input
                                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        value={form.img}
                                        onChange={(e) => setForm({ ...form, img: e.target.value })}
                                    />

                                </div>
                            </div>

{/* Description */}
                            <div class="p-2 w-full">
                                <div class="relative">
                                    <label for="message" class="leading-7 text-sm ">
                                        Description
                                    </label>
                                    <textarea
                                        value={form.desc}
                                        onChange={(e) => setForm({ ...form, desc: e.target.value })}
                                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    ></textarea>
                                </div>
                            </div>


                            <div class="p-2 w-full flex justify-center">
                                <button onClick={newEmp} class="flex mx-auto text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg">
                                    {loading ? <MutatingDots height={30} color='white' /> : "submit"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NewEmployee