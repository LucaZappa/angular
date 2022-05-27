import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ListServiceService } from 'src/app/core/services/list-service.service';
import { Lista } from 'src/app/shared/model/list-model.model';

// componente che inserisce un nuovo impegno
@Component({
  selector: 'fin-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  constructor(private router: Router, private listService: ListServiceService ) { }


  lista: Lista = {} as Lista;
  id: number = 0;
  todo: string = '';
  status: string = '';
  datacreazione: string = '';
  datafine: string = '';

  public insert(newForm: NgForm): void {
    const listNew = {
      'id': this.lista.id,
      'todo': newForm.value.todo,
      'status': newForm.value.status,
      'datacreazione': newForm.value.datacreazione,
      'datafine': newForm.value.datafine
    } as Lista
    console.log();

    this.listService.post(listNew).subscribe(result => {
      this.router.navigateByUrl('list');
    }, error => console.log(error)
    )

  }

  ngOnInit(): void {
  }

}
