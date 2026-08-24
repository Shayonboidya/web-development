
//Problem-02: Table Booking Confirmation
interface Booking  {
    name : string;
    guests : number;
    time : string;
}

const formatBookingConfirmation = (booking : Booking) :string => {
    // write your code here
    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`
};
