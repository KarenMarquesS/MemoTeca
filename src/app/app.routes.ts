import { Routes } from '@angular/router';
import { CriaPensamento } from './components/pensamentos/cria-pensamento/cria-pensamento';
import { ListarPensamento } from './components/pensamentos/listar-pensamento/listar-pensamento';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/listar-pensamento',
    pathMatch: 'full'
  },
  {
    path: 'criar-pensamento',
    component: CriaPensamento
  },
  {
    path: 'listar-pensamento',
    component: ListarPensamento
  }
];
