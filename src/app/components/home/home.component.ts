import { ApiveiculosService } from './../../services/apiveiculos/apiveiculos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private vServ: ApiveiculosService) { }

  ngOnInit(): void {
  }

}
