import React from "react";


const FormContainer = ({icon,title,children})=> {
    return(
        <div className="m-auto w-[80%] border-t-4 rounded-sm shadow-md border-yellow p-2 bg-white my-4">
        <div className="border-[1px] border-slate-200 p-3">
            <div className="border-b-[1px] pb-2">
                <p className="flex items-center gap-4">
                    {icon}
                    {title}
                </p>
            </div>
            {children}
        </div>
    </div>
    )
}
export default FormContainer;