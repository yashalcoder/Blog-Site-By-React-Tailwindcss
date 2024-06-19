/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  //this is  customization
  theme: {
   /*  screens:{
        "tablet":"645px",
        "3xl":"1634",//we can change these breakpoints according to my screen width
        //we can change screen width by using these variables like tablet,laptop,phone
    }, */    
    extend: {
      sm:"300px",
      //md:"800px",//this is used to change md sm lg etc
    },
  },
  plugins: [],
}


