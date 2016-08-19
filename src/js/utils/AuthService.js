/*global localStorage*/
/* ===== ./src/utils/AuthService.js ===== */
import Auth0Lock from 'auth0-lock'
import {browserHistory} from 'react-router';
import AuthEmmitter from './AuthEmmitter';
var axios = require("axios");

export default class AuthService {
  constructor(clientId, domain, options) {
    // Configure Auth0
    this.lock = new Auth0Lock(clientId, domain, options)
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', this._doAuthentication.bind(this))
    // binds login functions to keep this context
    this.login = this.login.bind(this)
  }

  _doAuthentication(authResult){
    var that = this;
    // Saves the user token
    this.setToken(authResult.idToken)
    AuthEmmitter.emitter.emit('loggedIn');
    
   
    this.lock.getProfile(authResult.idToken, function(error, profile) {
<<<<<<< HEAD
     
=======
>>>>>>> backend
    AuthEmmitter.emitter.emit('profile', {profile: profile});
    // var that = this;
    // axios.post('/storesignup', {
    //         profile: that.profile
    //     })
    //     .then(function(response){
    //       console.log("AXIOS POST INSIDE AUTHEMIT");
    //         if(response.data.msg === 'ok'){
    //           console.log(response);
    //         }
    //     })
    //     .catch (function(error){
    //         console.log(error);
    //     })
        
    browserHistory.push(localStorage.getItem('last_url'));
    localStorage.removeItem('last_url');
  })
  }
  
  setProfile(profile) {
    localStorage.setItem('profile', JSON.stringify(profile));
  }

  login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  loggedIn(){
    // Checks if there is a saved token and it's still valid
    return this.getToken();
  }

  setToken(idToken){
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);
  }

  getToken(){
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token')
  }

  logout(){
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }
}