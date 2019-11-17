import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

const PizzaPagination = ({
  currentPage,
  firstLabel,
  hideFirstAndLast,
  hideNavigationWhenApplicable,
  lastLabel,
  marginPagesDisplayed,
  nextLabel,
  numberOfPages,
  onPageChange,
  previousLabel
}) => {
  if (numberOfPages <= 1) {
    return null;
  }

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === numberOfPages;
  const buttonMap = {
    first: {
      "aria-disabled": isFirstPage,
      children: firstLabel,
      disabled: isFirstPage,
      value: 1
    },
    previous: {
      "aria-disabled": isFirstPage,
      children: previousLabel,
      disabled: isFirstPage,
      value: currentPage - 1
    },
    next: {
      "aria-disabled": isLastPage,
      children: nextLabel,
      disabled: isLastPage,
      value: currentPage + 1
    },
    last: {
      "aria-disabled": isLastPage,
      children: lastLabel,
      disabled: isLastPage,
      value: numberOfPages
    }
  };

  const getBreakElement = i => (
    <div
      className="PizzaPagination__item PizzaPagination__item--break"
      key={`pizza-pagination__item--${i}`}
    >
      ...
    </div>
  );

  const getPageElement = (pageNumber, isActive, i) => (
    <button
      aria-current={isActive}
      aria-label={`Page ${pageNumber}`}
      className={cx({
        PizzaPagination__item: true,
        [`PizzaPagination__item--page-${pageNumber}`]: true,
        "PizzaPagination__item--active": isActive
      })}
      key={`PizzaPagination__item--${i}`}
      onClick={onPageChange}
      onKeyPress={onPageChange}
      value={pageNumber}
    >
      {pageNumber}
    </button>
  );

  const renderNavigationButton = type => {
    if ((type === "first" || type === "last") && hideFirstAndLast) {
      return null;
    }

    const navigationButtonProps = buttonMap[type];

    if (navigationButtonProps.disabled && hideNavigationWhenApplicable) {
      return null;
    }

    return (
      <button
        className={`PizzaPagination__navigation--${type}`}
        onClick={onPageChange}
        onKeyPress={onPageChange}
        {...navigationButtonProps}
      />
    );
  };

  const renderPageNumbers = () => {
    // Ignoring first/last
    let maxNumberOfMiddlePages = marginPagesDisplayed * 2 + 1;
    let firstMiddlePage = currentPage - marginPagesDisplayed;
    let lastMiddlePage = firstMiddlePage + maxNumberOfMiddlePages;
    let pages = [];

    for (let i = firstMiddlePage; i < lastMiddlePage; i += 1) {
      pages.push(i);
    }

    // Handle first and break
    const firstElement = pages[0];
    if (firstElement > 1) {
      let firstAndBreak = [1];

      if (firstElement > 2) {
        firstAndBreak = [1, "break"];
      }

      pages = [...firstAndBreak, ...pages];
    }

    // Handle last and break
    const lastElement = pages[pages.length - 1];
    if (lastElement < numberOfPages) {
      let lastAndBreak = [numberOfPages];

      if (lastElement < numberOfPages - 1) {
        lastAndBreak = ["break", numberOfPages];
      }

      pages = [...pages, ...lastAndBreak];
    }

    /**
     * Two-step process
     * 1) Remove numbers outside of bounds (first/last page) - do not remove "breaks"
     * 2) Replace numbers and breaks with their elements to render
     */
    return pages
      .filter(
        pageItem =>
          (pageItem >= 1 && pageItem < numberOfPages) || pageItem === "break"
      )
      .map((pageItem, i) =>
        pageItem === "break"
          ? getBreakElement(i)
          : getPageElement(pageItem, currentPage === pageItem, i)
      );
  };

  return (
    <div className="PizzaPagination">
      {renderNavigationButton("first")}
      {renderNavigationButton("previous")}
      {renderPageNumbers()}
      {renderNavigationButton("next")}
      {renderNavigationButton("last")}
    </div>
  );
};

PizzaPagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  firstLabel: PropTypes.node,
  hideFirstAndLast: PropTypes.bool,
  hideNavigationWhenApplicable: PropTypes.bool,
  lastLabel: PropTypes.node,
  marginPagesDisplayed: PropTypes.number,
  nextLabel: PropTypes.node,
  numberOfPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  previousLabel: PropTypes.node
};

PizzaPagination.defaultProps = {
  firstLabel: "First",
  hideFirstAndLast: false,
  hideNavigationWhenApplicable: false,
  lastLabel: "Last",
  marginPagesDisplayed: 2,
  nextLabel: "Next",
  previousLabel: "Previous"
};

export default PizzaPagination;
