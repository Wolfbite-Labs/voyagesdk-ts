export type Json = string | number | boolean | null | {
    [key: string]: Json | undefined;
} | Json[];
export type Database = {
    graphql_public: {
        Tables: {
            [_ in never]: never;
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            graphql: {
                Args: {
                    operationName?: string;
                    query?: string;
                    variables?: Json;
                    extensions?: Json;
                };
                Returns: Json;
            };
        };
        Enums: {
            [_ in never]: never;
        };
        CompositeTypes: {
            [_ in never]: never;
        };
    };
    public: {
        Tables: {
            notice: {
                Row: {
                    created_at: string;
                    id: number;
                    image: string | null;
                    type: string;
                };
                Insert: {
                    created_at?: string;
                    id?: number;
                    image?: string | null;
                    type?: string;
                };
                Update: {
                    created_at?: string;
                    id?: number;
                    image?: string | null;
                    type?: string;
                };
                Relationships: [];
            };
            packs: {
                Row: {
                    created_at: string;
                    description: string | null;
                    display_name: string;
                    id: string;
                    images_avatar: string | null;
                    images_header: string | null;
                    owner_id: string | null;
                    slug: string;
                };
                Insert: {
                    created_at?: string;
                    description?: string | null;
                    display_name: string;
                    id?: string;
                    images_avatar?: string | null;
                    images_header?: string | null;
                    owner_id?: string | null;
                    slug: string;
                };
                Update: {
                    created_at?: string;
                    description?: string | null;
                    display_name?: string;
                    id?: string;
                    images_avatar?: string | null;
                    images_header?: string | null;
                    owner_id?: string | null;
                    slug?: string;
                };
                Relationships: [];
            };
            "packs.memberships": {
                Row: {
                    id: number;
                    joined_at: string;
                    tenant_id: string;
                    user_id: string;
                };
                Insert: {
                    id?: number;
                    joined_at?: string;
                    tenant_id: string;
                    user_id: string;
                };
                Update: {
                    id?: number;
                    joined_at?: string;
                    tenant_id?: string;
                    user_id?: string;
                };
                Relationships: [
                    {
                        foreignKeyName: "public_packs.memberships_tenant_id_fkey";
                        columns: ["tenant_id"];
                        isOneToOne: false;
                        referencedRelation: "packs";
                        referencedColumns: ["id"];
                    }
                ];
            };
            "packs.pages": {
                Row: {
                    content: Json | null;
                    created_at: string;
                    description: string | null;
                    icon: string | null;
                    id: number;
                    slug: string;
                    tenant_id: string;
                    title: string;
                    updated_at: string;
                };
                Insert: {
                    content?: Json | null;
                    created_at?: string;
                    description?: string | null;
                    icon?: string | null;
                    id?: number;
                    slug: string;
                    tenant_id: string;
                    title: string;
                    updated_at?: string;
                };
                Update: {
                    content?: Json | null;
                    created_at?: string;
                    description?: string | null;
                    icon?: string | null;
                    id?: number;
                    slug?: string;
                    tenant_id?: string;
                    title?: string;
                    updated_at?: string;
                };
                Relationships: [
                    {
                        foreignKeyName: "pack.pages_tenant_id_fkey";
                        columns: ["tenant_id"];
                        isOneToOne: false;
                        referencedRelation: "packs";
                        referencedColumns: ["id"];
                    }
                ];
            };
            posts: {
                Row: {
                    assets: Json[] | null;
                    body: string;
                    content_type: string;
                    created_at: string;
                    id: string;
                    parent: string | null;
                    tenant_id: string;
                    user_id: string;
                };
                Insert: {
                    assets?: Json[] | null;
                    body: string;
                    content_type: string;
                    created_at?: string;
                    id?: string;
                    parent?: string | null;
                    tenant_id?: string;
                    user_id: string;
                };
                Update: {
                    assets?: Json[] | null;
                    body?: string;
                    content_type?: string;
                    created_at?: string;
                    id?: string;
                    parent?: string | null;
                    tenant_id?: string;
                    user_id?: string;
                };
                Relationships: [
                    {
                        foreignKeyName: "posts_parent_fkey";
                        columns: ["parent"];
                        isOneToOne: false;
                        referencedRelation: "posts";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "public_posts_belongs_to_fkey";
                        columns: ["tenant_id"];
                        isOneToOne: false;
                        referencedRelation: "packs";
                        referencedColumns: ["id"];
                    }
                ];
            };
            "posts.reactions": {
                Row: {
                    actor_id: string;
                    created_at: string;
                    post_id: string;
                    slot: number;
                };
                Insert: {
                    actor_id?: string;
                    created_at?: string;
                    post_id: string;
                    slot?: number;
                };
                Update: {
                    actor_id?: string;
                    created_at?: string;
                    post_id?: string;
                    slot?: number;
                };
                Relationships: [
                    {
                        foreignKeyName: "public_posts.reactions_post_id_fkey";
                        columns: ["post_id"];
                        isOneToOne: false;
                        referencedRelation: "posts";
                        referencedColumns: ["id"];
                    }
                ];
            };
            profiles: {
                Row: {
                    bio: string | null;
                    created_at: string;
                    display_name: string | null;
                    id: string;
                    images_avatar: string | null;
                    images_header: string | null;
                    post_privacy: Database["public"]["Enums"]["Post Privacy"];
                    slug: string | null;
                    space_type: Database["public"]["Enums"]["Space Type"];
                    type: string | null;
                    username: string;
                };
                Insert: {
                    bio?: string | null;
                    created_at?: string;
                    display_name?: string | null;
                    id: string;
                    images_avatar?: string | null;
                    images_header?: string | null;
                    post_privacy?: Database["public"]["Enums"]["Post Privacy"];
                    slug?: string | null;
                    space_type?: Database["public"]["Enums"]["Space Type"];
                    type?: string | null;
                    username: string;
                };
                Update: {
                    bio?: string | null;
                    created_at?: string;
                    display_name?: string | null;
                    id?: string;
                    images_avatar?: string | null;
                    images_header?: string | null;
                    post_privacy?: Database["public"]["Enums"]["Post Privacy"];
                    slug?: string | null;
                    space_type?: Database["public"]["Enums"]["Space Type"];
                    type?: string | null;
                    username?: string;
                };
                Relationships: [];
            };
            "profiles.settings": {
                Row: {
                    id: string;
                    json: Json | null;
                };
                Insert: {
                    id: string;
                    json?: Json | null;
                };
                Update: {
                    id?: string;
                    json?: Json | null;
                };
                Relationships: [];
            };
            waitlist: {
                Row: {
                    created_at: string;
                    id: string;
                    owner_id: string;
                };
                Insert: {
                    created_at?: string;
                    id?: string;
                    owner_id: string;
                };
                Update: {
                    created_at?: string;
                    id?: string;
                    owner_id?: string;
                };
                Relationships: [];
            };
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            [_ in never]: never;
        };
        Enums: {
            "Post Privacy": "everyone" | "followers" | "friends" | "private";
            "Space Type": "default" | "custom_free" | "custom_unrestricted";
        };
        CompositeTypes: {
            [_ in never]: never;
        };
    };
    storage: {
        Tables: {
            buckets: {
                Row: {
                    allowed_mime_types: string[] | null;
                    avif_autodetection: boolean | null;
                    created_at: string | null;
                    file_size_limit: number | null;
                    id: string;
                    name: string;
                    owner: string | null;
                    owner_id: string | null;
                    public: boolean | null;
                    updated_at: string | null;
                };
                Insert: {
                    allowed_mime_types?: string[] | null;
                    avif_autodetection?: boolean | null;
                    created_at?: string | null;
                    file_size_limit?: number | null;
                    id: string;
                    name: string;
                    owner?: string | null;
                    owner_id?: string | null;
                    public?: boolean | null;
                    updated_at?: string | null;
                };
                Update: {
                    allowed_mime_types?: string[] | null;
                    avif_autodetection?: boolean | null;
                    created_at?: string | null;
                    file_size_limit?: number | null;
                    id?: string;
                    name?: string;
                    owner?: string | null;
                    owner_id?: string | null;
                    public?: boolean | null;
                    updated_at?: string | null;
                };
                Relationships: [];
            };
            migrations: {
                Row: {
                    executed_at: string | null;
                    hash: string;
                    id: number;
                    name: string;
                };
                Insert: {
                    executed_at?: string | null;
                    hash: string;
                    id: number;
                    name: string;
                };
                Update: {
                    executed_at?: string | null;
                    hash?: string;
                    id?: number;
                    name?: string;
                };
                Relationships: [];
            };
            objects: {
                Row: {
                    bucket_id: string | null;
                    created_at: string | null;
                    id: string;
                    last_accessed_at: string | null;
                    metadata: Json | null;
                    name: string | null;
                    owner: string | null;
                    owner_id: string | null;
                    path_tokens: string[] | null;
                    updated_at: string | null;
                    user_metadata: Json | null;
                    version: string | null;
                };
                Insert: {
                    bucket_id?: string | null;
                    created_at?: string | null;
                    id?: string;
                    last_accessed_at?: string | null;
                    metadata?: Json | null;
                    name?: string | null;
                    owner?: string | null;
                    owner_id?: string | null;
                    path_tokens?: string[] | null;
                    updated_at?: string | null;
                    user_metadata?: Json | null;
                    version?: string | null;
                };
                Update: {
                    bucket_id?: string | null;
                    created_at?: string | null;
                    id?: string;
                    last_accessed_at?: string | null;
                    metadata?: Json | null;
                    name?: string | null;
                    owner?: string | null;
                    owner_id?: string | null;
                    path_tokens?: string[] | null;
                    updated_at?: string | null;
                    user_metadata?: Json | null;
                    version?: string | null;
                };
                Relationships: [
                    {
                        foreignKeyName: "objects_bucketId_fkey";
                        columns: ["bucket_id"];
                        isOneToOne: false;
                        referencedRelation: "buckets";
                        referencedColumns: ["id"];
                    }
                ];
            };
            s3_multipart_uploads: {
                Row: {
                    bucket_id: string;
                    created_at: string;
                    id: string;
                    in_progress_size: number;
                    key: string;
                    owner_id: string | null;
                    upload_signature: string;
                    user_metadata: Json | null;
                    version: string;
                };
                Insert: {
                    bucket_id: string;
                    created_at?: string;
                    id: string;
                    in_progress_size?: number;
                    key: string;
                    owner_id?: string | null;
                    upload_signature: string;
                    user_metadata?: Json | null;
                    version: string;
                };
                Update: {
                    bucket_id?: string;
                    created_at?: string;
                    id?: string;
                    in_progress_size?: number;
                    key?: string;
                    owner_id?: string | null;
                    upload_signature?: string;
                    user_metadata?: Json | null;
                    version?: string;
                };
                Relationships: [
                    {
                        foreignKeyName: "s3_multipart_uploads_bucket_id_fkey";
                        columns: ["bucket_id"];
                        isOneToOne: false;
                        referencedRelation: "buckets";
                        referencedColumns: ["id"];
                    }
                ];
            };
            s3_multipart_uploads_parts: {
                Row: {
                    bucket_id: string;
                    created_at: string;
                    etag: string;
                    id: string;
                    key: string;
                    owner_id: string | null;
                    part_number: number;
                    size: number;
                    upload_id: string;
                    version: string;
                };
                Insert: {
                    bucket_id: string;
                    created_at?: string;
                    etag: string;
                    id?: string;
                    key: string;
                    owner_id?: string | null;
                    part_number: number;
                    size?: number;
                    upload_id: string;
                    version: string;
                };
                Update: {
                    bucket_id?: string;
                    created_at?: string;
                    etag?: string;
                    id?: string;
                    key?: string;
                    owner_id?: string | null;
                    part_number?: number;
                    size?: number;
                    upload_id?: string;
                    version?: string;
                };
                Relationships: [
                    {
                        foreignKeyName: "s3_multipart_uploads_parts_bucket_id_fkey";
                        columns: ["bucket_id"];
                        isOneToOne: false;
                        referencedRelation: "buckets";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "s3_multipart_uploads_parts_upload_id_fkey";
                        columns: ["upload_id"];
                        isOneToOne: false;
                        referencedRelation: "s3_multipart_uploads";
                        referencedColumns: ["id"];
                    }
                ];
            };
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            can_insert_object: {
                Args: {
                    bucketid: string;
                    name: string;
                    owner: string;
                    metadata: Json;
                };
                Returns: undefined;
            };
            extension: {
                Args: {
                    name: string;
                };
                Returns: string;
            };
            filename: {
                Args: {
                    name: string;
                };
                Returns: string;
            };
            foldername: {
                Args: {
                    name: string;
                };
                Returns: string[];
            };
            get_size_by_bucket: {
                Args: Record<PropertyKey, never>;
                Returns: {
                    size: number;
                    bucket_id: string;
                }[];
            };
            list_multipart_uploads_with_delimiter: {
                Args: {
                    bucket_id: string;
                    prefix_param: string;
                    delimiter_param: string;
                    max_keys?: number;
                    next_key_token?: string;
                    next_upload_token?: string;
                };
                Returns: {
                    key: string;
                    id: string;
                    created_at: string;
                }[];
            };
            list_objects_with_delimiter: {
                Args: {
                    bucket_id: string;
                    prefix_param: string;
                    delimiter_param: string;
                    max_keys?: number;
                    start_after?: string;
                    next_token?: string;
                };
                Returns: {
                    name: string;
                    id: string;
                    metadata: Json;
                    updated_at: string;
                }[];
            };
            operation: {
                Args: Record<PropertyKey, never>;
                Returns: string;
            };
            search: {
                Args: {
                    prefix: string;
                    bucketname: string;
                    limits?: number;
                    levels?: number;
                    offsets?: number;
                    search?: string;
                    sortcolumn?: string;
                    sortorder?: string;
                };
                Returns: {
                    name: string;
                    id: string;
                    updated_at: string;
                    created_at: string;
                    last_accessed_at: string;
                    metadata: Json;
                }[];
            };
        };
        Enums: {
            [_ in never]: never;
        };
        CompositeTypes: {
            [_ in never]: never;
        };
    };
};
type PublicSchema = Database[Extract<keyof Database, "public">];
export type Tables<PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] & PublicSchema["Views"]) | {
    schema: keyof Database;
}, TableName extends PublicTableNameOrOptions extends {
    schema: keyof Database;
} ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] & Database[PublicTableNameOrOptions["schema"]]["Views"]) : never = never> = PublicTableNameOrOptions extends {
    schema: keyof Database;
} ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] & Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
    Row: infer R;
} ? R : never : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] & PublicSchema["Views"]) ? (PublicSchema["Tables"] & PublicSchema["Views"])[PublicTableNameOrOptions] extends {
    Row: infer R;
} ? R : never : never;
export type TablesInsert<PublicTableNameOrOptions extends keyof PublicSchema["Tables"] | {
    schema: keyof Database;
}, TableName extends PublicTableNameOrOptions extends {
    schema: keyof Database;
} ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"] : never = never> = PublicTableNameOrOptions extends {
    schema: keyof Database;
} ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Insert: infer I;
} ? I : never : PublicTableNameOrOptions extends keyof PublicSchema["Tables"] ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
    Insert: infer I;
} ? I : never : never;
export type TablesUpdate<PublicTableNameOrOptions extends keyof PublicSchema["Tables"] | {
    schema: keyof Database;
}, TableName extends PublicTableNameOrOptions extends {
    schema: keyof Database;
} ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"] : never = never> = PublicTableNameOrOptions extends {
    schema: keyof Database;
} ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Update: infer U;
} ? U : never : PublicTableNameOrOptions extends keyof PublicSchema["Tables"] ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
    Update: infer U;
} ? U : never : never;
export type Enums<PublicEnumNameOrOptions extends keyof PublicSchema["Enums"] | {
    schema: keyof Database;
}, EnumName extends PublicEnumNameOrOptions extends {
    schema: keyof Database;
} ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"] : never = never> = PublicEnumNameOrOptions extends {
    schema: keyof Database;
} ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName] : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"] ? PublicSchema["Enums"][PublicEnumNameOrOptions] : never;
export type CompositeTypes<PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"] | {
    schema: keyof Database;
}, CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
} ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"] : never = never> = PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
} ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName] : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"] ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions] : never;
export {};
