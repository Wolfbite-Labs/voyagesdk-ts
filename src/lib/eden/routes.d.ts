import type { ElysiaWithBaseUrl } from "elysia-autoload";
import type Route0 from "./routes/howl/create";
import type Route1 from "./routes/packs/index";
import type Route2 from "./routes/user/me/packs";
import type Route3 from "./routes/user/me/index";
import type Route4 from "./routes/server/describeServer";
import type Route5 from "./routes/server/insight";
import type Route6 from "./routes/dipswitch/index";
import type Route7 from "./routes/pack/create";
import type Route8 from "./routes/howl/[id]/index";
import type Route9 from "./routes/howl/[id]/comment";
import type Route10 from "./routes/howl/[id]/react";
import type Route11 from "./routes/feed/[id]/index";
import type Route12 from "./routes/user/[username]/index";
import type Route13 from "./routes/user/[username]/follow";
import type Route14 from "./routes/pack/[id]/join";
import type Route15 from "./routes/pack/[id]/index";
export type Packbase = ElysiaWithBaseUrl<"/howl/create", typeof Route0> & ElysiaWithBaseUrl<"/packs", typeof Route1> & ElysiaWithBaseUrl<"/user/me/packs", typeof Route2> & ElysiaWithBaseUrl<"/user/me", typeof Route3> & ElysiaWithBaseUrl<"/server/describeServer", typeof Route4> & ElysiaWithBaseUrl<"/server/insight", typeof Route5> & ElysiaWithBaseUrl<"/dipswitch", typeof Route6> & ElysiaWithBaseUrl<"/pack/create", typeof Route7> & ElysiaWithBaseUrl<"/howl/:id", typeof Route8> & ElysiaWithBaseUrl<"/howl/:id/comment", typeof Route9> & ElysiaWithBaseUrl<"/howl/:id/react", typeof Route10> & ElysiaWithBaseUrl<"/feed/:id", typeof Route11> & ElysiaWithBaseUrl<"/user/:username", typeof Route12> & ElysiaWithBaseUrl<"/user/:username/follow", typeof Route13> & ElysiaWithBaseUrl<"/pack/:id/join", typeof Route14> & ElysiaWithBaseUrl<"/pack/:id", typeof Route15>;
