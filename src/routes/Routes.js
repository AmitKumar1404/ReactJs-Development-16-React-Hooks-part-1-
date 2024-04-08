// 1. Import Area

const { default: Home } = require("../pages/Home");
const { default: Login } = require("../pages/Login");
const { default: Register } = require("../pages/Register");

// 2. Definition Area
export const routes=[
    {
        path:"",
        element:<Home/>
    },
    {
        path:"login",
        element:<Login/>
    },
    {
        path:"register",
        element:<Register/>
    }
  ]; // Local Variable
