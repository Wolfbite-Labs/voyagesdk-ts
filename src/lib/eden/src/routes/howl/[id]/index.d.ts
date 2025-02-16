import { YapockType } from '@/index';
import { Database } from '../../../../database.types';
import { UserProfile } from '@/models/defs';
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
            query: unknown;
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
        delete: {
            body: unknown;
            params: {
                id: string;
            };
            query: unknown;
            headers: unknown;
            response: {
                [x: string]: any;
                200: any;
                204: any;
                403: any;
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
export declare function getPost(id: string, post?: Database['public']['Tables']['posts']['Row'] & typeof UserProfile | undefined): Promise<{
    assets: import("../../../../database.types").Json[] | null;
    body: string;
    content_type: string;
    created_at: string;
    id: string;
    parent: string | null;
    tenant_id: string;
    user_id: string;
} & import("@sinclair/typebox").TObject<{
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
}>>;
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
