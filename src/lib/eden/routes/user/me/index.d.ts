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
                readonly 404: any;
            };
        };
    };
} & {
    index: {
        post: {
            body: {
                id?: string | undefined;
                type?: string | undefined;
                display_name?: string | undefined;
                slug?: string | undefined;
                post_privacy?: "everyone" | "followers" | "friends" | "private" | undefined;
                space_type?: "default" | "custom_free" | "custom_unrestricted" | undefined;
                username?: string | undefined;
                about?: {
                    bio?: string | undefined;
                    flair?: string | undefined;
                } | undefined;
                images?: {
                    avatar?: any;
                    header?: any;
                } | undefined;
                following?: boolean | undefined;
                invite_code?: string | undefined;
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
interface Update {
    username?: string;
    display_name?: string;
    slug?: string;
    about?: {
        bio?: string;
    };
    images?: {
        avatar?: string;
        header?: string;
    };
    space_type?: 'default' | 'custom_free' | 'custom_unrestricted';
    post_privacy?: 'public' | 'followers' | 'friends' | 'private';
}
export declare function updateUser({ username, display_name, slug, space_type, post_privacy, about, images }: Update, set: any, currentUser: {
    sub: any;
}): Promise<Update & {
    bio?: string;
    id: string;
}>;
