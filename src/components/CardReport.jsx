import React,{ useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import axios from 'axios';


const CardReport = ({data,handleOnTerima,handleOnTolak})=> {
  const { id_laporan, id_client, judulLaporan, id_jenis_laporan, lokasi, tanggal, isi, id_foto_kegiatan, id_video_kegiatan, status } = data;
  const [update,setUpdate]= useState(false)



  const statusReport = (value)=> {
    let status;
    switch (value){
			case 0:
				return status = {teks: 'Ditolak', color: 'bg-red-400'};
			case 1:
				return status = {teks: 'Pending', color: 'bg-green-400'}
			case 2:
				return status = {teks: 'Diterima', color: 'bg-blue-400'}
			default:
			  return status = {teks: 'pending', color: 'bg-green-400'}
		}
  };
  const textStatus = statusReport(status);
  return (
    <div className="w-[70%] m-auto flex" key={id_laporan}>
      <div className="flex gap-8">
        <div className="h-full w-[1px] bg-[#B5B5B5] flex items-center relative">
          <span className="w-8 h-8 bg-orange-400 absolute -left-[15px] border-bgColor  border-4 rounded-full"></span>
        </div>
        <div className="mb-16 bg-white p-4 relative shadow-md w-[65rem] rounded">
          <div className="my-2">
              <h1 className="text-[#5041FF] text-[20px] font-bold relative">{judulLaporan}<span className={`${textStatus.color} text-white p-1 text-[14px] absolute ml-3 -top-1 font-normal`}>{textStatus.teks}</span></h1>
              <p className="py-2 text-slate-500">{isi}</p>
          </div>
            <Accordion 
              elevation={0} 
            >
              <div className="w-full flex gap-6">
                <AccordionSummary
                    expandIcon={<ArrowDownCircleIcon className="h-4 w-3" />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    // className="w-20 bg-red-400"
                    sx={{backgroundColor: '#F6B704',width: '180px',color: '#fff',borderRadius: "5px"}}
                  >
                  <p>Detail lapporan</p>
                </AccordionSummary>
                <button className="w-[180px] bg-blue-500 rounded text-white">Hubungi Pelapor</button>
                {status==1 ? (
                  <>
                    <button className="w-[180px] bg-green-500 rounded text-white" onClick={handleOnTerima}>Terima Laporan</button>
                    <button className="w-[180px] bg-red-500 rounded text-white" onClick={handleOnTolak}>Tolak Lapporan</button>
                  </>
                ) : ('')}

              </div>

              <AccordionDetails sx={{p: '10px 0px'}}>
                <div className="w-full p-4 border-slate-300 border-[1px] rounded">
                  <div className="border-b-[1px] border-slate-300 mb-3 pb-3">
                    <p>Lokasi : {lokasi} </p>
                    <p className="mt-2">Pelapor : {id_client}</p>
                    <p className="mt-2">Tanggal : { tanggal }</p>
                  </div>
                  <p className="">Foto : </p>
                  <div className="flex gap-10 mt-2">
                    {id_foto_kegiatan && (
                      <>
                        <img src={`http://localhost:5174/foto_kegiatan/${id_foto_kegiatan}`} className="h-44 w-44" />
                        <img src={`http://localhost:5174/foto_kegiatan/${id_foto_kegiatan}`} className="h-44 w-44" />
                      </>
                    )}
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
        </div>

      </div>
    </div>
  );
}
export default CardReport;