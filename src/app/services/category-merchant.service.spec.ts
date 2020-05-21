import { TestBed } from '@angular/core/testing';

import { CategoryMerchantService } from './category-merchant.service';

describe('CategoryMerchantService', () => {
  let service: CategoryMerchantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryMerchantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
