import supertest from 'supertest';
import server from '../src/index';

export const request = supertest(server);

describe("setup test", () => {
    it("should", (done) => {
      expect(typeof request).toBe("object");
  
      done();
    });
  });