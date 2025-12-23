import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-cria-pensamento',
  imports: [FormsModule, RouterLink],
  templateUrl: './cria-pensamento.html',
  styleUrls: ['./cria-pensamento.css'],
})
export class CriaPensamento {

  pensamento = {
    id: '1',
    conteudo: 'aprendendo sobre property binding',
    autoria: 'Karen Marques',
    modelo: ''
  }

  criarPensamento() {
    alert('Pensamento criado com sucesso!');
  }

  cancelar() {
    alert('Ação cancelada');
  }

}
