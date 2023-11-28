import { Component, OnInit } from '@angular/core';

// Import a utilizar 
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { Clcliente } from '../model/Clcliente';
import { ClientServiceService } from '../client-service.service';


@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.page.html',
  styleUrls: ['./cliente-detail.page.scss'],
})
export class ClienteDetailPage implements OnInit {
  // Creamos registro a utilizar en el Html
  cliente: Clcliente = {
    id: 1511
    , first_name: 'Macarena Constanza'
    , last_name: 'El Ingenioso'
    , email: 'macarena@soco.cl'
    , clave: '123456'
  
  };

  // Injectamos Librerías a utilizar
  constructor(
    public restApi: ClientServiceService
    , public loadingController: LoadingController
    , public alertController: AlertController
    , public route: ActivatedRoute
    , public router: Router
  ) { }

  // En el OnInit, ejecutamos la lectura
  ngOnInit() {
    this.getCliente();
  }

// Método que permite leer el producto
  async getCliente() {
    console.log("getCliente **************** ParamMap ID:" + this.route.snapshot.paramMap.get('id'));
    // Creamos un Wait
    const loading = await this.loadingController.create({ message: 'Loading...' });
    // Mostramos el Wait
    await loading.present();
    await this.restApi.getCliente(this.route.snapshot.paramMap.get('id')!)
      .subscribe({
        next: (res) => {
          console.log("Data *****************");
          console.log(res);
          // Si funciona la respuesta la pasamos al producto
          this.cliente = res;
          loading.dismiss();
        }
        , complete: () => { }
        , error: (err) => {
          //Si no funcion desplegamos en consola el error
          console.log("Error DetailCliente Página", err);
          loading.dismiss(); //Elimina la espera
        }
      })
  }

  // El Html invoca el método delete
  async delete(id: number) {
    // Confirma Primero
    this.presentAlertConfirm(id, 'Confirme la Eliminación, De lo cantrario Cancele');
  }
  // Creamos una rutina para confirmar la eliminación
  async presentAlertConfirm(id: number, msg: string) {
    const alert = await this.alertController.create({
      header: 'Warning!', // Título
      message: msg,   // Mensaje
      buttons: [   // Botones
        {
          text: 'Eliminar : ' + id + " OK",
          handler: () => { // Si presiona ejecuta esto
            //this.router.navigate(['']);
            this.deleteConfirmado(id)
          }
        }
      ]
    });
    // Presenta en pantalla
    await alert.present();
  }

  // Es invocado desde el Alert
  async deleteConfirmado(id: number) {
    alert("Eliminando " + id)
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    await this.restApi.deleteCliente(id)
      .subscribe({
        next: (res) => {
          console.log("Error DetailCliente Página", res);
          loading.dismiss();
          this.router.navigate(['/cliente-list']);
        }
        , complete: () => { }
        , error: (err) => {
          console.log("Error DetailCliente Página", err);
          loading.dismiss(); //Elimina la espera
        }

      })
  }
}
