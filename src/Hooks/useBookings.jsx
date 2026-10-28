import { use } from "react";
import { BookingContext } from "../Context/BookingContext/BookingContext";

const useBookings = () => {
  const context = use(BookingContext);

  if (!context) {
    throw new Error("useBookings must be used within a BookingProvider");
  }

  return context;
};

export default useBookings;
