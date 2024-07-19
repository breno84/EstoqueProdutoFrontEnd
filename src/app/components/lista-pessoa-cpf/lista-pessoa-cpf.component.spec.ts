import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPessoaCpfComponent } from './lista-pessoa-cpf.component';

describe('ListaPessoaCpfComponent', () => {
  let component: ListaPessoaCpfComponent;
  let fixture: ComponentFixture<ListaPessoaCpfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaPessoaCpfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPessoaCpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
