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
export declare function getPack(id: string, scope?: string): Promise<any>;
export declare function getPackMembership(packId: string, userId: string): Promise<any>;
