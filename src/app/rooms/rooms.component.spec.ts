import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { APP_SERVICE_CONFIG } from '../app-config/appconfig.service';
import { RouteConfigToken } from '../common-services/routeConfig.service';

import { RoomsComponent } from './rooms.component';

describe('RoomsComponent', () => {
  let component: RoomsComponent;
  let fixture: ComponentFixture<RoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule, FormsModule, ReactiveFormsModule ],
      declarations: [ RoomsComponent ],
      providers: [
        {
          provide: APP_SERVICE_CONFIG,
          useValue: {
            apiEndpoint: "http://localhost:3000"
          }
        },
        {
          provide: RouteConfigToken,
          useValue: {
            title: 'rooms'
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle', () => {
    component.hideRooms = false;
    component.toggle();
    expect(component.hideRooms).toBe(true);
  })

});
