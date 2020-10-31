import { Component } from '@angular/core';
import { NoticiasService } from '../services/noticias.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  noticias : any = []
  
  constructor(
    private noticiasService: NoticiasService
  ) {
    this.listarNoticias()
  }
  
  listarNoticias() {
    this.noticiasService.noticias().subscribe(resp => {
      console.log('noticias traidas', resp['articles']);
      this.noticias = resp['articles'];
    })
  }

}
