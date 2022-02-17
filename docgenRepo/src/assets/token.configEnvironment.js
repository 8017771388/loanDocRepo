(function (global, factory) {
    'use strict';

    /* Use AMD */
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return new (factory(global, global.document))();
        });
    }
    /* Use CommonJS */
    else if (typeof module !== 'undefined' && module.exports) {
        module.exports = new (factory(global, global.document))();
    }
    /* Use Browser */
    else {
        global.configEnvironment = new (factory(global, global.document))();
    }
})
    (typeof window !== 'undefined' ? window : this, function (w, d) {
        var configEnvironment = function () {
            return {
                //VCFOHO_Environment: '#{HOMEOFFICE.Environment}',
                REST_URL: '#{DataPower.Deployment.WebAPI.Internal.DNS}:8076',
                MULE_SERVICES: '#{DataPower.Internal.DPEndpoint}:8061',
                CLIENT_ID: '#{VCFO.MuleServices.ClientId}',
                CLIENT_SECRET: '#{VCFO.MuleServices.ClientSecret}',
                AuthConstants: {
                    ADMIN_USER: '#{DocuGen.ADGroup}',
                    EDIT_USER: '#{DocuGen.Processor}',
                    ANALYST_USER: '#{VCFO.ADGroup.vcfoAnalyst}',
                    APPROVE_USER: '#{DocuGen.Approver}',
                    AuthUrl: '#{Auth.SW.Rest.Base.URI}/sw2adauthsession/ADUserInfo/GetUserInfo',
                    ForgerockURL: '#{DocuGen.Forgerock.URL}',
                    Cw_Img_Url: '#{AppSettings.Alias.IntraWebNew}/HomeOfficeCoreRest/api/core/images/signinpixel'
                }
            };
        };
        return configEnvironment;
    });
