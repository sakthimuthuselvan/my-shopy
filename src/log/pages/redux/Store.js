

import { configureStore } from "@reduxjs/toolkit";
import sampleslice from "./Slice"

export const store=configureStore({
    reducer:{
        sample:sampleslice,
    }
})