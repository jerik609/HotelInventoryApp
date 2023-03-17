import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LocalStorageToken } from './localstorage.token'
import { InitService } from './init.service';

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
export class AppComponent implements AfterViewInit, OnInit {

  title = 'HotelInventoryApp';
  role = 'Admin';

  // dynamic component creation example
  @ViewChild("myProperty", { read: ViewContainerRef }) ref?: ViewContainerRef;

  ngAfterViewInit(): void {
    let component = this.ref?.createComponent(RoomsComponent);
    if (component !== undefined) {
      component!.instance.hotelName = "No-Tell Motel";
    }
  }

  // accessing any tag - example
  @ViewChild("specialProperty", { static: true }) name!: ElementRef;
  ngOnInit(): void { // we can use onInit, because the reference is static
    this.name.nativeElement.innerText = "Well, hello there!";
  }

  constructor(@Inject(LocalStorageToken) private localStorage: Storage, private initService: InitService) {
    console.log('Our configuration!: ', initService.getConfig())
    localStorage.setItem("helloThing", "the hello thing which says: hello there my friend!")
  }

}

// in future, when I need to add more components, this is where they will be placed (and the respective app.component.html)
