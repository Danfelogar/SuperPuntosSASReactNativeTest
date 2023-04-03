export interface ICredencial {
  email: string;
  password: string;
}

export interface IRegisterCredential {
  username: string;
  password: string;
  password2: string;
  email: string;
  nombre: string;
  apellido: string;
  cedula: number;
  image?: null | string;
  entidad: 'EPS';
}
