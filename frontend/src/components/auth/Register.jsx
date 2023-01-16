import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../actions/userActions';
import logo from '../../media/logo.png';


const Register = ({ location, history }) => {

    useEffect(() => {
        document.title = 'Tech con Agust | Registro'
      }, []);
    
      const [email, setEmail] = useState('');
      const [username, setUsername] = useState('');
      const [name, setName] = useState('');
      const [password, setPassword] = useState('');
      const [re_password, setRePassword] = useState('');
      const [message, setMessage] = useState('');
      const [exito, setExito] = useState('');
    
    
      const dispatch = useDispatch()
    
      const redirect = location.search ? location.search.split('=')[1] : '/';
    
      const userRegister = useSelector(state => state.userRegister);
      const { error, loading, success } = userRegister;
    
    

    
      const submitHandler = (e) => {
        e.preventDefault();
    
        if (password !== re_password) {
          setMessage('Passwords must match ');
        } else {
          setExito(`Verifica tu Correo en ${email}`)
        }
      }
    
      useEffect(() => {
        if (success) {
          setExito(`Verifica tu Correo en ${email}`)
        }
      }, [history, success]);

      

    return (

        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className=' m-5 p-10 bg-grey-3'>
                <div className="w-full max-w-md space-y-8 ">
                    <div >
                        <img
                            className="mx-auto h-12 w-auto"
                            src={logo}
                            alt="Your Company"
                        />
                        <h2 className="mt-6 text-center text-3xl font-mono  text-grey">
                            Crea una Cuenta
                        </h2>
                    </div>
                    <form onSubmit={submitHandler} className="mt-8 space-y-6" action="#" method="POST">

                        <div className="">
                            <div className='mb-2'>

                                <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    required
                                    class="bg-grey-2 w-full py-4 pl-10 pr-4 rounded-lg text-grey placeholder:font-mono outline-none "
                                    placeholder="Correo Electronico"
                                />
                            </div>

                            <div className='mt-7'>

                                <input
                               value={username}
                               onChange={(e) => setUsername(e.target.value)}
                                    type="text"
                                    autoComplete="email"
                                    required
                                    class="bg-grey-2 w-full py-4 pl-10 pr-4 rounded-lg text-grey placeholder:font-mono outline-none "
                                    placeholder="Nombre de usuario"
                                />
                            </div>

                            <div className='mt-7'>

                                <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}

                                    type="text"
                                    required
                                    class="bg-grey-2 w-full py-4 pl-10 pr-4 rounded-lg text-grey placeholder:font-mono outline-none "
                                    placeholder="Nombre y Apellido"
                                />
                            </div>

                            <div className='mt-7'>

                                <input
                                 value={password}
                                 onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    required
                                    class="bg-grey-2 w-full py-4 pl-10 pr-4 rounded-lg text-grey placeholder:font-mono outline-none "
                                    placeholder="Contraseña"
                                />
                            </div>

                            <div className='mt-7'>

                                <input
                                 value={re_password}
                                 onChange={(e) => setRePassword(e.target.value)}
                                    type="password"
                                    required
                                    class="bg-grey-2 w-full py-4 pl-10 pr-4 rounded-lg text-grey placeholder:font-mono outline-none "
                                    placeholder="Confirmar Contraseña"
                                />
                            </div>

                        </div>

                        <div className='items-center'>
                            <button
                                type="submit"
                                className=" space-x-2 block w-full transition-colors  text-grey-3  bg-orange hover:bg-yellow font-bold font-mono rounded-lg p-3 px-10"
                            >

                                Crear Cuenta
                            </button>
                        </div>
                    </form>
                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <a style={{ textDecoration: 'none' }} href="/register" className="text-mono font-mono text-grey ">
                                Tienes una cuenta?
                                <span className='hover:text-orange ml-2 transition-colors'>
                                    Inicia Session aqui!
                                </span>

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Register