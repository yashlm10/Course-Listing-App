import { connectToDB } from "@/utils/database";
import Course from "@/models/course";

export const GET = async (request, {params}) => {
    try {
        await connectToDB();

        const course = await Course.findById(params.id);
        return new Response(JSON.stringify(courses), {
            status: 200
        })
        if(!course) return new Response("Course Not Found", {
            status: 404
        })
    } catch (error) {
        return new Response("Failed to fetch all courses", {
            status: 500
        })
    }
}