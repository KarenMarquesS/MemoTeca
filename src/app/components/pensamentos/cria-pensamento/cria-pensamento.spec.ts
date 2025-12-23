import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaPensamento } from './cria-pensamento';

describe('CriaPensamento', () => {
  let component: CriaPensamento;
  let fixture: ComponentFixture<CriaPensamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriaPensamento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriaPensamento);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
