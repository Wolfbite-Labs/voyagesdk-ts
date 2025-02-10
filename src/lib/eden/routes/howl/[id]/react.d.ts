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
                slot: number;
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
} & {
    index: {
        delete: {
            body: {
                slot?: number | undefined;
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
export declare function reactTo({ params: { id }, body: { slot }, set, user }: {
    params: {
        id: string;
    };
    body: {
        slot: number;
    };
    set: {
        status: number;
    };
    user: {
        sub: string;
    };
}): Promise<{
    cause?: string;
    code?: string;
    name?: string;
    message?: string;
    detail?: any;
    value?: {
        summary: string;
    };
} | undefined>;
export declare function deleteReactFrom({ params: { id }, body: { slot }, set, user }: {
    params: {
        id: string;
    };
    body: {
        slot: number;
    };
    set: {
        status: number;
    };
    user: {
        sub: string;
    };
}): Promise<{
    cause?: string;
    code?: string;
    name?: string;
    message?: string;
    detail?: any;
    value?: {
        summary: string;
    };
} | undefined>;
