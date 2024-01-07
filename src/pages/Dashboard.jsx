import React from 'react';
import { Link } from 'react-router-dom';
import {Appshell} from '../components/Appshell';
import Header from '../components/Header';
import { HomeIcon,DocumentCheckIcon,ArchiveBoxArrowDownIcon,XMarkIcon } from "@heroicons/react/24/solid";
import Tables from '../components/Table';
import axiosJwt from '../api/interceptors';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';


const Dashboard = ()=> {
    const [userLength,setuserLength] = useState('');
    const [laporan,setLaporan] = useState('');
    const [laporReceiveLength,setlaporReceiveLength] = useState('');
    const [laporRejectLength,setlaporRejectLength] = useState('');

    const [loading,setLoading] = useState(false);
    const [loadings,setLoadings] = useState(false);
    const dataCard = [
        {
            title: 'Anggota terdaftar',
            total: loading ? '0' : userLength,
            icon: <HomeIcon className="h-10 w-auto" />,
            color: 'bg-red-500',
            path: '/listUser'
        },
        {
            title: 'Total Laporan Diterima',
            total: loadings ? '0' : laporReceiveLength,
            icon: <DocumentCheckIcon className="h-10 w-auto" />,
            color: 'bg-blue-500',
            path: '/recapReport'
        },
        {
            title: 'Total Laporan Ditolak',
            total: loadings ? '0' : laporRejectLength,
            icon: <XMarkIcon className="h-10 w-auto" />,
            color: 'bg-green-500',
            path: '/recapReport'
        },
        {
            title: 'Laporan Masuk',
            total: loadings ? '0' : laporan.length,
            icon: <ArchiveBoxArrowDownIcon className="h-10 w-auto" />,
            color: 'bg-blue-700',
            path: '/activityReport'
        },
    ]
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

    const fetchDataUser = async()=> {
        try{
            setLoading(true)
            const ress = await axiosJwt.get('/user');
            console.log(ress)
            setLoading(false)
            if(ress.status == 200){
                setuserLength(ress.data.length);
            }
        }catch(err){
            console.log(err);
            setLoading(false)
        }
    };
    const fetchDataLapor = async()=> {
        try{
            setLoadings(true)
            const ress = await axiosJwt.get('/laporan');
            console.log(ress)
            setLoadings(false)
            if(ress.status == 200){
                const terima = ress.data.filter(item=>item.status == true);
                const tolak = ress.data.filter(item=>item.status == false);
                setLaporan(ress.data);
                setlaporReceiveLength(terima.length)
                setlaporRejectLength(tolak.length)
            }
        }catch(err){
            console.log(err);
            setLoadings(false)
        }
    };
    useEffect(()=> {
        fetchDataUser();
        fetchDataLapor();
    },[])

    return(
        <Appshell>
            <Header 
                title="Dashboard"
                icon={ <HomeIcon className="h-4 w-auto" /> }
            />
            <div className="flex w-full gap-4 my-4">
                {dataCard.map((item,index)=> (
                    <Link to={'/'} className={`w-1/3 rounded-md ${item.color} flex justify-between items-center text-white p-4 shadow-md`}>
                        <div>
                            <p className="text-slate-200">{item.title}</p>
                            <h3 className="text-3xl transition ease-in-out">{item.total}</h3>
                        </div>
                        {item.icon}
                    </Link>
                ))}

            </div>
            <Tables 
                data={laporan || []}
                columns={columns}
                title={'Dashboard'}
            />
        </Appshell>
    )
}
export default Dashboard;