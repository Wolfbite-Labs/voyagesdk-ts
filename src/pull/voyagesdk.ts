import download from "github-directory-downloader/esm";

type ApiDist = {
    owner: string;
    repository: string;
    directory: string;
};

const API_DIST = {
    owner: 'Wolfbite-Labs',
    repository: 'server',
    directory: 'voyagesdk-export',
} as const satisfies ApiDist;

console.log('+ Importing API files...');
const stats = await download(
    `https://github.com/${API_DIST.owner}/${API_DIST.repository}/tree/main/${API_DIST.directory}`,
    './src/lib/eden',
    {
        token: process.env.GITHUB_TOKEN,
    }
);

if (stats) {
    console.log(`+ Imported ${stats.files} files.`);
}
