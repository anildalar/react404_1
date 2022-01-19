import React, { useState } from 'react';

export default function Register() {
    //1. State
    const [ username , setUsername] = useState('A')
    const [ email , setEmail] = useState('b@gmail.com')
    const [ password , setPassword] = useState('C')


    // localhost:1337/auth/local/register
    //2Functions

    //3. Return statements
    return (
        <form>
            <input type="text" name="username" value={username} /> <br/>
            <input type="email" name="email" value={email} /><br/>
            <input type="password" name="password" value={password} /><br/>
            <input type="submit" name="Submit" /><br/>

        </form>
    );
}
