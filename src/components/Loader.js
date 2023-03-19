// import React from 'react';
// // import styled, { keyframes } from 'styled-components';
// import { Spinner } from 'react-bootstrap';
//
// // const Loader = ({ show }) => {
// //     return (
// //         <StyledLoader show={show}>
// //             <Spinner animation="border" role="status">
// //                 <span className="visually-hidden">Loading...</span>
// //             </Spinner>
// //         </StyledLoader>
// //     );
// // };
// //
// // const fadeIn = keyframes`
// //   from {
// //     opacity: 0.5;
// //   }
// //   to {
// //     opacity: 1;
// //   }
// // `;
// //
// // const StyledLoader = styled.div`
// //   position: fixed;
// //   top: 0;
// //   left: 0;
// //   width: 100%;
// //   height: 100%;
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   background-color: rgba(255, 255, 255, 0.5);
// //   z-index: 9999;
// //   opacity: ${({ show }) => (show ? 1 : 0)};
// //   animation: ${({ show }) => (show ? `${fadeIn} 0.3s ease-in-out forwards` : '')};
// // `;
// //
// // export default Loader;
//
//
// function Loader() {
//     return (
//         <Spinner animation="border" role="status">
//             <span className="visually-hidden">Loading...</span>
//         </Spinner>
//     );
// }
//
// export default Loader;

import React from 'react';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const Spinner = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 0 auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255, 255, 255, 0.2);
  border-right: 1.1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid #ffffff;
  transform: translateZ(0);
  animation: spinner 1.1s infinite linear;

  &:after {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
  
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function Loader() {
    return (
        <LoaderContainer>
            <Spinner />
        </LoaderContainer>
    );
}

export default Loader;
