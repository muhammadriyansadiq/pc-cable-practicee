import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    collapsed: true,
    see: true,
    width:false,
    brand:[],
    hamberg:true,
    windowwidth:window.innerWidth,
    hambergexpander:false,
    wishlistopen:false,
    viewcart:false,
    tab1:false,
    bannerdata:[]
  },
  reducers: {
  

    setcollapsed: (state, action) => {
      state.collapsed = action.payload;
    },
    setsee: (state, action) => {
      state.see = action.payload;
    },
    setwidth: (state, action) => {
      state.width = action.payload;
    },
    setbrand: (state, action) => {
      state.width = action.payload;
    },
    sethamberg: (state, action) => {
        state.hamberg = action.payload;
      },
      setwindowwidth: (state, action) => {
        state.windowwidth = action.payload;
      },  
      sethambergexpander: (state, action) => {
        state.hambergexpander = action.payload;
        },
      setwishlistopen:  (state, action) => {
        state.wishlistopen = action.payload;
        },
      setviewcart:  (state, action) => {
          state.viewcart = action.payload;
          },  
      settab1:  (state, action) => {
            state.tab1 = action.payload;
            },  
            setbannerdata:  (state, action) => {
              state.banner = action.payload;
              },           
  },
});

export const {settab1, setviewcart,setwishlistopen, setcollapsed, setwidth,setsee,sethamberg,setwindowwidth,sethambergexpander,setbannerdata } = counterSlice.actions;

export default counterSlice.reducer;