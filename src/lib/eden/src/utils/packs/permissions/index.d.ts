/**
 * Check if the user owns the pack
 * @param set
 * @param user
 * @param {string} id The pack ID
 */
declare function requiresOwnership({ set, user, id }: {
    set: any;
    user: {
        sub: string;
    };
    id: string;
}): Promise<void>;
declare function hasPermission(permissions: number, permission: number): boolean;
export declare const pack: {
    requiresOwnership: typeof requiresOwnership;
    hasPermission: typeof hasPermission;
    permissions: {
        owner: number;
        administrator: number;
        kick_members: number;
        ban_members: number;
        manage_howls: number;
    };
};
export {};
