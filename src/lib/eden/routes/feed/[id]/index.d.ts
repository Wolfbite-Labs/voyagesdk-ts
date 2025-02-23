import { YapockType } from '@/index';
export declare const UserFollowingCache: Map<string, any[] | null>;
export declare const UserPackCache: Map<string, any[] | null>;
export declare const UserHomeFeedCache: Map<string, {
    data: any[];
    expires_after: number;
}>;
declare const _default: (app: YapockType) => import("elysia").default<"", false, {
    decorator: {};
    store: {};
    derive: {};
    resolve: {};
}, {
    type: {};
    error: {};
}, {
    schema: {};
    macro: {};
    macroFn: {};
}, {
    index: {
        get: {
            body: unknown;
            params: {
                id: string;
            };
            query: {
                page?: number | undefined;
            };
            headers: unknown;
            response: {
                [x: string]: any;
                200: any;
                readonly 404: any;
                readonly 422: any;
                readonly 503: any;
            };
        };
    };
}, {
    derive: {};
    resolve: {};
    schema: {};
}, {
    derive: {};
    resolve: {
        [x: string]: any;
    };
    schema: {};
}>;
export default _default;
