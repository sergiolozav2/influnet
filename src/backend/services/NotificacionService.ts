/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class NotificacionService {
    /**
     * @param authorization
     * @returns any Default Response
     * @throws ApiError
     */
    public static getNotificacionNotificacion(
        authorization: string,
    ): CancelablePromise<{
        list: Array<{
            notificacionID: number;
            usuarioID: number;
            causadorID?: number;
            tipo: string;
            visto: boolean;
            causador?: {
                usuarioID: number;
                nombreUsuario: string;
                imagen: string;
            };
            creadoEn: string;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/notificacion/notificacion',
            headers: {
                'authorization': authorization,
            },
        });
    }
}
