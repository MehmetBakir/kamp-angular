import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', /* hangi html sayfasını yöneteceği burada tanımlanıyor. */
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'northwind';
  user: string = 'mehmet bakir';


}
/* Burası app.componets.html dosyasındaki dataları yönetir. */

