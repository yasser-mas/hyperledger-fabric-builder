export default class HTTPSuccessResponse {
  public code = 200;
  public message = 'Success';
  public response = {};
  constructor(response: any) {
    this.response = response;
  }
}
