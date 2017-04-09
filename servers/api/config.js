export const
    headers = {
        accessControl: {
            ALLOW_ORIGIN: '*',
            ALLOW_HEADERS: 'Content-Type, Authorization, Content-Length, X-Requested-With',
            ALLOW_METHODS: 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        }
    },
    aws = {
        FROM: '<your_aws.from>',
        REGION: '<your_aws.region>',
        SELLERS: '<your_aws.sellers>' // string or array of emails
    },
    auth = {
        // https://developers.facebook.com/
        facebook: {
            id: '<your_facebook_app_id>',
            secret: '<your_facebook_app_secret>'
        },

        // https://schema.io
        schemaIO: {
            clientId: 'angularcommerce',
            clientSecret: 'qww4HTd6rDDEZcDLMZBahLce2wehQCEk',
            protocol: 'https://',
            host: 'api.schema.io'
        },

        aws: {
            accessKeyId: '<your_aws_access_key_id>',
            secretAccessKey: '<your_aws_secre_access_key>'
        }
    };
