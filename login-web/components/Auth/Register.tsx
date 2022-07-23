import axios from 'axios';
import { ChangeEvent, FC, useState } from 'react';

import classes from './styles/Register.module.css';

export const RegisterComponent: FC = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleForm = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const test = async () => {
    const res = await axios.get('/products/3');
    console.log(res);
  };

  return (
    <div className={classes.container}>
      <div className={classes.formContainer}>
        <form onSubmit={() => {}}>
          <label htmlFor='email'>Ingrese Email</label>
          <input
            placeholder='Ingrese su email'
            id='email'
            value={values.email}
            name='email'
            onChange={handleForm}
          />
          <label htmlFor='password'>Ingrese Contraseña</label>
          <input
            placeholder='Ingrese su contraseña'
            id='password'
            type='password'
            value={values.password}
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
          <button onClick={test}>Crear Cuenta</button>
        </form>
      </div>
    </div>
  );
};
