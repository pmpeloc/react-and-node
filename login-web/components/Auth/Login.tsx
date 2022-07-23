import { FC } from 'react';

export const LoginComponent: FC = () => {
  return (
    <div>
      <form>
        <input placeholder='Ingrese su email'></input>
        <input placeholder='Ingrese su contraseña'></input>
        <button>Crear Cuenta</button>
      </form>
    </div>
  );
};
