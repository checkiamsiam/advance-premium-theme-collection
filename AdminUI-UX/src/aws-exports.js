/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": "ap-south-1",
    "aws_cognito_identity_pool_id": "ap-south-1:1587bcdd-d571-473a-b484-1c254a2a4f9f",
    "aws_cognito_region": "ap-south-1",
    "aws_user_pools_id": "ap-south-1_4TTtpfLUo",
    "aws_user_pools_web_client_id": "6h9ofih4sk8do5026chn0qhr9e",
    "oauth": {
        "domain": "curasterpatientfee9c20a-fee9c20a-dev.auth.ap-south-1.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "myapp://",
        "redirectSignOut": "myapp://",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_cognito_username_attributes": [
        "EMAIL",
        "PHONE_NUMBER"
    ],
    "aws_cognito_social_providers": [
        "GOOGLE"
    ],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ],
    "aws_user_files_s3_bucket": "curasters3213319-dev",
    "aws_user_files_s3_bucket_region": "ap-south-1",
    "aws_cloud_logic_custom": [
        {
            "name": "api3ceaf69c",
            "endpoint": "https://tto9xahad7.execute-api.ap-south-1.amazonaws.com/dev",
            "region": "ap-south-1"
        }
    ]
};


export default awsmobile;
