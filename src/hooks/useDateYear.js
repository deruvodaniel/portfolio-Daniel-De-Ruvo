import { useState, useEffect } from "react";

const useDateYear = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return { year };
};

export default useDateYear;