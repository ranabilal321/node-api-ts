export class ApiController {
    static async healthCheck(request, response) {
        try {
            const {query} = request;
            return response.status(200).json({
                status: "success",
                message: "API is in health state",
                query: {...query}
            });
        } catch (error) {
            return response.status(200).json({
                status: "error",
                message: "Something went wrong"
            });
        }
    }
}
