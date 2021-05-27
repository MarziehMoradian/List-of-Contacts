import React,{useState} from 'react';
import ReactDOM from "react-dom";
import './App.css';
import Contacts from './components/Listcontacts';
import SaveInfo from './components/saveContact';
import Edit from './components/Editcomponents';
import SingleContant from './components/SingleContact';
import Search from './components/Search';

function App() {
  const [contactList,setContactList]=useState([
    {
        id:1,
        firstName:"Sara",
        lastName:"Hemat",
        phoneNumber:"01923333333",
        email:"saraaa@gmail.com"
    },
    {
        id:2,
        firstName:"Maryam",
        lastName:"Azadmanesh",
        phoneNumber:"01923333333",
        email:"maryam@gmail.com"
    },
    {
        id:3,
        firstName:"Ali",
        lastName:"Motaghi",
        phoneNumber:"01923333333",
        email:"Ali@gmail.com"
    },
    {
        id:4,
        firstName:"Nima",
        lastName:"Salehi",
        phoneNumber:"01923333333",
        email:"Nima@gmail.com"
    }
  ]) ;
 
  const [display,setDisplay]=useState(false);
  const handleShow=()=>{

  }
  const handleDelete=(contactId)=>{
    setContactList(contactList.filter((contact)=>contact.id !== contactId
    ))
  }
  const onSave=(contact)=>{
    let id = (Math.floor( Math.random()*100)) + 1;
    let newContact={...contact,id};
    setContactList([...contactList,newContact])
  }
  const onView=(contactId)=>{
    setContactList(contactList.filter((contact)=>contact.id === contactId
    ))
      setDisplay(true);
      console.log(contactId);
  }
  // const onEdit=(contactId)=>{
  //  const filter= contactList.filter((contact)=>contact.id !== contactId)
  //   if(filter){
  //     setFirstName(contactList.firstName)
  //     setLastName(contactList.lastName)
  //     setPhoneNumber(contactList.phoneNumber)
  //     setEmail(contactList.email)

  //   }
  //   console.log(filter);
  // }
  // const [firstName,setFirstName]=useState("");
  // const [lastName,setLastName]=useState("");
  // const [phoneNumber,setPhoneNumber]=useState("");
  // const [email,setEmail]=useState("");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  React.useEffect(() => {
    const results = contactList.filter(contact =>
      contact.firstName.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
    
      console.log(searchResults);
      setContactList(results);
      
  }, [searchTerm]);
  const [search, setSearch] = useState('')
  const handleSearch = (search) =>{
    setSearch(search)
  }

 
      return( 
        <div>

      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <Search onSearch={handleSearch} search={search} />
      {!display &&<Contacts  onDelete={handleDelete} contactList={contactList} showInfo={handleShow} search={search}  onView={onView} />}
      {!display &&<SaveInfo contact={contactList} saveContact={onSave}/>}
      {display &&<SingleContant  contactList={contactList}/>}
      {/* <form action="">
        <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
        <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} />
        <input type="number" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} />
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </form> */}
      {/* <Edit contactList={contactList}/> */}
    </div>
  );
}

export default App;
