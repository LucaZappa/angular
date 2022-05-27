import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListServiceService } from 'src/app/core/services/list-service.service';
import { Lista } from 'src/app/shared/model/list-model.model';

// questa è la componente che si occupa di visualizzare e cancellare gli impegni e reindeirzza d altre due componenti
// la modifica e l'inserimento 
@Component({
  selector: 'fin-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent implements OnInit {

  constructor(private router: Router, private listService: ListServiceService) { }

  listList: Lista[] = [];
  loading: boolean = true;


  inserisci(): void {
    this.router.navigateByUrl('list/insert/');

  }

  modifica(id: number): void {
    this.router.navigateByUrl('list/modify/'+id);

  }

  cancella(id: number): void {
    this.listService.delete(id).subscribe(result => {
      id = result
      this.loading = false
      this.listList = this.listList.filter(l => l.id != id)
    }, error => console.log(error)
    )
  }


  ngOnInit(): void {
    
    this.listService.getAll().subscribe(
      result => {
        this.listList = result
        this.loading = false
        console.log(this.listList);

      }, error => console.log(error)
    )
  }

}
