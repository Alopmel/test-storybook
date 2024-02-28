import React from 'react'
import './modal.css'
import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

export const Modal = ({isOpen}) => {
    //const isOpen = isOpen ? 'storybook-modal--open' : 'storybook-modal--close';
    return (
    <div className='modal-container'>
        <div className='modal-content'>
            <div className='modal-close'>
                <IoMdClose fontSize='20px'/>
            </div>
            <h1>Buscar empleado</h1>
            <div className='modal-content-search'>
                <label className="modal-label-search">Tipo de Búsqueda</label>
                <select className='modal-select-search'>
                    <option> Buscar por código</option>
                    <option>option 1</option>
                    <option>option 2</option>
                </select>
            </div>
            <div className='modal-content-input'>
                <div>
                    <input className='modal-input' type="text" value='Código'/>
                </div>
                <div className='modal-content-button'>
                    <button className='modal-button'><IoIosSearch color='white' fontSize='20px'/></button>
                </div>
            </div>            
        </div>
    </div>

  )
}

