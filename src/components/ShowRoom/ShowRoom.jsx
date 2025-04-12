import { CarCard } from "..";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentPage,
  setOrderBy,
  setCarsPerPage,
} from "../../store/pageSlice";
import { useEffect, useMemo } from "react";
import * as style from "./ShowRoom.styled"

export function ShowRoom() {
  const carsList = useSelector((state) => state.carState.carsList);
  const filters = useSelector((state) => state.filterState.filters);
  const { currentPage, carsPerPage, orderBy } = useSelector(
    (state) => state.pageState
  );
  const dispatch = useDispatch();
  const carsArray = Object.entries(carsList).map(([id, car]) => ({
    id,
    ...car,
  }));

  function filterCars(cars, filters) {
    return cars.filter((car) => {
      if (filters.make && car.make !== filters.make) return false;
      if (filters.model && car.model !== filters.model) return false;
      if (filters.maxBid && car.startingBid > filters.maxBid) return false;
      if (filters.favourites && !car.favourite) return false;
      return true;
    });
  }

  function orderCars(cars, order) {
    let sortedCars = cars;
    if (order) {
      sortedCars = sortedCars.sort((a, b) => {
        if (order === "make") return a.make.localeCompare(b.make);
        if (order === "startingBid") return a.startingBid - b.startingBid;
        if (order === "mileage") return a.mileage - b.mileage;
        if (order === "auctionDateTime")
          return new Date(a.auctionDateTime) - new Date(b.auctionDateTime);
        return 0;
      });
    }
    return sortedCars;
  }

  const carsFilteredArray = useMemo(() => {
    const filteredCars = filterCars(carsArray, filters);
    return orderCars(filteredCars, orderBy);
  }, [carsArray, filters, orderBy]);

  const totalPages = Math.ceil(carsFilteredArray.length / carsPerPage);

  useEffect(() => {
    setCarsPerPage(carsPerPage);
    if (currentPage > totalPages) {
      dispatch(setCurrentPage(totalPages));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carsPerPage, totalPages, currentPage]);

  function getCarsForPage(page) {
    const startIndex = (page - 1) * carsPerPage;
    const endIndex = startIndex + carsPerPage;
    return carsFilteredArray.slice(startIndex, endIndex);
  }

  let carsToDisplay = getCarsForPage(currentPage);

  function goToNextPage() {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  }

  function goToPreviousPage() {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  }

  function handleQuantityChange(e) {
    dispatch(setCarsPerPage(Number(e.target.value)));
  }

  function handleOrderChange(e) {
    dispatch(setOrderBy(e.target.value));
  }

  return (
    <>
      <style.PageOrganizeContainer>
        <style.SelectContainer>
          <p>Cars Per Page: </p>
          <style.Select
            name="pageQuantity"
            id="pageQuantity"
            value={carsPerPage}
            onChange={handleQuantityChange}
            data-testid="quantitySelect"
          >
            <option value="5">5</option>
            <option value="15">15</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </style.Select>
        </style.SelectContainer>
        <style.SelectContainer>
          <p>Order By: </p>
          <style.Select
            name="orderSelect"
            id="orderSelect"
            value={orderBy}
            onChange={handleOrderChange}
            data-testid="orderSelect"
          >
            <option value=""></option>
            <option value="make">Make</option>
            <option value="startingBid">Starting Bid</option>
            <option value="mileage">Mileage</option>
            <option value="auctionDateTime">Auction Date</option>
          </style.Select>
        </style.SelectContainer>
      </style.PageOrganizeContainer>

      {carsToDisplay.map((car, index) => {
        return <CarCard car={car} key={index} />;
      })}
      <style.Pagination>
        <button onClick={goToPreviousPage}>Previous</button>
        <span data-testid="paginationSpan">
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={goToNextPage} data-testid="nextButton">Next</button>
      </style.Pagination>
    </>
  );
}