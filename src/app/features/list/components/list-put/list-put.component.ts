import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListServiceService } from 'src/app/core/services/list-service.service';
import { Lista } from 'src/app/shared/model/list-model.model';

//componente che modifica un impegno precedentemente inserito
@Component({
  selector: 'fin-list-put',
  templateUrl: './list-put.component.html',
  styleUrls: ['./list-put.component.css']
})
export class ListPutComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router,private listService: ListServiceService ) { }


  lista: Lista = {} as Lista;
  id: number = 0;
  todo: string = '';
  status: string = '';
  datacreazione: string = '';
  datafine: string = '';

  public modify(mod: NgForm): void {
    const listMod = {
      'id': this.lista.id,
      'todo': mod.value.todo,
      'status': mod.value.status,
      'datacreazione': mod.value.datacreazione,
      'datafine': mod.value.datafine
    } as Lista
    console.log();

    this.listService.put(listMod).subscribe(result => {
      this.router.navigateByUrl('list');
    }, error => console.log(error)
    )

  }

  ngOnInit(): void {
    this.route.params.subscribe(
      result => {
        this.id = result['id']
      },
      error => console.log(error)

    )
    this.listService.getId(this.id).subscribe(
      result => {
        this.lista = result
      }, errore => console.log(errore)

    )

  }

}
