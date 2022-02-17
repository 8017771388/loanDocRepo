import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../models/userInfo.model';
import { Observable } from 'rxjs';
import { ADMIN_USER, EDIT_USER, USER_ROLE_URL } from '../constants/api-constant';
import { CLOG_PREFIX, STORAGE_KEY } from '../constants/global.constant';
import { HttpService } from './http.services';

@Injectable()
export class UserInfo {
    public _cLogPrefix = CLOG_PREFIX;
    public _storageKey = STORAGE_KEY;
    public _serviceUrl = '';
    public _imageUrl = '';
    public _imageRefreshInMinutes = 300000;
    public _currentUser: any = {};
    public userName: string;
    public userType: string;
    public userService: UserService;

    userRole: any;
    userInfo: any;
    fullName: any;
    userDetails = {
        userRole: "",
        userName: "",
        fullName: ""
    }

    public _imageRefreshInMinutesFn(minutes) {
        if (minutes) {
            this._imageRefreshInMinutes = Number(minutes * 60000);
        }
        return this._imageRefreshInMinutes;
    }

    public _imageUrlFn(url) {
        if (url) {
            this._imageUrl = url;
        }
        return this._imageUrl;
    }

    public _serviceUrlFn(url) {
        if (url) {
            this._serviceUrl = url;
        }
        return this._serviceUrl;
    }

    public _currentUserFn() {
        return this._currentUser;
    }

    constructor(private http: HttpClient, private httpService: HttpService) {
        this.userService = new UserService();
        // this.userService.config.imageRefreshInMinutes = this._imageRefreshInMinutesFn;
        // this.userService.config.imageUrl = this._imageUrlFn;
        // this.userService.config.serviceUrl = this._serviceUrlFn;
        // this.userService.init = this._init;
        // this.userService.currentUser = this._currentUserFn;
        // this.userService.dummyToProtectCommas = 0;
    }

    /**
  * get user role from cookies
  */
     getUserRole(): string {
        if (!!this.userDetails.userRole && this.userDetails.userRole.length > 0) {
            return this.userDetails.userRole;
        }
        else if (this.httpService.checkCookie('ud')) {
            return JSON.parse(decodeURIComponent(atob(this.httpService.getCookie('ud'))))?.userRole;
        }
        return "";
    }

    /**
     * get full name from cookies
     */
    getUserFullName(): string {
        if (!!this.userDetails.fullName && this.userDetails.fullName.length > 0) {           
            return this.userDetails.fullName;
        }
        else if (this.httpService.checkCookie('ud')) {
            this.fullName = JSON.parse(decodeURIComponent(atob(this.httpService.getCookie('ud'))))?.fullName;
            return this.fullName;
        }
        return "";
    }

    /**
     * get corpId from cookies
     */
     getUserName(): string {
       
        if (!!this.userDetails.userName && this.userDetails.userName.length > 0) {
            console.log("userDetails", this.userDetails);
            console.log("userDEtails", JSON.parse(decodeURIComponent(atob(this.httpService.getCookie('ud')))));
            return this.userDetails.userName;
        }
        else if (this.httpService.checkCookie('ud')) {
            this.userName = JSON.parse(decodeURIComponent(atob(this.httpService.getCookie('ud'))))?.userName;
            console.log("userDEtails", JSON.parse(decodeURIComponent(atob(this.httpService.getCookie('ud')))))
           // this._currentUser = JSON.parse(sessionStorage.getItem(this._storageKey));
            console.log("userD", JSON.parse(sessionStorage.getItem(this._storageKey)))
            return this.userName;
        }
        return "";
    }

    /**
     * role name mapping with forgerock roles
     * @param roles 
     */
    public getUserRoleFromStorage(roles = []): string {


        var loginAdmin = roles.filter((val) => val.toLowerCase() == ADMIN_USER.toLowerCase());
        var loginEdit = roles.filter((val) => val.toLowerCase() == EDIT_USER.toLowerCase());

        if (loginAdmin.length > 0) {
            this.userRole = "Admin";
        }
        else if (loginEdit.length > 0) {
            this.userRole = "Processor";
        } else {
            this.userRole = "";
        }


     
        return this.userRole;
    }

    /**
     * get roles mapping for header
     */
     public getUserRoleForHeader() {
        const userDisplayRole = this.getUserRole() || "";
        if (userDisplayRole.toLowerCase().indexOf("admin") > -1) {
            return 'Admin Ops User';
        }
        if (userDisplayRole.toLowerCase().indexOf("ops") > -1) {
            return 'Ops User';
        }
        if (userDisplayRole.toLowerCase().indexOf("clr") > -1) {
            return 'Clr User';
        }
    }

    /**
     * get corpId from cookie
     */
    public getUserNameFromStorage() {
        this.userName = this.getUserName();
        return this.userName;
    }


   
    public getUserRoles(): Observable<any> {
        return this.http.get(USER_ROLE_URL);
    }
}
