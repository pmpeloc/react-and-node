import { ChangeEvent, FC, FormEvent, useState } from 'react';
import clientApi from '../../config/axios';
import { Spinner } from '../ui';

import classes from './styles/Register.module.css';

export const LoginComponent: FC = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleForm = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { data } = await clientApi.post('/users', {
      email: values.email,
      password: values.password,
    });
    setLoading(false);
    console.log(data);
  };

  const Form: FC = () => {
    return (
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
          {loading ? (
            <Spinner />
          ) : (
            <button type='submit'>Iniciar Sesión</button>
          )}
        </form>
      </div>
    );
  };

  return (
    <div className={classes.container}>
      <Form />
    </div>
  );
};
