import {
    getCourseByIdFailure,
    getCourseByIdRequest,
    getCourseByIdSuccess,
    getCoursesFailure,
    getCoursesRequest,
    getCoursesSuccess
} from './courses.actions';
import {CoursesApi} from '../../api/courses';

export const getCourses = () => {
    return async (dispatch) => {
        dispatch(getCoursesRequest());

        try {
            const {courses} = await CoursesApi.getCourses()
            dispatch(getCoursesSuccess(courses));
        } catch (error) {
            dispatch(getCoursesFailure(error.message));
        }
    };
};

export const getCourseById = (id) => {
    return async (dispatch) => {
        dispatch(getCourseByIdRequest());

        try {
            const {data} = await CoursesApi.getCourseById(id)
            dispatch(getCourseByIdSuccess(data));
        } catch (error) {
            dispatch(getCourseByIdFailure(error.message));
        }
    };
};
