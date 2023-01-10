import { Component, OnInit } from '@angular/core';
import { ApiclienteService } from '../services/apicliente.service';
import { Response } from '../models/response';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  public lst!: any[];
  public  Columnas: string [] = [ 'id', 'nombre' ];

  constructor(
    private apicliente : ApiclienteService
  ) {


  }

  ngOnInit(): void {
    this.getCliente();
  }

  getCliente(){
      this.apicliente.GetCliente().subscribe( response =>{
 this.lst= response.data;
    });
  }

}
