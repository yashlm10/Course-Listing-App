import { connectToDB } from "@/utils/database";
import Course from "@/models/course";

export const GET = async (request) => {
    try {
        await connectToDB();

        const courses = await Course.find({});
        return new Response(JSON.stringify(courses), {
            status: 200
        })
    } catch (error) {
        return new Response("Failed to fetch all courses", {
            status: 500
        })
    }
}