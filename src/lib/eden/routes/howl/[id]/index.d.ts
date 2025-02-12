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
            query: unknown;
            headers: unknown;
            response: {
                [x: string]: any;
                200: any;
            };
        };
    };
} & {
    index: {
        delete: {
            body: unknown;
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
export declare function getPost({ params: { id }, set }: {
    params: {
        id: string;
    };
    set: {
        status: number;
    };
}, post?: any): Promise<any>;
export declare function deletePost({ params: { id }, set, user }: {
    params: {
        id: string;
    };
    set: {
        status: number;
    };
    user: {
        sub: string;
    };
}): Promise<void>;
