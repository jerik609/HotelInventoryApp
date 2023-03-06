import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // "name" of the component - this is the name we will use to refer to this component in the html file (index.html)
  templateUrl: './app.component.html',
  //but we can do it inline too: 
  // example of muiltiline - use backticks
  // template: `
  //   <h1>Hello from inline template!</h1>
  //   <p>Angular really whips the lama's ass!</p>
  // `,
  styleUrls: ['./app.component.scss']
  //styles: [`h1 { color: red; }`]
})
export class AppComponent {
  title = 'HotelInventoryApp';
  role = 'Admin';
}

// in future, when I need to add more components, this is where they will be placed (and the respective app.component.html)
