/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static postAuthRegisterCelebrity(
        body?: {
            usuario: {
                email: string;
                nombre: string;
                password: string;
                bio?: string;
                nombreUsuario: string;
                subNombre: string;
                imagen: string;
                ciudad: string;
                telefono: string;
                direccion: string;
            };
            celebridad: {
                genero: string;
                plataformas: string;
            };
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/register-celebrity',
            body: body,
        });
    }
    /**
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static postAuthRegisterCompany(
        body?: {
            usuario: {
                email: string;
                nombre: string;
                password: string;
                bio?: string;
                nombreUsuario: string;
                subNombre: string;
                imagen: string;
                ciudad: string;
                telefono: string;
                direccion: string;
            };
            empresa: {
                productos: string;
            };
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/register-company',
            body: body,
        });
    }
    /**
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static postAuthLogin(
        body?: {
            password: string;
            email: string;
        },
    ): CancelablePromise<{
        usuario: {
            usuarioID: number;
            nombre: string;
            nombreUsuario: string;
            subNombre: string;
            bio: string;
            imagen: string;
            ciudad: string;
            telefono: string;
            direccion: string;
            perfilEmpresa?: {
                perfilEmpresaID: number;
                productos: any;
                usuarioID: number;
            };
            perfilCelebridad?: {
                perfilCelebridadID: number;
                genero: string;
                plataformas: any;
                usuarioID: number;
            };
        };
        token: string;
        esEmpresa: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/login',
            body: body,
        });
    }
}
