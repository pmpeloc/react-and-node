import { useRouter } from 'next/router';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import clientApi from '../../config/axios';
import { Spinner } from '../ui';

import classes from './styles/Register.module.css';

export const RegisterComponent: FC = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    name: '',
    role: '',
  });
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleForm = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data, status } = await clientApi.post('/users', {
        email: values.email,
        password: values.password,
        name: values.name,
        role: values.role,
      });
      if (status === 201) {
        router.push('/auth/login');
      }
    } catch (error: any) {
      alert(error.message);
    }
    setLoading(false);
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
          <label htmlFor='name'>Ingrese su Nombre</label>
          <input
            placeholder='Ingrese su name'
            id='name'
            value={values.name}
            name='name'
            onChange={handleForm}
          />
          <label htmlFor='role'>Ingrese su Rol</label>
          <select
            value={values.role}
            onChange={handleForm}
            name='role'
            id='role'>
            <option value=''>Seleccionar</option>
            <option value='ADMIN'>Administrador</option>
            <option value='CLIENT'>Cliente</option>
            <option value='SELLER'>Vendedor</option>
          </select>
          <label htmlFor='password'>Ingrese Contraseña</label>
          <input
            placeholder='Ingrese su contraseña'
            id='password'
            type='password'
            name='password'
            value={values.password}
            onChange={handleForm}
          />
          {loading ? <Spinner /> : <button type='submit'>Crear Cuenta</button>}
        </form>
      </div>
    </div>
  );
};
