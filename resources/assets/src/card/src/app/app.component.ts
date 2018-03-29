import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'app';
  drawerIsActive = false;

  toggleDrawer()
  {
    if(this.drawerIsActive==false)
    {
      this.drawerIsActive = true;
    }else
    {
      this.drawerIsActive = false;
    }
  }
}
