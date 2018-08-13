import { requestBuilder } from './request.builder.promise';

describe('/api/properties', () => {

  it('should add properties', async () => {
    const response = await requestBuilder('http://localhost:3000/api/properties')
      .body({
        name: 'Test Property',
        address: '23 Baker st.',
      })
      .resolveWithFullResponse()
      .post();
    expect(response.statusCode).toBe(200);
  });

  it('should get properties', async () => {
    const response = await requestBuilder('http://localhost:3000/api/properties')
      .get();
    expect(response.length).toBe(1);
  });

});
