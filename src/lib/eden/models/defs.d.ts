export declare const UserProfile: import("@sinclair/typebox").TObject<{
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
}>;
export declare const UserProfileWithInviteCode: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
}>, import("@sinclair/typebox").TObject<{
    invite_code: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>]>;
export declare const UserProfileStatus: import("@sinclair/typebox").TObject<any>;
export declare const PackCreateBody: import("@sinclair/typebox").TObject<{
    display_name: import("@sinclair/typebox").TString;
    slug: import("@sinclair/typebox").TString;
    description: import("@sinclair/typebox").TString;
}>;
export declare const PackEditBody: import("@sinclair/typebox").TObject<{
    slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    display_name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    about: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        bio: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        flair: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>;
    images: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        avatar: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        header: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export declare const PackMembership: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    tenant_id: import("@sinclair/typebox").TString;
}>;
export declare const PackResponse: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString;
    slug: import("@sinclair/typebox").TString;
    display_name: import("@sinclair/typebox").TString;
    about: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        bio: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        flair: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>;
    images: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        avatar: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        header: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>;
    membership: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TNumber;
        tenant_id: import("@sinclair/typebox").TString;
    }>>;
    statistics: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        members: import("@sinclair/typebox").TNumber;
        heartbeat: import("@sinclair/typebox").TNumber;
    }>>;
    created_at: import("@sinclair/typebox").TString;
    owner_id: import("@sinclair/typebox").TString;
}>;
export declare const HowlBody: import("@sinclair/typebox").TObject<{
    tenant_id: import("@sinclair/typebox").TString;
    content_type: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"markdown">, import("@sinclair/typebox").TLiteral<"rich">, import("@sinclair/typebox").TLiteral<"asset">, import("@sinclair/typebox").TLiteral<"howling_alongside">]>;
    body: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
    assets: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        data: import("@sinclair/typebox").TString;
    }>>>;
}>;
export declare const HowlComment: import("@sinclair/typebox").TObject<{
    parent: import("@sinclair/typebox").TString;
    user: import("@sinclair/typebox").TObject<{
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
    }>;
    created_at: import("@sinclair/typebox").TString;
    body: import("@sinclair/typebox").TString;
}>;
export declare const HowlResponse: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString;
    tenant_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    content_type: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"markdown">, import("@sinclair/typebox").TLiteral<"rich">, import("@sinclair/typebox").TLiteral<"asset">, import("@sinclair/typebox").TLiteral<"howling_alongside">]>;
    created_at: import("@sinclair/typebox").TString;
    body: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    assets: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<"image">;
        data: import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            url: import("@sinclair/typebox").TString;
        }>;
    }>>>;
    user: import("@sinclair/typebox").TObject<{
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
    }>;
    reactions: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        '0': import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
        '1': import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
        '2': import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
        '3': import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
        '4': import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
        '5': import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
        '6': import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
        '7': import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
        '8': import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
        '9': import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
    }>>;
    comments: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        parent: import("@sinclair/typebox").TString;
        user: import("@sinclair/typebox").TObject<{
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
        }>;
        created_at: import("@sinclair/typebox").TString;
        body: import("@sinclair/typebox").TString;
    }>>>;
    pack: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TString;
        slug: import("@sinclair/typebox").TString;
        display_name: import("@sinclair/typebox").TString;
        about: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            bio: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            flair: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>>;
        images: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            avatar: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            header: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>>;
        membership: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            tenant_id: import("@sinclair/typebox").TString;
        }>>;
        statistics: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            members: import("@sinclair/typebox").TNumber;
            heartbeat: import("@sinclair/typebox").TNumber;
        }>>;
        created_at: import("@sinclair/typebox").TString;
        owner_id: import("@sinclair/typebox").TString;
    }>>;
}>;
export declare const Pagination: (type: any) => import("@sinclair/typebox").TObject<{
    has_more: import("@sinclair/typebox").TBoolean;
    data: import("@sinclair/typebox").TArray<any>;
}>;
