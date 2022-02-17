import { Injectable, OnDestroy } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { CW_IMAGE_URL, AUTH_URL, ADMIN_USER, EDIT_USER, APPROVE_USER, FORGE_ROCK_URL } from '../constants/api-constant';
import { UserInfo } from './userInfo.service';
import { Subscription } from 'rxjs';
import { CommunicationService } from './communication.services';
import { ADMIN, PROCESSOR, SUCCESS, ANALYST } from '../constants/global.constant';
import { HttpService } from './http.services';
import { HttpClient } from '@angular/common/http';
import { GenerateGUID } from '../static-class/generate-guid.static';
import { globalConstants } from '../constants/global.constant';

@Injectable()
export class AuthenticationService implements Resolve<any>, OnDestroy {
    Observable1: Subscription;

    pagePath = '';
    constructor(private router: Router,
        private userInfo: UserInfo,
        private communicationService: CommunicationService,
        private http: HttpClient,
        private httpService: HttpService) { }

    resolve(activatedRoute: ActivatedRouteSnapshot): Promise<any> {
        this.pagePath = activatedRoute.routeConfig.path;

        this.communicationService.displayLoader(true);
        try {
            if (sessionStorage.getItem(globalConstants.STORAGE_KEY) && sessionStorage.getItem(globalConstants.STORAGE_KEY_MANAGE_ACCESS) && this.httpService.checkCookie('ud') && JSON.parse(decodeURIComponent(atob(this.httpService.getCookie('ud'))))) {
                const data = JSON.parse(sessionStorage.getItem(globalConstants.STORAGE_KEY));
                const forgerock = JSON.parse(sessionStorage.getItem(globalConstants.STORAGE_KEY_MANAGE_ACCESS));
                this.userInfo.userDetails.fullName = data?.DisplayName;
                this.userInfo.userDetails.userName = forgerock?.userName;
                this.userInfo.userDetails.userRole = this.userInfo.getUserRoleFromStorage(forgerock.roles);
                console.log("relogging in", data, forgerock);
                return this.launchApp(data, forgerock);
            } else {
                return this.AuthSource();
            }
        } catch (e) {
            this.communicationService.displayLoader(false);
            this.router.navigate(['signout']);
        }
    }

    /**
      * set cookies and handles first time login
      */
    private AuthSource(): Promise<any> {
        let domain = window.location.hostname;
        return new Promise((resolve, reject) => {
            this.http.get(AUTH_URL, { withCredentials: true }).subscribe(authResponse => {
                if (authResponse && authResponse['data']?.JwtToken) {
                    this.httpService.setCookie('name', authResponse['data']?.JwtToken, domain);
                    this.userInfo.userDetails.fullName = authResponse['data']?.DisplayName;
                    const cu = authResponse['data'];
                    delete cu.JwtToken;
                    delete cu.DisplayName;
                    sessionStorage.setItem(globalConstants.STORAGE_KEY, JSON.stringify(cu));
                    const headers = { "x-api-transaction-id": GenerateGUID.newGuid(), "Platform": "HO" }
                    if (this.httpService.checkCookie('name')) {
                        this.http.get(FORGE_ROCK_URL, { headers: headers, withCredentials: true }).subscribe(res => {
                            if (res['data'] && res['data']['assignments']) {
                                let forgeRockData = res['data'];
                                this.userInfo.userDetails.userName = forgeRockData?.userName;
                                this.userInfo.userDetails.userRole = this.userInfo.getUserRoleFromStorage(forgeRockData.roles);
                                console.log("this.userInfo.userDetails", this.userInfo.userDetails)
                                this.httpService.setCookie('ud', btoa(encodeURIComponent(JSON.stringify(this.userInfo.userDetails))), domain);
                                //delete forgeRockData?.userName;
                                //delete forgeRockData?.roles;
                                sessionStorage.setItem(globalConstants.STORAGE_KEY_MANAGE_ACCESS, JSON.stringify(forgeRockData));
                                const appLevelAccess = forgeRockData['assignments'].find(obj => obj.name === "DocGenAdmin" || obj.name === "DocGenEdit" );
                                if (appLevelAccess?.action.includes("Edit", "Admin")) {
                                    resolve(this.launchApp(cu, forgeRockData));

                                } else {
                                    resolve(this.launchApp(cu, forgeRockData));
                                    //this.gotoErrorPage();
                                }
                            }
                            else {
                                this.gotoErrorPage();
                            }
                        },
                            error => {
                                this.gotoErrorPage();
                            });
                    } else {
                        this.gotoErrorPage();
                    }
                } else {
                    this.gotoErrorPage();
                }
            });
        })

    }


    /**
    * To launch app based on user authentication
    * @param data 
    * @param userAccess 
    */
    launchApp(data: any, userAccess: any) {
        const userInfo = data;
        const userAccessInfo = userAccess.assignments;
        var user = data;
        user["roles"] = userAccess.roles;
        user["assignments"] = userAccess.assignments;
        this.communicationService.setUserInfo(data);
        this.setApplicationData(userInfo, userAccess);
        console.log("launchApp->", userInfo, userAccess, userAccessInfo);
        var loginAdmin = userAccess.roles.filter((val) => val.toLowerCase() == ADMIN_USER.toLowerCase());
        var loginNormal = userAccess.roles.filter((val) => val.toLowerCase() == EDIT_USER.toLowerCase());
        //var user = this.userInfo._currentUserFn()
        var param = {
            userName: data.UserName,
            firstName: data.FirstName,
            lastName: data.LastName,
            displayName: data.FirstName + ' ' + data.LastName,
            roles: userAccess.roles
        }
        console.log(data);

        if (loginAdmin.length > 0) {
            this.communicationService.setAccessType(ADMIN);
            data["userRole"] = ADMIN;
            this.userInfo.userType = ADMIN;
            return new Promise(resolve => resolve(SUCCESS));
        }
        else if (loginNormal.length > 0) {
            this.communicationService.setAccessType(PROCESSOR);
            data["userRole"] = PROCESSOR;
            this.userInfo.userType = PROCESSOR;
            return new Promise(resolve => resolve(SUCCESS));
        } else {
            this.gotoErrorPage();
        }
    }

    private setApplicationData(data: any, access: any): void {
        this.communicationService.setUserInfo(data);
        this.communicationService.setForgeRockAccessInfo(access);
        this.communicationService.displayLoader(false);
    }

    gotoErrorPage() {
        this.communicationService.displayLoader(false);
        this.router.navigate(['/error']);
        return new Promise(resolve => resolve('Error'));
    }

    ngOnDestroy() {
        if (this.Observable1) {
            this.Observable1.unsubscribe();
        }
    }
}
