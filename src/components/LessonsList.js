import React from 'react'
import styled from 'styled-components';
import ReactHlsPlayer from 'react-hls-player';
import {useDispatch, useSelector} from 'react-redux';
import {getText, updateText} from '../redux/courses/courses.actions';
import {persistor} from '../redux/store';
import {selectCourseLabel} from '../redux/courses/courses.selectors';

const LessonList = ({lessons}) => {

    const dispatch = useDispatch();

    const lessonDetails = useSelector(selectCourseLabel);

    React.useEffect(() => {
        dispatch(getText())
    }, [dispatch])

    const posterSrc = lessons.find(lesson => lesson.status === 'unlocked').link
    const [hlsUrl, setHlsUrl] = React.useState(posterSrc)
    const playerRef = React.useRef();

    React.useEffect(() => {
        dispatch(getText())
    }, [dispatch])

    const handleClick = (lesson) => {
        setHlsUrl(lesson.link)
        dispatch(updateText({title: lesson.title, id: lesson.id}));
        persistor.persist();
    };

    const currentLesson = lessons.find(l => l.id === lessonDetails.id && l.title === lessonDetails.title);

    const checkCourseIsCompleted = !lessons.find(l => l.status === "locked")

    return (
        <StyledList className="course-content-list">

            <LessonStatus>
                {currentLesson ? (
                    <div>
                        <span className="darked">Current lesson:</span> {lessonDetails.title}.
                    </div>
                ) : (
                    <p>{checkCourseIsCompleted ? "You successfully completed this course." : "Please watch the video."}</p>
                )}
            </LessonStatus>

            <ReactHlsPlayer
                src={hlsUrl}
                autoPlay={false}
                controls={true}
                width="100%"
                height="auto"
                playerRef={playerRef}
            />
            {lessons.map((lesson, index) => (
                <StyledListItem
                    key={lesson.id}
                    locked={lesson.status === 'locked'}
                    onClick={() => {
                        if (lesson.status === 'unlocked') handleClick(lesson, index);
                    }}
                >
                    {`${index + 1}. ${lesson.title}`}
                </StyledListItem>
            ))}
        </StyledList>
    );
};

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const LessonStatus = styled.div`
  & span.darked {
    color: #333;
    background-color: #ddd;
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
  }

  & p {
    color: #555;
    font-weight: bold;
  }
`;

const StyledListItem = styled.li`
  background-color: #f7f9fa;
  padding: 12px 18px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
  font-weight: 800;
  font-size: 15px;
  opacity: ${(props) => (props.locked ? 0.5 : 1)};
  cursor: ${(props) => (props.locked ? 'not-allowed' : 'pointer')};

  .course-para {
    padding: 12px 0;
  }
`;

export default LessonList;
