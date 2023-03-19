import {createSelector} from 'reselect';

const selectCourses = state => state.courses;

export const selectCourseLabel = createSelector(
    [selectCourses],
    courses => courses.lastWatchedLesson
);

export const selectCoursesLoading = createSelector(
    [selectCourses],
    courses => courses.loadingCourses
);

export const selectCoursesItems = createSelector(
    [selectCourses],
    courses => courses.courses
);

export const selectCoursesError = createSelector(
    [selectCourses],
    courses => courses.coursesError
);

export const selectCourseByIdLoading = createSelector(
    [selectCourses],
    courses => courses.loadingCourseById
)

export const selectCourseByIdItem = createSelector(
    [selectCourses],
    courses => courses.courseById
)

export const selectCourseByIdError = createSelector(
    [selectCourses],
    courses => courses.courseByIdError,
)
