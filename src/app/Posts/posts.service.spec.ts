/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';

import { PostService } from './posts.service';

describe('PostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostService = TestBed.get(PostService);
    expect(service).toBeTruthy();
  });
});
