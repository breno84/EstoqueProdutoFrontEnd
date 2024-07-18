import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurarPessoaComponent } from './procurar-pessoa.component';

describe('ProcurarPessoaComponent', () => {
  let component: ProcurarPessoaComponent;
  let fixture: ComponentFixture<ProcurarPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcurarPessoaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcurarPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
