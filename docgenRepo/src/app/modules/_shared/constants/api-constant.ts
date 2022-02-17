declare var configEnvironment: any;

// EASE Link
// export const VCFOHO_LINK = configEnvironment.REST_URL + '/api';

// export const ADD_TOKEN_API = VCFOHO_LINK + '/CodeAndDecode';
// export const GET_TYPE_API = VCFOHO_LINK + '/GetDistinctEntityTypes';
// export const ENTITY_DESC_API = VCFOHO_LINK +'/GetEntityDescTypeDetails';
// export const ENTITT_MAINTAIN= VCFOHO_LINK+'/MaintainEntityDescTypeDetails';
// export const ERROR_DETAIL = VCFOHO_LINK +'/GetErrorDetails';

// Authentication/ Authorization
export const AUTH_URL = configEnvironment.AuthConstants.AuthUrl;
export const CW_IMAGE_URL = configEnvironment.AuthConstants.Cw_Img_Url;
export const USER_ROLE_URL = './assets/json/authentication/' + 'role-access.json';
export const CURRENT_ENV = configEnvironment.VCFOHO_Environment;
export const ADMIN_USER = configEnvironment.AuthConstants.ADMIN_USER;
export const EDIT_USER = configEnvironment.AuthConstants.EDIT_USER;
export const APPROVE_USER = configEnvironment.AuthConstants.APPROVE_USER;
export const FORGE_ROCK_URL = configEnvironment.AuthConstants.ForgerockURL;

export class AppSettings {

    public static APPLICATION_VERSION = "1.0.0";
    //public static SW_ENVIRONMENT = configEnvironment.sw_Environment;;
    //public static HO_CORE_BASE_URL = configEnvironment.HO_BASE_URL;
    public static Mule_Service_URL = configEnvironment.MULE_SERVICES;
    public static Rest_Service_URL = configEnvironment.REST_URL;
    public static apiKey = {
        client_id: configEnvironment.CLIENT_ID,
        client_secret: configEnvironment.CLIENT_SECRET
    };

    public static adGroup = {
        vcfo: EDIT_USER,
        vcfoManager: ADMIN_USER,
        //cfoAnalyst: ANALYST_USER
    }

    //Core-Plan Services

    public static getLoanInfo = AppSettings.Rest_Service_URL + "/docgen/search-loan/";
    public static previewDoc = AppSettings.Rest_Service_URL +"/docgen/preview-document"
    public static sendDocument = AppSettings.Rest_Service_URL +"/docgen/send-document"
    public static getRecordsFromCSV = AppSettings.Rest_Service_URL + "/docgen/view-content";
    public static getOffersHistory = "https://devint.esb.webapi.sddev.lpl.com:8077/TACalculatorAPI/api/History/GetOffersHistory";
    // public static saveActionPlan = AppSettings.Mule_Service_URL + "/vcfo/exp-ho/requests/plan";
    public static getCreatedByList = "https://devint.esb.webapi.sddev.lpl.com:8077/TACalculatorAPI/api/History/GetCreatorDetails"

}
