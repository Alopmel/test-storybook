import React from 'react';
import './tabs.css';
import { LuUserCog } from "react-icons/lu";
import { MdOutlineTheaterComedy } from "react-icons/md";
import { LuGlasses } from "react-icons/lu";
import { PiUserListLight } from "react-icons/pi";

export const Tabs = ({currentTabs}) => {

  return (
    <div className='tabs-container'>
        <div>
            <div className='tabs'>
                <button
                    className='button-tabs-active' 
                    id='1'
                    currentTabs={currentTabs}>
                    <div>
                        <LuUserCog fontSize='20px' />
                    </div>                
                    Gestionar Beneficiarios
                </button>
                <button
                    className='button-tabs' 
                    id='2'
                    currentTabs={currentTabs}>
                    <div>
                        <MdOutlineTheaterComedy  fontSize='20px'  />
                    </div>
                    Gestionar Excepciones
                </button>
                <button
                    className='button-tabs' 
                    id='3'
                    currentTabs={currentTabs}>
                    <div>
                        <LuGlasses  fontSize='20px' />
                    </div>
                    ¿Quién tiene qué?
                </button>
                <button
                    className='button-tabs' 
                    id='4'
                    currentTabs={currentTabs}>
                    <div>
                        <PiUserListLight  fontSize='20px' />
                    </div>
                    Dar Acceso
                </button>
            </div>
            <div>
                <div className='content-tabs'>
                    <input className='tabs-input' type="text" value='Nº Emp.'/>
                    <input className='tabs-input' type="text" value='Nombre'/>
                </div>
                <div className='content-tabs'>
                    <input className='tabs-input' type="text" value='Primer Apellido'/>
                    <input className='tabs-input' type="text" value='Segundo Apellido'/>
                </div>
                <div className='tabs-content-select'>
                    <div >
                        <label className="tabs-label-search">Estado</label>
                        <select className='tabs-select-search'>
                            <option> Pendientes</option>
                            <option>option 1</option>
                            <option>option 2</option>
                        </select>
                    </div>
                    <div className='tabs-content-search'>
                        <label className="tabs-label-search">Usuarios por página</label>
                        <select className='tabs-select-search left'>
                            <option> 10</option>
                            <option>option 1</option>
                            <option>option 2</option>
                        </select>
                    </div>
                </div>
                
            </div>
            <div className="tabs-table">
                
            </div>
        </div>   
    </div>
  )
}
