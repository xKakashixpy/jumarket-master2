import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, AbstractControl } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ClProducto } from '../model/ClProducto';

import { ProductServiceService } from '../product-service.service';

let ultimoId = 3;

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.page.html',
  styleUrls: ['./product-add.page.scss'],
})
export class ProductAddPage implements OnInit {
  productForm!: FormGroup;
  producto: ClProducto = {
    codigo: "09-G12",
    nombreprod: "",
    precio: 0,
    cantidad: 0,
    rut: 0,
    dv: "0",
    enfermedad: "0",
    fonocontacto: 0,
    categoria: "0",
    editorial: "0",
    raza: "0",
    edad: 0,
    altura: 0,
    hrini: "0",
    hrfin: "0",
    direccion: "0"
  }

  constructor(private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private restApi: ProductServiceService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      'prod_name': [null, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      'prod_desc': [null, Validators.required],
      'prod_price': [null, [Validators.required, Validators.pattern('^[0-9]+$')]],
      'prod_cantidad': [null, [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  async onFormSubmit(form: NgForm) {
    console.log("onFormSubmit del Product ADD")
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });

    await loading.present();

    await this.restApi.addProduct(this.producto)
      .subscribe({
        next: (res) => {
          console.log("Next AddProduct Page", res)
          loading.dismiss();
          if (res == null) {
            console.log("Next No Agrego, Ress Null ");
            return
          }
          console.log("Next Agrego SIIIIII Router saltaré ;", this.router);
          this.router.navigate(['/product-list']);
        },
        complete: () => { },
        error: (err) => {
          console.log("Error AddProduct Página", err);
          loading.dismiss();
        }
      });

    console.log("Observe que todo lo del suscribe sale después de este mensaje")
  }
}
