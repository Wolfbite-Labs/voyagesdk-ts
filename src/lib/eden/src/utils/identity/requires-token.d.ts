export default function requiresToken({ set, user }: {
    set: any;
    user: {
        sub: string;
    };
}): boolean;
