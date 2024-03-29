import {Schema, model, models} from 'mongoose';

const CourseSchema = new Schema({
    title: {
        type: String,
        required: [true, "title is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    questions: {
        type: String,
        required: [true, "Number of questions is required"]
    },
    duration: {
        type: String,
        required: [true, "Duration specification required"]
    },
    image: {
        type: String,
    },
    type: {
        type: String,
        required: [true, "Required to mention if it is a practice or learning course"]
    }
});

const Course = models.Course || model("Course", CourseSchema);

export default Course;