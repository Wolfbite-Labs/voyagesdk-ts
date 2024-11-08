import {Treaty, treaty} from "@elysiajs/eden";
import {Packbase} from "@/routes";

export default class VoyageSDK {
    public app: Treaty.Create<Packbase>;

    constructor(baseUrl: string) {
        this.app = treaty<Packbase>(baseUrl);
    }
}