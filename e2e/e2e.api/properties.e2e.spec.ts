import { requestBuilder } from './request.builder.promise';

describe('/api/properties', () => {

  it('should get properties', async () => {
    const response = await requestBuilder('http://localhost:3000/api/properties')
      .get();
    expect(response.length).toBeGreaterThan(0);
  });

});
