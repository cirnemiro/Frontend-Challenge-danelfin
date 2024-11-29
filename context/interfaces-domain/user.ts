interface User {
    id: string | number;
    user_email: string;
    user_name: string;
    user_role: string;
    profileImage: string;
    validation_token: string;
    portfolios: any[];
    default_region: string;
    country: string;
    sb: boolean;
    user_status: string;
    isSignup: boolean;
    isTester: boolean;
}
export default User;
