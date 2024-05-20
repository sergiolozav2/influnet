/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SearchService {
    /**
     * @param query
     * @returns any Default Response
     * @throws ApiError
     */
    public static getSearchOfertas(
        query?: string,
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
            url: '/search/ofertas',
            query: {
                'query': query,
            },
        });
    }
    /**
     * @param query
     * @returns any Default Response
     * @throws ApiError
     */
    public static getSearchUsuarios(
        query?: string,
    ): CancelablePromise<{
        list: Array<{
            usuarioID: number;
            nombre: string;
            nombreUsuario: string;
            subNombre: string;
            imagen: string;
            ciudad: string;
            telefono: string;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/search/usuarios',
            query: {
                'query': query,
            },
        });
    }
}
