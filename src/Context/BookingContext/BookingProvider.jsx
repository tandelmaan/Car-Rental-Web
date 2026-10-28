import { useCallback, useState } from "react";
import { BookingContext } from "./BookingContext";

const BookingProvider = ({ children }) => {
  const [bookedCarIds, setBookedCarIds] = useState([]);

  const isBooked = useCallback(
    (carId) => bookedCarIds.includes(carId),
    [bookedCarIds]
  );

  const bookCar = useCallback((carId) => {
    setBookedCarIds((currentIds) =>
      currentIds.includes(carId) ? currentIds : [...currentIds, carId]
    );
  }, []);

  return (
    <BookingContext value={{ isBooked, bookCar }}>
      {children}
    </BookingContext>
  );
};

export default BookingProvider;
