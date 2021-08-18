import { Component, OnInit } from '@angular/core';
import { DbServiceService } from 'src/app/services/db-service.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  public items: any = [];
  public itemsAux: any = [];
  public itemsFilter: any = [];
  public searchParam: string = "";
  public result: any[] = [];



  constructor(private dbService: DbServiceService) { }

  ngOnInit(): void {
    this.getItems()

  }

  getItems() {
    this.dbService.getitems()
      .subscribe(
        res => {
          this.items.splice(0, this.items.length)
          this.items.push(res);
          this.itemsAux.push(res);
        },
        err => console.error('no results')
      );
  }

  deleteItem(item: any) {
    this.dbService.deleteitem(item.id)
      .subscribe(
        res => {
          this.getItems()
        },
        err => console.error(err)
      );
  }

  hacerBusqueda() {
    console.log(this.searchParam)
    if (this.searchParam === "") {
      this.items[0] = this.itemsAux[0];
      return;
    }
    const serachParamLower = this.searchParam.toLowerCase();
    this.items[0] = this.itemsAux[0].filter(item => this.doSearch(item, serachParamLower));

  }

  doSearch(value, searcher) {

    if (typeof value === 'boolean') {
      return false;
    }

    if (typeof value === 'object') {
      for (let fieldKey in value) {
        if (this.doSearch(value[fieldKey], searcher)) {
          return true;
        }
      }
      return false;
    }

    return (typeof value == "string" ? value.toLocaleLowerCase() : value.toString()).includes(searcher)
  }

}
