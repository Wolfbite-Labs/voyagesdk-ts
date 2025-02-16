export declare const UserProfile: import("@sinclair/typebox").TObject<{
    username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    display_name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
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
    invite_code: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const UserProfileStatus: import("@sinclair/typebox").TObject<any>;
export declare const PackEditBody: import("@sinclair/typebox").TObject<{
    slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    display_name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    images: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        avatar: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        header: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
}>;
export declare const HowlBody: import("@sinclair/typebox").TObject<{
    to: import("@sinclair/typebox").TString;
    content_type: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"markdown">, import("@sinclair/typebox").TLiteral<"rich">, import("@sinclair/typebox").TLiteral<"asset">]>;
    body: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
    assets: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        data: import("@sinclair/typebox").TString;
    }>>>;
}>;
