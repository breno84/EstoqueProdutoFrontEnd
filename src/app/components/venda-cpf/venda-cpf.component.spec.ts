import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaCpfComponent } from './venda-cpf.component';

describe('VendaCpfComponent', () => {
  let component: VendaCpfComponent;
  let fixture: ComponentFixture<VendaCpfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendaCpfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendaCpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
