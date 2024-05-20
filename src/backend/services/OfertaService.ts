/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OfertaService {
    /**
     * @param authorization
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static postOferta(
        authorization: string,
        body?: {
            monto: string;
            descripcion: string;
            categoria: string;
            fechaPlazo: string;
        },
    ): CancelablePromise<{
        ofertaID: number;
        ofertanteID: number;
        monto: string;
        descripcion: string;
        categoria: string;
        fechaPlazo: string;
        creadoEn: string;
        usuario: {
            usuarioID: number;
            direccion: string;
            ciudad: string;
            nombre: string;
            nombreUsuario: string;
            subNombre: string;
            imagen: string;
        };
        favoritoPor: Array<number>;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/oferta/',
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
    public static postOfertaToggleFavorite(
        authorization: string,
        body?: {
            ofertaID: number;
        },
    ): CancelablePromise<{
        esFavorito: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/oferta/toggle-favorite',
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
    public static getOfertaFavorites(
        authorization: string,
    ): CancelablePromise<{
        list: Array<{
            ofertaID: number;
            ofertanteID: number;
            monto: string;
            descripcion: string;
            categoria: string;
            fechaPlazo: string;
            creadoEn: string;
            usuario: {
                usuarioID: number;
                direccion: string;
                ciudad: string;
                nombre: string;
                nombreUsuario: string;
                subNombre: string;
                imagen: string;
            };
            favoritoPor: Array<number>;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/oferta/favorites',
            headers: {
                'authorization': authorization,
            },
        });
    }
    /**
     * @param authorization
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static postOfertaPostular(
        authorization: string,
        body?: {
            ofertaID: number;
        },
    ): CancelablePromise<{
        guardado: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/oferta/postular',
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
    public static getOfertaSolicitudes(
        authorization: string,
    ): CancelablePromise<{
        list: Array<number>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/oferta/solicitudes',
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
    public static getOfertaOfertasPostulantes(
        authorization: string,
    ): CancelablePromise<{
        list: Array<{
            postulantes: Array<{
                usuarioID: number;
                nombre: string;
                nombreUsuario: string;
                subNombre: string;
            }>;
            creadoEn: string;
            descripcion: string;
            ofertaID: number;
            monto: string;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/oferta/ofertas-postulantes',
            headers: {
                'authorization': authorization,
            },
        });
    }
    /**
     * @param authorization
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static postOfertaContratar(
        authorization: string,
        body?: {
            ofertaID: number;
            contratadoID: number;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/oferta/contratar',
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
    public static putOfertaReview(
        authorization: string,
        body?: {
            ofertaID: number;
            contratadoID: number;
            puntuacion: number;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/oferta/review',
            headers: {
                'authorization': authorization,
            },
            body: body,
        });
    }
}
