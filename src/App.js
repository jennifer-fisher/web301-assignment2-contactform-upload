import React, {useState} from 'react';
import './App.css';
import Card from './components/Card/Card';
import Input from './components/Input/Input';
import Select from './components/Select/Select';
import Label from './components/Label/Label';
import Title from './components/Title/Title';
import Textarea from './components/Textarea/Textarea';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';


function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [flower, setFlower] = useState();
  const [message, setMessage] = useState("");
  const [openModal, setOpenModal] = useState(false);
  

  return (
    <div className="App">
    <Title title="Contact Me" />
    <Card>

    <div className='formatForm'>
      <Label label="Name: " />
      <Input onChange={e => setName(e.target.value)} />
      <p>{name}</p>
    </div>

    <br></br>

    <div className='formatForm'>
      <Label label="Email: " />
      <Input onChange={e => setEmail(e.target.value)} />
      <p>{email}</p>
    </div>

    <div className='formatForm'>
    <Label label="Pick your favourite flower:" />
    <Select />
    </div>

    <div className='formatForm'>
      <Label label="Message: " />
      <Textarea onChange={e => setMessage(e.target.value)} />
      <p>{message}</p>
    </div>

    {/* <Button  onClick={() => console.log(name, email, message)} buttonName="Submit" />  */}
    <Button handleClick={() => setOpenModal(!openModal)} buttonName="Submit" /> 

{openModal ? (
  <Modal name={name} email={email} flower={flower} message={message} />
  ) : ( <Label />
  )}
     
    </Card>
    </div>
  );
}

export default App;
