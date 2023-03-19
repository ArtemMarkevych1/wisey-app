import CoursesActionTypes from './courses.types';

export const getCoursesRequest = () => ({
    type: CoursesActionTypes.FETCH_COURSES
})

export const getCoursesSuccess = (courses) => ({
    type: CoursesActionTypes.FETCH_COURSES_SUCCESS,
    payload: courses,
})

export const getCoursesFailure = (error) => ({
    type: CoursesActionTypes.FETCH_COURSES_FAILURE,
    payload: error,
})

export const getCourseByIdRequest = () => ({
    type: CoursesActionTypes.FETCH_COURSE_BY_ID
})

export const getCourseByIdSuccess = (course) => ({
    type: CoursesActionTypes.FETCH_COURSE_BY_ID_SUCCESS,
    payload: course,
})

export const getCourseByIdFailure = (error) => ({
    type: CoursesActionTypes.FETCH_COURSE_BY_ID_FAILURE,
    payload: error,
})

export const updateText = ({title, id}) => ({
    type: 'UPDATE_TEXT',
    payload: {title, id},
})

export const getText = () => ({
    type: 'GET_TEXT'
})
