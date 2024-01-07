import React,{ useState, useEffect }  from 'react';
import { NavLink } from 'react-router-dom';
import {Appshell} from '../components/Appshell';
import Header from '../components/Header';
import { HomeIcon,ClipboardDocumentIcon } from '@heroicons/react/24/solid';
import Tables from '../components/Table';
import axios from 'axios';


const RecapReport = ()=> {
    const [laporan, setLaporan] = useState([])
    const getData = async()=> {
        try{
            const req = await axios.get('http://localhost:5174/laporan');
            setLaporan(req.data || []);
            console.log(req)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=> {
        getData();
    },[]);
    const columns = [
        {
         name: "id_client",
         label: "ID User",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "judulLaporan",
         label: "Judul laporan",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "lokasi",
         label: "lLkasi",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "tanggal",
         label: "Tanggal",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "status",
         label: "Status",
         options: {
          filter: true,
          sort: false,
          customBodyRender : (value) => {
            return value ? (<div className="flex"><p className="text-white  bg-blue-500 px-2">Diterima</p></div>) : (<div className="flex"><p className="text-white bg-red-500 px-2">Ditolak</p></div>) ;
          }
         }
        },
       ];
       
    return(
        <Appshell>
            <Header 
                title="Histori laporan"
                icon={ <ClipboardDocumentIcon className="h-4 w-auto" /> }
            />
            <Tables
                data={laporan}
                columns={columns}
                title={'Laporan'}
            />
        </Appshell>
    )
}
export default RecapReport;