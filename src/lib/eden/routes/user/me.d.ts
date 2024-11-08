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
} & {
    index: {
        post: {
            body: {
                username?: string | undefined;
                display_name?: string | undefined;
                about?: {
                    bio?: string | undefined;
                    flair?: string | undefined;
                } | undefined;
                slug?: string | undefined;
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
        readonly user: import("jose").JWTVerifyResult<import("jose").JWTPayload> | undefined;
    };
    schema: {};
}>;
export default _default;
interface Update {
    username: string;
    display_name: string;
    slug: string;
    about?: {
        bio?: string;
    };
    images?: {
        avatar?: string;
        header?: string;
    };
}
export declare function updateUser({ username, display_name, slug, about, images }: Update, set: any, currentUser: {
    sub: any;
}): Promise<Update & {
    bio?: string;
    id: string;
}>;
