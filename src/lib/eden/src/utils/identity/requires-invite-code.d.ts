export default function requiresInviteCode({ body, set, user }: {
    body: {
        [x: string]: any;
    };
    set: any;
    user: {
        sub: string;
    };
}): Promise<true | undefined>;
