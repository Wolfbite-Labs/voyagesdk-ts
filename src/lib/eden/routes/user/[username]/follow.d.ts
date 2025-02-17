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
        post: {
            body: unknown;
            params: {
                username: string;
            };
            query: unknown;
            headers: unknown;
            response: {
                [x: string]: any;
                200: any;
                400: any;
                404: any;
            };
        };
    };
} & {
    index: {
        delete: {
            body: unknown;
            params: {
                username: string;
            };
            query: unknown;
            headers: unknown;
            response: {
                [x: string]: any;
                200: any;
                400: any;
                404: any;
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
