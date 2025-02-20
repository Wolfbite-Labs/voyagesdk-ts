import type { ElysiaWithBaseUrl } from "elysia-autoload";
import type Route0 from "./routes/howl/create";
import type Route1 from "./routes/invite/generate";
import type Route2 from "./routes/invite/list";
import type Route3 from "./routes/packs/index";
import type Route4 from "./routes/user/me/packs";
import type Route5 from "./routes/user/me/index";
import type Route6 from "./routes/server/describeServer";
import type Route7 from "./routes/server/insight";
import type Route8 from "./routes/dipswitch/index";
import type Route9 from "./routes/pack/create";
import type Route10 from "./routes/howl/[id]/index";
import type Route11 from "./routes/howl/[id]/comment";
import type Route12 from "./routes/howl/[id]/react";
import type Route13 from "./routes/feed/[id]/index";
import type Route14 from "./routes/user/[username]/index";
import type Route15 from "./routes/user/[username]/follow";
import type Route16 from "./routes/pack/[id]/join";
import type Route17 from "./routes/pack/[id]/index";
export type Packbase = ElysiaWithBaseUrl<"/howl/create", typeof Route0> & ElysiaWithBaseUrl<"/invite/generate", typeof Route1> & ElysiaWithBaseUrl<"/invite/list", typeof Route2> & ElysiaWithBaseUrl<"/packs", typeof Route3> & ElysiaWithBaseUrl<"/user/me/packs", typeof Route4> & ElysiaWithBaseUrl<"/user/me", typeof Route5> & ElysiaWithBaseUrl<"/server/describeServer", typeof Route6> & ElysiaWithBaseUrl<"/server/insight", typeof Route7> & ElysiaWithBaseUrl<"/dipswitch", typeof Route8> & ElysiaWithBaseUrl<"/pack/create", typeof Route9> & ElysiaWithBaseUrl<"/howl/:id", typeof Route10> & ElysiaWithBaseUrl<"/howl/:id/comment", typeof Route11> & ElysiaWithBaseUrl<"/howl/:id/react", typeof Route12> & ElysiaWithBaseUrl<"/feed/:id", typeof Route13> & ElysiaWithBaseUrl<"/user/:username", typeof Route14> & ElysiaWithBaseUrl<"/user/:username/follow", typeof Route15> & ElysiaWithBaseUrl<"/pack/:id/join", typeof Route16> & ElysiaWithBaseUrl<"/pack/:id", typeof Route17>;
