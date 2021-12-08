import { ApiveiculosService } from './../../services/apiveiculos/apiveiculos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadveiculos',
  templateUrl: './cadveiculos.component.html',
  styleUrls: ['./cadveiculos.component.css']
})
export class CadveiculosComponent implements OnInit {
  marca = ''
  modelo = ''
  proprietario = ''
  precoVenda = 0

  constructor(
    private vServ: ApiveiculosService
  ) { }

  ngOnInit(): void {
  }

  salvar(){
    let v = {
      marca: this.marca,
      modelo: this.modelo,
      proprietario: this.proprietario,
      preco_venda: this.precoVenda
    }

    this.vServ.salvar(v).subscribe(
      (dados) => {
        console.log(dados)
      },
      (erro) => {
        console.error(erro)
      }
    );
  }

}
