import { ChangeEvent, FC, FormEvent, useState } from 'react';
import clientApi from '../../config/axios';

import classes from './styles/Register.module.css';

export const RegisterComponent: FC = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleForm = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await clientApi.get('/products/3');
    console.log(res);
  };

  return (
    <div className={classes.container}>
      <div className={classes.formContainer}>
        <form onSubmit={handleSubmit}>
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
          <button type='submit'>Crear Cuenta</button>
        </form>
      </div>
    </div>
  );
};
