import React from 'react';

// יצירת ההקשר
const MyContext = React.createContext({});

// ספק של ההקשר
export const Myprovider = MyContext.Provider;

// ייצוא של ההקשר
export default MyContext;
