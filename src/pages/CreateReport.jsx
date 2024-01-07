import React,{ useState } from 'react';
import { NavLink } from 'react-router-dom';
import {Appshell} from '../components/Appshell';
import Header from '../components/Header';
import { PencilSquareIcon } from '@heroicons/react/24/solid';
import FormContainer from '../components/FormContainer';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
const CreateReport = ()=> {
    const [file, setSelectedFile] = useState(null);
    const [loading,setLoading] = useState(false);
    const [values, setValues] = useState({
        id_client: '1',
        judulLaporan: '',
        lokasi: '',
        tanggal: '',
        isi: '',
        id_jenis_laporan: '',
    });
    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
    const onSubmit = async(event)=> {
        event.preventDefault();
        try{
            const formData = new FormData();
            formData.append('foto', file);
            formData.append('isi', values.isi);
            formData.append('id_client', values.id_client);
            formData.append('lokasi', values.lokasi);
            formData.append('tanggal', values.tanggal);
            formData.append('id_jenis_laporan', values.id_jenis_laporan);
            formData.append('judulLaporan', values.judulLaporan);
            console.log(formData);
            setLoading(true)
            const req = await axios.post(
                'http://localhost:5174/laporan/1',
                formData,
                {   
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Accept': 'application/json, application/xml, text/plain, text/html, *.*'
                    }
                }
            );
            console.log(req);
            setLoading(false)
            if(req.status == 201){
                alert('berhasil membuat laporan');
                setValues({
                    id_client: '1',
                    judulLaporan: '',
                    lokasi: '',
                    tanggal: '',
                    isi: '',
                    id_jenis_laporan: '',
                });

            }else{
                alert('gagal buat laporan');
            }
        }catch(err){
            alert('gagal buat laporan');
            setLoading(false)
            console.log(err)
        }
    }
    return(
        <Appshell>
            <Header 
                title="Buat Laporan"
                icon={ <PencilSquareIcon className="h-4 w-auto" /> }
            />
            <FormContainer
                title="Laporan"
                icon={ <PencilSquareIcon className="h-4 w-auto" /> }
            >
                <div className="flex gap-4 my-3">
                    <div className="w-2/6">
                        <p className="mb-4 py-2">Judul Laporan</p>
                        <p className="mb-4 py-2">Jenis Laporan</p>
                        <p className="mb-4 py-2">Lokasi Kejadian</p>
                        <p className="mb-4 py-2">Tanggal</p>
                        <p className="mb-4 py-2">Isi laporan</p>
                    </div>
                    <form className="w-full" onSubmit={onSubmit}>
                        <input type="text" className="bg-white border-[1px] rounded w-full mb-4 p-2" value={values.judulLaporan} onChange={(e)=>setValues({...values,judulLaporan: e.target.value})} placeholder="Judul Laporan" required/>
                        <input 
                            type="text" 
                            className="bg-white border-[1px] rounded w-full mb-4 p-2" 
                            // value={values.id_jenis_laporan} 
                            // onChange={(e)=>setValues({...values,id_jenis_laporan: e.target.value})} 
                            placeholder="Jenis Laporan" 
                            required
                        />
                        <input type="text" className="bg-white border-[1px] rounded w-full mb-4 p-2" value={values.lokasi} onChange={(e)=>setValues({...values,lokasi: e.target.value})} placeholder="Lokasi Kejadian" required/>
                        <input type="date" className="bg-white border-[1px] rounded w-full mb-4 p-2" value={values.tanggal} onChange={(e)=>setValues({...values,tanggal: e.target.value})} placeholder="" required/>
                        <textarea className="bg-white border-[1px] w-full mb-4 rounded p-2 h-40" placeholder='Isi laporan....' value={values.isi} onChange={(e)=>setValues({...values,isi: e.target.value})} ></textarea>
                        <input type="file" className="mb-4 w-full" onChange={handleFileChange}/>
                        <button type="submit" className={`${loading ? 'bg-blue-500': 'bg-green-500' }  text-white rounded border-[1px] border-green-500 hover:bg-white hover:text-green-500 transition ease-in-out flex w-32 h-10 justify-center items-center`}>{loading ? (<><CircularProgress size={25} sx={{color: "white"}}/></>) : 'Lapor'}</button>
                    </form>
                </div>
            </FormContainer>
        </Appshell>
    )
}
export default CreateReport;