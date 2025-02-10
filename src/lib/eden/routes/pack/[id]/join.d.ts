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
export declare function Routes(): {
    method: string;
    protected: boolean;
    handler: ({ id, scope }: {
        id: string;
        scope?: string;
    }, set: {
        status: number;
    }, currentUser: {
        sub: string;
    }) => Promise<void>;
    schema: {
        body: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TString;
        }>;
        detail: {
            description: string;
            tags: string[];
        };
    };
}[];
