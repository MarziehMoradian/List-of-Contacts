import React from 'react';
import ContactInfo from './contactInfo';

export default function SingleContact({contactList,contId,onDelete,showInfo,onEdit}) {
    return (
        <div>
           {contactList.map(contact =>(contact.id!==contId ?<ContactInfo    key={contact.id} contact={contact} onShow={showInfo} onDelete={onDelete} onEdit={()=>onEdit(contact.id)} />:"not found"))} 
        </div>
    )
}
