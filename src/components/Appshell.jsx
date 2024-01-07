import React, { useEffect } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  PencilSquareIcon,
  InboxIcon,
  PowerIcon,
  ClipboardDocumentIcon,
  HomeIcon,
  ClipboardIcon,
  UserIcon,
  UserPlusIcon,
  UsersIcon
} from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux'
import { setActiveNavLink } from "../redux/nav-slice";



export function Appshell({children}) {
  const isOpen = useSelector((state)=>state.activeLink.value);
  const name = JSON.parse(localStorage.getItem('user')).namaLengkap;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(isOpen);
  useEffect(()=> {
    setOpen(isOpen);
  },[isOpen])
  const handleOpen = (value) => {
    console.log(value)
    setOpen(open === value ? 0 : value);
  };
  const onClickLogout = ()=> {
    console.log('oe')
    const confirm = window.confirm("Are you sure you want to logout?");
    confirm ? navigate('/login') : ''
  }
  return (
    <div className="flex relative">
        <Card className="h-[calc(100vh)] w-full max-w-[20rem] rounded-none bg-gradient-to-b from-yellow to-[#dddd4d] shadow-xl shadow-blue-gray-900/5 fixed">
            <div className="w-full h-16 flex items-center pl-4 border-b-[1px] border-black">
                <Typography variant="h5" color="blue-gray">
                    LOGO
                </Typography>
            </div>
            <List>

                <NavLink to={'/'} className="flex items-center pl-4 gap-3 py-3 mb-1 text-black" onClick={() => dispatch(setActiveNavLink(0))}>
                    <ListItemPrefix>
                        <HomeIcon className="h-5 w-auto " />
                    </ListItemPrefix>
                    Dashboard
                </NavLink>
                <NavLink to={'/activityReport'} className="flex items-center pl-4 gap-3 py-3 mb-1 text-black" onClick={() => dispatch(setActiveNavLink(0))} >
                    <ListItemPrefix>
                        <ClipboardIcon className="h-5 w-auto" />
                    </ListItemPrefix>
                    Laporan kegiatan
                    <ListItemSuffix>
                        <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                    </ListItemSuffix>
                </NavLink>
                <Typography className="ml-4 text-[#858585]">
                    Menu laporan
                </Typography>
                <Accordion
                    open={open === 1}
                    icon={
                        <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                        />
                    }
                    onClick={() => dispatch(setActiveNavLink(1))} 
                    className="mb-3 text-black"
                    
                >
                    <ListItem className="p-0" selected={open === 1} >
                        <AccordionHeader onClick={() => handleOpen(1)}  className="border-b-0 p-3 flex pl-4 gap-3 py-3" >
                            <ListItemPrefix>
                                <InboxIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="mr-auto text-[1rem]">
                                Laporan
                            </Typography>
                        </AccordionHeader>
                    </ListItem>

                    <AccordionBody className="py-1">
                        <List className={`p-0  transition ease-in-out delay-150 ${open==1 ? '' : 'hidden'}`}>
                            

                            <NavLink  to={"/createReport"} className="flex items-center pl-7 py-3 mb-3">
                                <ListItemPrefix>
                                    <PencilSquareIcon strokeWidth={3} className="h-4 w-auto" />
                                </ListItemPrefix>
                                Buat laporan
                            </NavLink>
                            <NavLink  to={"/recapReport"} className="flex items-center pl-7 py-3 mb-3">
                                <ListItemPrefix>
                                    <ClipboardDocumentIcon strokeWidth={3} className="h-4 w-auto" />
                                </ListItemPrefix>
                                History laporan
                            </NavLink>

                        </List>
                    </AccordionBody>
                </Accordion>
                <Typography className="ml-4 text-[#858585]">
                    Menu user
                </Typography>
                <Accordion
                    open={open === 2}
                    icon={
                        <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                        />
                    }
                    onClick={() => dispatch(setActiveNavLink(2))}
                    className="text-black"
                >
                    <ListItem className="p-0" selected={open === 2}>
                        <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3 flex pl-4 gap-3 py-3 ">
                            <ListItemPrefix>
                                <UserIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="mr-auto text-[1rem]">
                                User manager
                            </Typography>
                        </AccordionHeader>
                    </ListItem>

                    <AccordionBody className="py-1">
                        <List className={`p-0  transition ease-in-out delay-150 ${open==2 ? '' : 'hidden'}`}>
                            <NavLink to={"/createUser"} className="flex items-center pl-7 py-3">
                                <ListItemPrefix>
                                    <UserPlusIcon  className="h-4 w-auto" />
                                </ListItemPrefix>
                                Tambah User
                            </NavLink>
                            <NavLink  to={"/listUser"} className="flex items-center pl-7 py-3 mb-3">
                                <ListItemPrefix>
                                    <UsersIcon className="h-4 w-auto" />
                                </ListItemPrefix>
                                List User
                            </NavLink>
                        </List>
                    </AccordionBody>
                </Accordion>

                <button className="flex items-center gap-2 px-6 py-2 mb-3 left-5 absolute bottom-2 border-[1px] border-black rounded transition ease-out hover:bg-yellow text-white hover:text-black bg-black" onClick={()=> onClickLogout()}>
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-auto" />
                    </ListItemPrefix>
                    Logout
                </button>
            </List>
        </Card>
        <div className="w-screen ml-[20rem]">
            <div className="bg-black h-16 text-white flex items-center gap-2 justify-end px-5">
                <span className="uppercase ">{name}</span> <UserCircleIcon className="h-11 w-auto" />
            </div>
            <div className="p-4">
                {children}
            </div>
        </div>
    </div>
  );
}