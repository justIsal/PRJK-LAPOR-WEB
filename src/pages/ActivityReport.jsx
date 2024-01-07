import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {Appshell} from '../components/Appshell';
import Header from '../components/Header';
import { ClipboardIcon } from '@heroicons/react/24/solid';
import CardReport from '../components/CardReport';
import axios from 'axios';
const array = [1,2,4]
const ActivityReport = ()=> {
    const [datas,setDatas]= useState(false);
    const [update,setUpdate]= useState(false);
    const fetchDataLapor =  async()=> {
        try{
            const req = await axios.get('http://localhost:5174/laporan');
            setDatas(req.data);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=> {
        fetchDataLapor();
    },[]);
    const updateLaporan = async(status,id_laporan,message)=> {
        try{
          const req = await axios.put(`http://localhost:5174/laporan/${id_laporan}`,{status: status})
          if(req.status == 201){
            console.log(req)
            alert('laporan'+message);
            fetchDataLapor();
          }
        }catch(err){
          console.log(err)
        }
      };
    return(
        <Appshell >
            <Header 
                title="Dashboard"
                icon={ <ClipboardIcon className="h-4 w-auto" /> }
            />
            <div className="my-10">
                {datas && datas.map(item=>(
                    <CardReport 
                        data={item} 
                        handleOnTerima={()=>updateLaporan(2,item.id_laporan,'diterima')}
                        handleOnTolak={()=>updateLaporan(0,item.id_laporan,'ditolak')}
                        key={update}
                    />
                ))}
            </div>
        </Appshell>
    )
}
export default ActivityReport;