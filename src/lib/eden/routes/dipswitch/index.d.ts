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
            body: {
                dpk: string;
                dpv: string;
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                [x: string]: any;
                200: any;
                500: any;
            };
        };
    };
} & {
    index: {
        get: {
            body: unknown;
            params: {};
            query: {
                dpk?: string | undefined;
            };
            headers: unknown;
            response: {
                [x: string]: any;
                200: any;
                readonly 404: any;
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
export declare function getDPObject(userID: string): Promise<{
    json: {
        dp: {
            [key: string]: any;
        };
    };
    dp: {
        [key: string]: any;
    };
}>;
