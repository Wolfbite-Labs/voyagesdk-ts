import { YapockType } from '@/index';
export declare const UserCache: Map<string, import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    display_name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    about: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        bio: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        flair: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>;
    slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    space_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"default">, import("@sinclair/typebox").TLiteral<"custom_free">, import("@sinclair/typebox").TLiteral<"custom_unrestricted">]>>;
    post_privacy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"everyone">, import("@sinclair/typebox").TLiteral<"followers">, import("@sinclair/typebox").TLiteral<"friends">, import("@sinclair/typebox").TLiteral<"private">]>>;
    images: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        avatar: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        header: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
    following: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    invite_code: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}> & {
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
                username: string;
            };
            query: unknown;
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
export declare function getUser({ by, value, user }: {
    by: string;
    value: string;
    user?: any;
}): Promise<any>;
