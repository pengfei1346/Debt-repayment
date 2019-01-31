import * as axios from 'axios'
import Vue from 'vue';

let options = {
  baseURL: 'http://localhost:3000/api/fjw',
  timeout: 15000,
  headers: {"Content-Type": "application/x-www-form-urlencoded"}
}
let xhr = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      axios.create(options).get(url, {params}).then(res => {
        resolve(res)
      }).catch(err => {
        // console.log(err)
        reject(err)
      })
    })
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      axios.create(options).post(url, params).then(res => {
        resolve(res)
      }).catch(err => {
        // console.log(err)
      })
    })
  }
};

Vue.prototype.$axios = xhr;
