import { connectToDB } from "@/utils/database";
import Course from "@/models/course";

export const GET = async (request) => {
    const page=Number(request.nextUrl.searchParams.get("page")) || 1;
    const per_page=Number(request.nextUrl.searchParams.get("per_page"))|| 8;
    try {
        await connectToDB();
        console.log(page);
        const courses = await Course.find({}).skip(per_page * (page-1)).limit(per_page);
        
        return new Response(JSON.stringify(courses),{
            status: 200
        })
    } catch (error) {
        return new Response("Failed to fetch all courses", {
            status: 500
        })
    }
}