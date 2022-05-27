import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListServiceService } from 'src/app/core/services/list-service.service';
import { Lista } from 'src/app/shared/model/list-model.model';

@Component({
  selector: 'fin-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent implements OnInit {

  constructor(private listService: ListServiceService, private router: Router) { }

  listList: Lista[] = [];
  loading: boolean = true;


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
