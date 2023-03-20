import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { LocalStorageToken } from './localstorage.token'
import { InitService } from './init.service';
import { HeaderComponent } from './header/header.component';
import { ConfigService } from './common-services/config.service'
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

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
    let component = this.ref?.createComponent(HeaderComponent);
    if (component !== undefined) {
      component!.instance.title = "No-Tell Motel";
    }
  }

  // accessing any tag - example
  @ViewChild("specialProperty", { static: true }) name!: ElementRef;

  constructor(
      @Inject(LocalStorageToken) private localStorage: Storage, 
      private initService: InitService,
      private config: ConfigService,
      private router: Router) {
    console.log('Our configuration!: ', initService.getConfig())
    localStorage.setItem("helloThing", "the hello thing which says: hello there my friend!")
    console.log("The title: ", config.getTitle());
  }

  routerEvent$ = this.router.events;

  ngOnInit(): void { // we can use onInit, because the reference is static
    if (this.name !== undefined) {
      this.name.nativeElement.innerText = "Well, hello there!";
    }

    this.routerEvent$.pipe(
      filter((event) => event instanceof NavigationStart)
    ).subscribe({
      next: event => console.log("Navigation started: ", event)
    });

    this.routerEvent$.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe({
      next: event => console.log("Navigation completed: ", event)
    });

    this.routerEvent$.subscribe({
      next: event => console.log("Routing Event: ", event)
    });

  }

}

// in future, when I need to add more components, this is where they will be placed (and the respective app.component.html)
