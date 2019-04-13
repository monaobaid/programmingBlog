import { TestBed } from '@angular/core/testing';

import { BlogServService } from './blog-serv.service';

describe('BlogServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogServService = TestBed.get(BlogServService);
    expect(service).toBeTruthy();
  });
});
