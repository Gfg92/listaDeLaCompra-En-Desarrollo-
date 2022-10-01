import { TestBed } from '@angular/core/testing';

import { AlmacenArticulosService } from './almacen-articulos.service';

describe('AlmacenArticulosService', () => {
  let service: AlmacenArticulosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlmacenArticulosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
