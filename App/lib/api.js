class Api {
  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'dataType': 'json',
    }
  }

  static getPatients() {
    return Api.get(`/midwife/bf7908d5-b61c-49ef-b203-cf05dd741671/patient`);
  }

  static getRouteForAppointments(payload) {
    return Api.post(`/midwife/schedule/bf7908d5-b61c-49ef-b203-cf05dd741671`, payload);
  }

  static get(route) {
    return Api.xhr(route, null, 'GET');
  }

  static post(route, params) {
    return Api.xhr(route, params, 'POST')
  }

  static xhr(route, params, verb) {
    const host = 'http://localhost:8080/api';
    const url = `${host}${route}`;

    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null);
    options.headers = Api.headers();

    return fetch(url, options)
      .then(resp => {
        let json = resp.json();

        if (resp.ok) {
          return json;
        }

        return json.then(err => {
          throw err
        });
      });
  }
}
export default Api
