import {bootstrap as app} from "../server/bootstrap";

import * as Routes from "../routes/index";

const apiVersion = "api/v1";

app.use(`/${apiVersion}/health`, Routes.ApiRouter);