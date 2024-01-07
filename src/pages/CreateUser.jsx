import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {Appshell} from '../components/Appshell';
import Header from '../components/Header';
import { UserPlusIcon,UserIcon } from '@heroicons/react/24/solid';
import FormContainer from '../components/FormContainer';
import axios from 'axios';
import ListUser from './ListUser';
import { CircularProgress } from '@mui/material';

const CreateUser = ()=> {
    const [values,setValues]= useState({
        namaLengkap: "",
        email: "",
        password: "",
        noHp: "",
        jenisKelamin: "",
        NIK: "",
        domisili: "",
        alamatLengkap: "",
        pekerjaan: ""
    });
    // const [update,setUpdate] = useState(false);
    const [loading,setLoading] = useState(false);
    const onSubmit = async(event)=> {
        event.preventDefault();
        try{
            setLoading(true)
            const res = await axios.post('http://localhost:5174/user',values);
            console.log(res)
            setLoading(false)
            if(res.status == 201) {
                alert('berhasil tambah user');
                setValues({
                    namaLengkap: "",
                    email: "",
                    password: "",
                    noHp: "",
                    jenisKelamin: "",
                    NIK: "",
                    domisili: "",
                    alamatLengkap: "",
                    pekerjaan: ""
                })
                // setUpdate(prevState => !prevState)
            }else{
                alert('gagal menambahkan user')
            }
        }catch(err){
            alert('gagal menambahkan user');
            setLoading(false);
        }
    }
    return(
        <Appshell>
            <Header 
                title="Tambah User"
                icon={ <UserPlusIcon className="h-4 w-auto" /> }
            />
            <FormContainer
                title="User Registration"
                icon={ <UserPlusIcon className="h-4 w-auto" /> }
            >
                <div className="flex my-3">
                    <div className="w-2/6">
                        <p className="mb-4 py-2">Nama Lengkap</p>
                        <p className="mb-4 py-2">No hp</p>
                        <p className="mb-4 py-2">Email</p>
                        <p className="mb-4 py-2">Jenis kelamain</p>
                        <p className="mb-4 py-2">NIK</p>
                        <p className="mb-4 py-2">Domisili</p>
                        <p className="mb-[30px] py-2">Pekjerjaan</p>
                        <div className="w-full border-t-2 mt-4">
                            <p className="mb-4 py-2">Password Login</p>
                        </div>
                    </div>
                    <form className="w-full" onSubmit={onSubmit}>
                        <input 
                            type="text" 
                            className="bg-white border-[1px] rounded w-full mb-4 p-2"
                            placeholder="Nama lengkap" 
                            required
                            value={values.namaLengkap}
                            onChange={(e)=> setValues({...values, namaLengkap: e.target.value}) }
                        />
                        <input
                            type="number" 
                            className="bg-white border-[1px] rounded w-full mb-4 p-2"  
                            placeholder="NoHP" 
                            required
                            value={values.noHp}
                            onChange={(e)=> setValues({...values, noHp: e.target.value}) }
                        />
                        <input 
                            type="email" 
                            className="bg-white border-[1px] rounded w-full mb-4 p-2"  
                            placeholder="Email" 
                            required
                            value={values.email}
                            onChange={(e)=> setValues({...values, email: e.target.value}) }
                        />
                        <input 
                            type="text" 
                            className="bg-white border-[1px] rounded w-full mb-4 p-2"  
                            placeholder="Jenis kelamin" 
                            required
                            value={values.jenisKelamin}
                            onChange={(e)=> setValues({...values, jenisKelamin: e.target.value}) }
                        />
                        <input 
                            type="text" 
                            className="bg-white border-[1px] rounded w-full mb-4 p-2"  
                            placeholder="NIK" 
                            required
                            value={values.NIK}
                            onChange={(e)=> setValues({...values, NIK: e.target.value}) }
                        />
                        <input 
                            type="text" 
                            className="bg-white border-[1px] rounded w-full mb-4 p-2"  
                            placeholder="Domisili" 
                            required
                            value={values.domisili}
                            onChange={(e)=> setValues({...values, domisili: e.target.value}) }
                        />
                        <input 
                            type="text" 
                            className="bg-white border-[1px] rounded w-full mb-4 p-2"  
                            placeholder="Pekerjaan"
                            required
                            value={values.pekerjaan}
                            onChange={(e)=> setValues({...values, pekerjaan: e.target.value}) }
                        />

                        <div className="w-full border-t-2 py-3">
                            <input 
                                type="password" 
                                className="bg-white border-[1px] rounded w-full mb-4 p-2"  
                                placeholder="Password" 
                                required
                                value={values.password}
                                onChange={(e)=> setValues({...values, password: e.target.value}) }
                            />
                            <button type="submit" className={`${loading ? 'bg-blue-500': 'bg-green-500' }  text-white rounded border-[1px] border-green-500 hover:bg-white hover:text-green-500 transition ease-in-out flex w-32 h-10 justify-center items-center`}>{loading ? (<><CircularProgress size={25} sx={{color: "white"}}/></>) : 'Register'}</button>
                        </div>
                    </form>
                </div>
            </FormContainer>
            {/* <div>
                <ListUser key={update} />
            </div> */}
        </Appshell>
    )
}
export default CreateUser;