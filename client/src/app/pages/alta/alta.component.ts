
import { Router, RouterModule } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { DbServiceService } from 'src/app/services/db-service.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.scss']
})
export class AltaComponent implements OnInit {

  public forma: FormGroup;
  unPaisSeleccionado: any;

  public unActor: any;


  public constructor(private FB: FormBuilder, private router: Router, private dbService: DbServiceService) { }

  ngOnInit() {

    this.forma = new FormGroup({
      'nombre': new FormControl(''),
      'descripcion': new FormControl(''),
      'cantidad': new FormControl(''),
    });

    this.forma = this.FB.group({

      'nombre': ['', Validators.required],
      'descripcion': ['', Validators.required],
      'cantidad': ['', Validators.required]
    })
  }



  private validadoDeEspacio(control: AbstractControl): null | object {
    const nombre = control.value;
    const tieneEspacios = nombre.includes(' ');

    if (tieneEspacios) {
      return { contiene: true }

    } else { return null }
  }




  addItem() {

    console.log(this.forma.value)

    let item = this.forma.value

    this.dbService.saveitem(item)
      .subscribe(
        res => {
          console.log(res);
          this.forma.reset();
          this.alert('success', '¡Item agregado!')
          //this.router.navigate(['/games']);
        },
        err => console.error(err));
  }





  
  alert(icon: SweetAlertIcon, text: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,

      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: icon,
      title: text
    })
  }


}
