import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearAllFilters, updateFilters } from "../../store/filterSlice";
import clearFilter from "../../assets/clear-filter.svg";
import { useEffect, useMemo, useState } from "react";
import * as style from "./FilterBar.styled"

export function FilterBar() {
  const carsList = useSelector((state) => state.carState.carsList);
  const carsArray = useMemo(() => {
    return Object.entries(carsList).map(([id, car]) => ({
      id,
      ...car,
    }));
  }, [carsList]);
  const filters = useSelector((state) => state.filterState.filters);
  const makeList = [...new Set(carsArray.map((car) => car.make))];

  const maxBid = Math.max(...carsArray.map((car) => car.startingBid));
  const minBid = Math.min(...carsArray.map((car) => car.startingBid));

  const [bidValue, setBidValue] = useState(
    filters.maxBid !== 0 ? filters.maxBid : maxBid
  );
  const [modelValue, setModelValue] = useState(filters.model);
  const [modelList, setModelList] = useState([]);
  const [makeValue, setMakeValue] = useState(filters.make);
  const [isFavourite, setIsFavourite] = useState(filters.favourites);

  const dispatch = useDispatch();

  function handleBidChange(e) {
    setBidValue(e.target.value);
  }

  function handleMakeChange(e) {
    setMakeValue(e.target.value);
    setModelValue("");
  }

  function handleModelChange(e) {
    setModelValue(e.target.value);
  }

  function handleFavouriteChange(e) {
    setIsFavourite(e.target.checked);
  }

  function handleClearFilters() {
    setMakeValue("");
    setModelValue("");
    setBidValue(maxBid);
    setIsFavourite(false);
    dispatch(clearAllFilters());
  }

  useEffect(() => {
    const carsWithMakeList = carsArray.filter((car) => car.make === makeValue);
    const updatedModelList = [
      ...new Set(carsWithMakeList.map((car) => car.model)),
    ];
    setModelList(updatedModelList);
  }, [makeValue, carsArray]);

  return (
    <style.FilterBarContainer>
      <style.HeaderContainer>
        <h2>Filters</h2>
        <img
          src={clearFilter}
          alt="Clear Filter"
          onClick={handleClearFilters}
        />
      </style.HeaderContainer>

      <style.GridContainer>
        <style.FilterContainer>
          <select
            name="makeFilter"
            id="makeFilter"
            value={makeValue}
            onChange={handleMakeChange}
            data-testid="makeFilter"
          >
            <option value="">Make</option>
            {makeList.map((make, index) => {
              return (
                <option value={make} key={index}>
                  {make}
                </option>
              );
            })}
          </select>
        </style.FilterContainer>
        <style.FilterContainer>
          <select
            name="modelFilter"
            id="modelFilter"
            value={modelValue}
            onChange={handleModelChange}
            disabled={makeValue === ""}
            data-testid="modelFilter"
          >
            <option value="">Model</option>
            {modelList.map((model, index) => {
              return (
                <option value={model} key={index}>
                  {model}
                </option>
              );
            })}
          </select>
        </style.FilterContainer>

        <style.BidFilterContainer>
          <style.Slider
            type="range"
            id="rangeBidFilter"
            min={minBid}
            max={maxBid}
            step={100}
            value={bidValue}
            onChange={handleBidChange}
            data-testid="bidFilter"
          />
          <p>Max Bid £ {bidValue}</p>
        </style.BidFilterContainer>
        <style.FavouriteFilterContainer>
          <style.CheckBoxLabel>
            Only Favourites
            <input
              type="checkbox"
              name="favouritesCheckbox"
              checked={isFavourite}
              onChange={handleFavouriteChange}
              data-testid="favouriteFilter"
            />
            <style.CheckMark className="checkmark" />
          </style.CheckBoxLabel>
        </style.FavouriteFilterContainer>
      </style.GridContainer>
      <style.ApplyContainer>
        <button
          onClick={() =>
            dispatch(
              updateFilters({
                make: makeValue,
                model: modelValue,
                bid: bidValue,
                favourite: isFavourite,
              })
            )
          }
        >
          Apply
        </button>
      </style.ApplyContainer>
    </style.FilterBarContainer>
  );
}
