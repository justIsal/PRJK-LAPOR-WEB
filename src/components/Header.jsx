import React from 'react';
import { format } from "date-fns";
import { id } from 'date-fns/locale';
const Header = ({icon,title})=> {
    const dates = format(new Date(), "dd MMMM yyyy", { locale: id });
    return(
        <div className="flex justify-between bg-white shadow-md w-full p-3">
            <div className="flex items-center gap-3 text-blue-600">
                {icon}
                <p>{title}</p>
            </div>
            <h3>{dates}</h3>
        </div>
    )
}
export default Header;