import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface AthleteState {
  ftp: number | null
}

const initialState: AthleteState = {
  ftp: null
}

const athleteSlice = createSlice({
  name: "athlete",
  initialState,
  reducers: {
    updateFtp(state, action: PayloadAction<number>) {
      state.ftp = action.payload
    },

    resetFtp(state) {
      state.ftp = null
    }
  }
})

export const { updateFtp, resetFtp } = athleteSlice.actions
export const athleteReducer = athleteSlice.reducer