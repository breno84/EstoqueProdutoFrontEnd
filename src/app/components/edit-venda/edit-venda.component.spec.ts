import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVendaComponent } from './edit-venda.component';

describe('EditVendaComponent', () => {
  let component: EditVendaComponent;
  let fixture: ComponentFixture<EditVendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditVendaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
