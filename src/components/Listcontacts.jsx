import React,{useState} from 'react';
import ContactInfo from './contactInfo';
import Edit from './saveContact';



export default function ListContacts({contactList,showInfo,onDelete,onEdit,onView,search}) {
    
    const filterDatas = contactList.filter(contact => contact.firstName.toLocaleLowerCase().startsWith(search))
    const showDate=filterDatas.map((contact) =>(
        <ContactInfo key={contact.id} contact={contact} onShow={showInfo} onDelete={onDelete} onEdit={()=>onEdit(contact.id)} onView={onView}/>))
    return (
        <div>
            {showDate}
              
        </div>

        
    )
}
