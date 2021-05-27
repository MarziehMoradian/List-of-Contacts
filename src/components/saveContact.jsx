import React,{useState} from 'react';
import Button from './ButtonDelete';

export default function SaveContact({saveContact,contact}) {
    const [firstName,setFirstName]=useState(contact.firstName);
    const [lastName,setLastName]=useState(contact.lastName);
    const [phoneNumber,setPhoneNumber]=useState(contact.phoneNumber);
    const [email,setEmail]=useState(contact.email);
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!firstName  || !phoneNumber){
           alert("fill all input ,please") ;
           return;
        }
        saveContact({firstName,lastName,phoneNumber,email})
        setFirstName(contact.firstName);
        setLastName(contact.lastName);
        setPhoneNumber(contact.phoneNumber);
        setEmail(contact.email)
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
                <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                <input type="number" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <button type="submit" className="btn--save"  >Save</button>
            </form>
        </div>
    )
}
