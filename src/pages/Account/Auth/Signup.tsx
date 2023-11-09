import React, { useState } from 'react';
import { account, ID } from "../../../lib/appwrite/appwrite";


const Signup = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('')

  async function login(email: string, password: string) {
    await account.createEmailSession(email, password);
    setLoggedInUser(await account.get());
  }

  return (
    <div>
      <form>
        <input type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
        <input type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button
          type="button"
          onClick={async () => {
            await account.create(ID.unique(), email, password, firstName, lastName);
            login(email, password);
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Signup;