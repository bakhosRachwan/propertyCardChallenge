import { createSlice } from "@reduxjs/toolkit";

const tenancySlice = createSlice({
    name: "tenancyRecord",
    initialState: [],
    reducers: {
        addTenancy: (state, action) => {
           const newTenancy = {
            tenancy: action.payload,
            // ownerId: action.payload,  
            // tenantEmail: action.payload,
            // tenantId: action.payload,
            // startDate: action.payload,
            // endDate: action.payload,  
            // amount: action.payload,
            // address: action.payload,
           };
           state.push(newTenancy)
        }
    }
})
export const { addTenancy } = tenancySlice.actions
 
export default tenancySlice.reducer;