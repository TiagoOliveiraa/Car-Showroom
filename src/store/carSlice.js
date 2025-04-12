import { createSlice } from "@reduxjs/toolkit";
import originalList from "../data/vehicles_dataset.json"

const carImageNames = [
    "AudiA3",
    "AudiA4",
    "BMW1 Series",
    "BMW3 Series",
    "CitroenC3 Aircross",
    "CitroenC3 Origin",
    "CitroenC5 Aircross",
    "FordFiesta",
    "FordFocus C-Max",
    "FordFocus",
    "Mercedes-BenzA-Class Hatchback",
    "Mercedes-BenzA-Class Saloon",
    "Mercedes-BenzB-Class",
    "ToyotaC-HR",
    "ToyotaCorolla",
    "VolkswagenGolf",
    "VolkswagenPassat",
    "VolkswagenPolo",
    "VolvoC30",
    "VolvoC40",
    "VolvoV40"
  ]

const carSlice = createSlice({
    name: "car",
    initialState: {
        carsList: originalList.reduce((acc,car,index) => {
            acc[index] = {...car};
            return acc;
        }, {}),
        carImages: carImageNames,
    },
    reducers: {
        toggleFavourite(state,action){
            const id = action.payload;
            if(state.carsList[id]){
                state.carsList[id].favourite = !state.carsList[id].favourite;
            }
        }
    }
})

export const {toggleFavourite} = carSlice.actions;
export const carReducer = carSlice.reducer;