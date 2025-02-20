import { YapockType } from '@/index';
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
            params: {};
            query: {
                scope?: string | undefined;
            };
            headers: unknown;
            response: {
                [x: string]: any;
                200: any;
                readonly 404: any;
            };
        };
    };
} & {
    index: {
        post: {
            body: {
                display_name?: string | undefined;
                slug?: string | undefined;
                about?: {
                    bio?: string | undefined;
                    flair?: string | undefined;
                } | undefined;
                images?: {
                    avatar?: any;
                    header?: any;
                } | undefined;
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                [x: string]: any;
                200: any;
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
export declare function getPack(id: string, scope?: string, userId?: string): Promise<any>;
export declare function getPackMembership(packId: string, userId: string): Promise<any>;
