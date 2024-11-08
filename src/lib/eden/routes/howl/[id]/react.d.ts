import { YapockType } from "@/index";
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
                id: string;
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
                id: string;
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
        readonly user: import("jose").JWTVerifyResult<import("jose").JWTPayload> | undefined;
    };
    schema: {};
}>;
export default _default;
export declare function reactTo({ body: { id, slot }, set, user }: {
    body: {
        id: string;
        slot: number;
    };
    set: {
        status: number;
    };
    user: {
        sub: string;
    };
}): Promise<void | 401>;
export declare function deleteReactFrom({ body: { id, slot }, set, user }: {
    body: {
        id: string;
        slot: number;
    };
    set: {
        status: number;
    };
    user: {
        sub: string;
    };
}): Promise<void | 401>;
