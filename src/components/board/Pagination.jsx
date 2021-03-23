import React from 'react';
import styled from 'styled-components';

const PageUl = styled.ul`
  float: left;
  list-style: none;
  text-align: center;
  border-radius: 3px;
  color: white;
  padding: 1px;
  border-top: 3px solid #186ead;
  border-bottom: 3px solid #186ead;
  background-color: rgba(0, 0, 0, 0.4);
`;

const PageLi = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  padding: 5px;
  border-radius: 5px;
  width: 40px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #263a6c;
  }
  &:focus::after {
    color: white;
    background-color: #263a6c;
  }
`;

const PageSpan = styled.span`
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #263a6c;
  }
`;

const handleFirstPage = (currentPageNumber, lastPageNumber, paginate) => {
  if (currentPageNumber > 1) {
    paginate(1);
  }
};

const handlePrevPage = (currentPageNumber, lastPageNumber, paginate) => {
  if (currentPageNumber > 1) {
    paginate(currentPageNumber - 1);
  }
};

const handleNextPage = (currentPageNumber, lastPageNumber, paginate) => {
  if (currentPageNumber < lastPageNumber) {
    paginate(currentPageNumber + 1);
  }
};

const handleLastPage = (currentPageNumber, lastPageNumber, paginate) => {
  if (currentPageNumber < lastPageNumber) {
    paginate(lastPageNumber);
  }
};

const Pagination = ({ currentPage, postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log('currentPage:', currentPage);
  return (
    <PageUl className="pagination">
      <PageLi
        key={'First'}
        onClick={() => handleFirstPage(currentPage, pageNumbers[pageNumbers.length - 1], paginate)}
        className="page-item"
      >
        <PageSpan className="page-link">First</PageSpan>
      </PageLi>
      <PageLi
        key={'Prev'}
        onClick={() => handlePrevPage(currentPage, pageNumbers[pageNumbers.length - 1], paginate)}
        className="page-item"
      >
        <PageSpan className="page-link">Prev</PageSpan>
      </PageLi>
      {pageNumbers.map(number => (
        <PageLi key={number} onClick={() => paginate(number)} className="page-item">
          <PageSpan className="page-link">{number}</PageSpan>
        </PageLi>
      ))}
      <PageLi
        key={'Next'}
        onClick={() => handleNextPage(currentPage, pageNumbers[pageNumbers.length - 1], paginate)}
        className="page-item"
      >
        <PageSpan className="page-link">Next</PageSpan>
      </PageLi>
      <PageLi
        key={'Last'}
        onClick={() => handleLastPage(currentPage, pageNumbers[pageNumbers.length - 1], paginate)}
        className="page-item"
      >
        <PageSpan className="page-link">Last</PageSpan>
      </PageLi>
    </PageUl>
  );
};

export default Pagination;
