import { useState } from 'react';
import emailjs from '@emailjs/browser'

import '../src/css/global.css'
import '../src/css/styles.css'

function App() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [title, setTitle] = useState('')

  function sendEmail(e) {
    e.preventDefault()

    if (name === '' || email === '' || title === '' || message == '') {
      alert('preencha todos os campos')
      return
    }

    const templateParams = {
      from_name: name,
      email: email,
      title: title,
      message: message
    }

    emailjs.send('service_vl6heve', 'template_2d52467', templateParams, 'vkJONRtaliQbsr39T').then((response) => {
      console.log('email enviado', response.status, response.text)
      setName('')
      setEmail('')
      setTitle('')
      setMessage('')
    }, (error) => {
      console.log('error: ', error)
    })
  }

  return (
    <div className='container'>
      <form onSubmit={sendEmail}>

        <h1>Send Email</h1>
        <label>
          Name:
          <input type="text" name="name" placeholder='Name'
            onChange={(e) => setName(e.target.value)}
            value={name} />
        </label>

        <label>
          E-mail:
          <input type='email' name='email' placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            value={email} />
        </label>

        <label>
          Title:
          <input type="text" name="name" placeholder='Title'
            onChange={(e) => setTitle(e.target.value)}
            value={title} />
        </label>


        <label>
          Message:
          <textarea placeholder='write your message'
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </label>

        <input className='button-submit' type="submit" value="Submit" />
      </form>


    </div >
  );
}

export default App;
