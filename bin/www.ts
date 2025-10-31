import "dotenv/config";

import {bootstrap} from "../http/server/index";

const port = process.env["PORT"] || 8080;

(async () => {
    try {
        bootstrap.listen(Number(port), "0.0.0.0", () => {console.info(`PROD Server running on port ${port}`);})
    } catch (error: any) {
        console.log("Error running server")
    }
})();