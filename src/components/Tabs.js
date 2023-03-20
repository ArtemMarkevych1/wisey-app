import React, {useState} from 'react';
import styled from 'styled-components';
import Course from './Course';
import ReactPaginate from 'react-paginate';
import Loader from './Loader';
import {useDispatch, useSelector} from 'react-redux';
import {getCourses} from '../redux/courses/courses.thunk';
import {selectCoursesItems, selectCoursesLoading} from '../redux/courses/courses.selectors';

const Tabs = () => {
    const dispatch = useDispatch();

    const data = useSelector(selectCoursesItems)
    const loadingCourses = useSelector(selectCoursesLoading)

    React.useEffect(() => {
        dispatch(getCourses())
    }, [dispatch])

    const [pageNumber, setPageNumber] = useState(0);
    const [itemsPerPage] = useState(10);
    const pageCount = Math.ceil(data.length / itemsPerPage);

    function handlePageClick({selected}) {
        setPageNumber(selected);
        window.scrollTo({top: 380, behavior: 'smooth'});
    }

    const displayedData = data?.slice(
        pageNumber * itemsPerPage,
        (pageNumber + 1) * itemsPerPage
    );

    const renderedData = displayedData?.map(course => <Course
        key={course.id} {...course}/>)

    return (
        <TabsWrapper>
            <div className="tabs">
                {loadingCourses
                    ? <Loader/>
                    : <>
                        <div className="tabs-body">
                            {renderedData}
                        </div>

                        <ReactPaginate
                            previousLabel={'previous'}
                            nextLabel={'next'}
                            breakLabel={'...'}
                            pageCount={pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageClick}
                            containerClassName={'pagination'}
                            activeClassName={'active'}
                            disablePrevNextButtons={pageNumber === 0 || pageNumber === pageCount - 1}
                        />
                    </>
                }
            </div>
        </TabsWrapper>
    )
}

const TabsWrapper = styled.div`
  .tabs {
    margin-top: 16px;

    .tabs-head-item button {
      border: 1px solid rgba(0, 0, 0, 0.7);
      padding: 10px 13px;
      margin-right: 6px;
      transition: var(--transition);
      font-weight: 500;
      font-size: 15px;
      margin-bottom: 10px;

      &:hover {
        background-color: var(--clr-black);
        color: var(--clr-white);
      }
    }

    .tabs-body {
      margin-top: 32px;
      display: grid;
    }

    @media screen and (min-width: 600px) {
      .tabs-body {
        display: grid;
        gap: 26px;
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media screen and (min-width: 992px) {
      .tabs-body {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media screen and (min-width: 1400px) {
      .tabs-body {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }

  .pagination {
    margin: 15px auto;
    display: flex;
    list-style: none;
    outline: none;
  }

  .pagination > .active > a {
    background-color: var(--clr-dark);
    border-color: var(--clr-dark);
    color: #fff;
  }

  .pagination > li > a {
    border: 1px solid var(--clr-dark);
    padding: 5px 10px;
    outline: none;
    cursor: pointer;
  }

  .pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus {
    background-color: var(--clr-dark);
    border-color: var(--clr-dark);
    outline: none;
  }

  .pagination > li > a, .pagination > li > span {
    color: var(--clr-dark)
  }

  .pagination > li:first-child > a, .pagination > li:first-child > span, .pagination > li:last-child > a, .pagination > li:last-child > span {
    border-radius: unset
  }
`;

export default Tabs
