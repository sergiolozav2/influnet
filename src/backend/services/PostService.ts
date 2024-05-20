/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PostService {
    /**
     * @returns any Default Response
     * @throws ApiError
     */
    public static getPost(): CancelablePromise<{
        list?: Array<{
            postID: number;
            usuarioID: number;
            descripcion: string;
            imagen: string;
            reacciones: Array<number>;
            usuario: {
                usuarioID: number;
                nombre: string;
                nombreUsuario: string;
                subNombre: string;
                imagen: string;
            };
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/post/',
        });
    }
    /**
     * @param authorization
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static postPost(
        authorization: string,
        body?: {
            descripcion: string;
            imagen: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/post/',
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
    public static postPostComentar(
        authorization: string,
        body?: {
            postID: number;
            texto: string;
        },
    ): CancelablePromise<{
        comentarioID: number;
        postID: number;
        usuarioID: number;
        texto: string;
        creadoEn: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/post/comentar',
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
    public static postPostLike(
        authorization: string,
        body?: {
            postID: number;
        },
    ): CancelablePromise<{
        reaccionExiste: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/post/like',
            headers: {
                'authorization': authorization,
            },
            body: body,
        });
    }
    /**
     * @param postId
     * @param authorization
     * @returns any Default Response
     * @throws ApiError
     */
    public static getPostComentarios(
        postId: number,
        authorization: string,
    ): CancelablePromise<{
        list: Array<{
            comentarioID: number;
            usuarioID: number;
            texto: string;
            creadoEn: string;
            usuario: {
                usuarioID: number;
                imagen: string;
                nombreUsuario: string;
            };
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/post/comentarios',
            headers: {
                'authorization': authorization,
            },
            query: {
                'postID': postId,
            },
        });
    }
}
