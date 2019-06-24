import { UserInfo } from '../../model';
import { Observable } from 'rxjs';

export abstract class UserApi {
    signIn: (username: string, password: string, rememberMe: boolean) => Observable<any>;
    signOut: () => Observable<any>;
    changePassword: (username: string, oldPassword: string, newPassword: string) => Observable<any>;
    register: (userInfo: UserInfo) => Observable<any>;
    isLoggedIn: boolean;
}
