import React, { useState } from 'react';
import Button from './ButtonDelete';

function ContactInfo({contact,onShow,onDelete,onEdit,onView}) {
   
    const [list,setList]=useState();
    return (
        <div onClick={onShow}>
            <ul>
                <span>{contact.firstName}{contact.lastName}</span>
                <li>{contact.phoneNumber}</li>
                <li>{contact.email}</li>
                <Button classes="btn--delete" btnTitle="Delete" onClick={()=>onDelete(contact.id)}/>
                {/* <Button classes="btn--Edit" btnTitle="Edit" onClick={()=>onEdit}/> */}
                <Button btnTitle="View" classes="btn--view" onClick={()=>onView(contact.id)}/>
            </ul> 
        </div>
    )

}


export default ContactInfo;