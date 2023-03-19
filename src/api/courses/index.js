import axiosRest from '../rest-axios';

export class CoursesApi {

    static async getCourses() {
        return (await axiosRest.get('/core/preview-courses')).data;
    }

    static async getCourseById(courseId) {
        return (await axiosRest.get(`/core/preview-courses/${courseId}`));
    }
}
