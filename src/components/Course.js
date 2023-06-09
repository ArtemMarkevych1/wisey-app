import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import ReactHlsPlayer from 'react-hls-player';

const Course = (props) => {

    const {
        id, previewImageLink, title, lessonsCount, rating, meta
    } = props;

    const playerRef = React.useRef()

    const [hoveredCardId, setHoveredCardId] = React.useState(null);

    function handleCardHover(cardId) {
        setHoveredCardId(cardId);
    }

    function handleCardLeave() {
        setHoveredCardId(null);
    }

    return (
        <CourseCard>
            {props && Object.entries(props).length > 0 && <>
                <div className="card-image-container"
                     onMouseEnter={() => handleCardHover(id)}
                     onMouseLeave={handleCardLeave}
                >
                    <img className="card-image" alt=""
                         src={previewImageLink + '/cover.webp'}
                    />
                    {
                        hoveredCardId === id &&
                        meta &&
                        meta?.courseVideoPreview?.link.length > 0 &&
                        (
                            <div className="card-video-container">
                                <div className="video-wrapper">
                                    <ReactHlsPlayer
                                        className="card-video"
                                        src={meta?.courseVideoPreview?.link}
                                        autoPlay={true}
                                        controls={false}
                                        muted
                                        playerRef={playerRef}/>
                                </div>
                            </div>
                        )}
                </div>

                <div className="item-body">
                    <h5 className="item-name">{title}</h5>
                    <span className="item-creator">Lessons count: {lessonsCount}</span>
                    <div className="item-rating flex">
                        <span className="item-creator">Rating of course: {rating} / 5</span>
                    </div>
                    <div className="item-rating flex">
                    <span className="item-creator">Skills:
                        {meta && meta?.skills?.length > 0
                            ? <ul>
                                {meta?.skills?.map(skill => <li key={skill}>{skill}</li>)}
                            </ul>
                            : <p>No skills provided.</p>
                        }
                    </span>
                    </div>
                </div>
                <div className="item-btns flex">
                    <Link to={`/${id}`} className="item-btn see-details-btn">See details</Link>
                </div>
            </>}
        </CourseCard>
    )
}

const CourseCard = styled.div`
  margin-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
  display: flex;
  flex-direction: column;

  .card-image-container {
    position: relative;
    height: 160px;

    img {
      height: 100%;
      object-fit: cover;
    }
  }

  .card-image {
    width: 100%;
    height: auto;
  }

  .card-video-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding-top: 56.25%;
    height: 160px;
  }

  .card-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .video-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .item-img {
    height: 175px;

    img {
      height: 100%;
      object-fit: cover;
    }
  }

  .item-body {
    margin: 14px 0;
    padding: 4px 18px;

    .item-name {
      font-size: 15px;
      line-height: 1.4;
      font-weight: 800;
    }

    .item-creator {
      font-size: 12.5px;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.6);
    }

    .rating-star-val {
      margin-bottom: 5px;
      font-size: 14px;
      font-weight: 800;
      color: #b4690e;
      margin-right: 6px;
    }

    .rating-count {
      font-size: 12.5px;
      margin-left: 3px;
      font-weight: 500;
      opacity: 0.8;
    }

    .item-price-new {
      font-weight: 700;
      font-size: 15px;
    }

    .item-price-old {
      opacity: 0.8;
      font-weight: 500;
      text-decoration: line-through;
      font-size: 15px;
      margin-left: 8px;
    }
  }

  .item-btns {
    justify-self: flex-start;
    padding: 4px 8px 30px 18px;
    margin-top: auto;

    .item-btn {
      font-size: 15px;
      display: inline-block;
      padding: 6px 16px;
      font-weight: 700;
      transition: var(--transition);
      white-space: nowrap;

      &.see-details-btn {
        background-color: transparent;
        border: 1px solid var(--clr-black);
        width: 100%;
        text-align: center;

        &:hover {
          background-color: rgba(0, 0, 0, 0.9);
          color: var(--clr-white);
        }
      }
    }
  }
`;

export default Course
