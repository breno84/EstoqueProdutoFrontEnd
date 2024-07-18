import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurarPessoaCpfComponent } from './procurar-pessoa-cpf.component';

describe('ProcurarPessoaCpfComponent', () => {
  let component: ProcurarPessoaCpfComponent;
  let fixture: ComponentFixture<ProcurarPessoaCpfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcurarPessoaCpfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcurarPessoaCpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
