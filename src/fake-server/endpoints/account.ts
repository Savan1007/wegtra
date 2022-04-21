// application
import { delayResponse, error } from '~/fake-server/utils';
import { IEditProfileData } from '~/api/base';
import { IUser } from '~/interfaces/user';
import axios from 'axios'

export async function accountSignIn(email: string, password: string): Promise<IUser> {

    const {data, status} = await axios.post('https://wegtra-api.herokuapp.com/api/v1/auth/login', {
        email, password
    })
    if(status == 201){
        return delayResponse(Promise.resolve({
            email: data.email,
            phone: '91 7865489214',
            firstName: 'User',
            lastName: 'Wegra',
            avatar: 'https://wegtra-files.nyc3.digitaloceanspaces.com/user_wegtra.png',
        }));
    }

    // if (email === 'red-parts@example.com' && password === '123456') {
    //     const user: IUser = {
    //         email: 'red-parts@example.com',
    //         phone: '38 972 588-42-36',
    //         firstName: 'Ryan',
    //         lastName: 'Ford',
    //         avatar: '//www.gravatar.com/avatar/bde30b7dd579b3c9773f80132523b4c3?d=mp&s=88',
    //     };

    //     return delayResponse(Promise.resolve(user));
    // }

    return delayResponse(() => error('AUTH_WRONG_PASSWORD'));
}

export function accountSignUp(email: string, password: string): Promise<IUser> {
    if (!/^.+@.+$/.test(email)) {
        return delayResponse(() => error('AUTH_INVALID_EMAIL'));
    }

    if (email === 'red-parts@example.com') {
        return delayResponse(() => error('AUTH_EMAIL_ALREADY_IN_USE'));
    }

    if (password.length < 6) {
        return delayResponse(() => error('AUTH_WEAK_PASSWORD'));
    }

    const user: IUser = {
        email,
        phone: '38 972 588-42-36',
        firstName: 'Ryan',
        lastName: 'Ford',
        avatar: '//www.gravatar.com/avatar/bde30b7dd579b3c9773f80132523b4c3?d=mp&s=88',
    };

    return delayResponse(Promise.resolve(user));
}

export function accountSignOut(): Promise<void> {
    return Promise.resolve();
}

export function accountEditProfile(data: IEditProfileData): Promise<IUser> {
    const user: IUser = {
        email: data.email,
        phone: data.phone,
        firstName: data.firstName,
        lastName: data.lastName,
        avatar: '//www.gravatar.com/avatar/bde30b7dd579b3c9773f80132523b4c3?d=mp&s=88',
    };

    return delayResponse(Promise.resolve(user));
}

export function accountChangePassword(oldPassword: string, newPassword: string): Promise<void> {
    if (newPassword.length < 6) {
        return delayResponse(() => error('AUTH_WEAK_PASSWORD'));
    }

    return delayResponse(Promise.resolve());
}
