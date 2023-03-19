import CoursesActionTypes from './courses.types';

const INITIAL_STATE = {
    loadingCourses: false,
    loadingCourseById: false,
    courses: [],
    courseById: {},
    coursesError: '',
    courseByIdError: '',
    lastWatchedLesson: {},
};

const coursesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case CoursesActionTypes.UPDATE_TEXT:
            return {
                ...state,
                lastWatchedLesson: action.payload,
            };

        case CoursesActionTypes.GET_TEXT:
            return {
                ...state,
                lastWatchedLesson: state.lastWatchedLesson,
            };

        case CoursesActionTypes.FETCH_COURSES:
            return {
                ...state,
                loadingCourses: true
            };

        case CoursesActionTypes.FETCH_COURSES_SUCCESS:
            return {
                ...state,
                courses: action.payload,
                loadingCourses: false,
            };

        case CoursesActionTypes.FETCH_COURSES_FAILURE:
            return {
                ...state,
                courses: [],
                loadingCourses: false,
                coursesError: action.payload
            };

        case CoursesActionTypes.FETCH_COURSE_BY_ID:
            return {
                ...state,
                loadingCourseById: true
            };

        case CoursesActionTypes.FETCH_COURSE_BY_ID_SUCCESS:
            return {
                ...state,
                courseById: action.payload,
                loadingCourseById: false
            };

        case CoursesActionTypes.FETCH_COURSE_BY_ID_FAILURE:
            return {
                ...state,
                courseById: {},
                loadingCourseById: false,
                courseByIdError: action.payload
            };

        default:
            return state;
    }
};

export default coursesReducer;
