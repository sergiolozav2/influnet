/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserService {
    /**
     * @param usuarioId
     * @param authorization
     * @returns any Default Response
     * @throws ApiError
     */
    public static getUserProfile(
        usuarioId: number,
        authorization: string,
    ): CancelablePromise<{
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
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/profile',
            headers: {
                'authorization': authorization,
            },
            query: {
                'usuarioID': usuarioId,
            },
        });
    }
    /**
     * @param authorization
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static putUserProfileCelebrity(
        authorization: string,
        body?: {
            usuario: {
                nombre: string;
                bio?: string;
                nombreUsuario: string;
                subNombre: string;
                imagen: string;
                ciudad: string;
                telefono: string;
                direccion: string;
            };
            perfilCelebridad: {
                genero: string;
                plataformas: string;
            };
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/profile-celebrity',
            headers: {
                'authorization': authorization,
            },
            body: body,
        });
    }
    /**
     * @param authorization
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static putUserProfileCompany(
        authorization: string,
        body?: {
            usuario: {
                nombre: string;
                bio?: string;
                nombreUsuario: string;
                subNombre: string;
                imagen: string;
                ciudad: string;
                telefono: string;
                direccion: string;
            };
            perfilEmpresa: {
                productos: string;
            };
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/profile-company',
            headers: {
                'authorization': authorization,
            },
            body: body,
        });
    }
    /**
     * @param authorization
     * @returns any Default Response
     * @throws ApiError
     */
    public static getUserContratos(
        authorization: string,
    ): CancelablePromise<{
        list: Array<{
            creadoEn: string;
            ofertaID: number;
            ofertanteID: number;
            contratadoID: number;
            oferta: {
                descripcion: string;
                ofertaID: number;
                monto: string;
                categoria: string;
                fechaPlazo: string;
            };
            ofertante: {
                nombre: string;
                nombreUsuario: string;
                subNombre: string;
                telefono: string;
                ciudad: string;
            };
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/contratos',
            headers: {
                'authorization': authorization,
            },
        });
    }
    /**
     * @param authorization
     * @returns any Default Response
     * @throws ApiError
     */
    public static getUserContratosEmpresa(
        authorization: string,
    ): CancelablePromise<{
        list: Array<{
            creadoEn: string;
            ofertaID: number;
            ofertanteID: number;
            contratadoID: number;
            puntuacion: any;
            oferta: {
                descripcion: string;
                ofertaID: number;
                monto: string;
                categoria: string;
                fechaPlazo: string;
            };
            contratado: {
                nombre: string;
                nombreUsuario: string;
                subNombre: string;
                telefono: string;
                ciudad: string;
            };
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/contratos-empresa',
            headers: {
                'authorization': authorization,
            },
        });
    }
    /**
     * @param authorization
     * @returns any Default Response
     * @throws ApiError
     */
    public static getUserEstadisticas(
        authorization: string,
    ): CancelablePromise<{
        postsCreados: number;
        reacciones: number;
        comentarios: number;
        seguidores: number;
        ganancias: number;
        reaccionesTimestamps: Array<{
            timestamp: string;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/estadisticas',
            headers: {
                'authorization': authorization,
            },
        });
    }
}
