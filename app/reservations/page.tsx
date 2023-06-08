import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import EmptyState from "../components/EmptyState";
import ReservationClient from "./ReservationClients";

const Reservationpage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
        <EmptyState 
          title="Unauthorized"
          subtitle="Please Login"
        />
    )
  }
  const reservations = await getReservations({
    authorId: currentUser.id
  });

  if (reservations.length === 0) {
    return (
        <EmptyState 
          title="No reservations found"
          subtitle="looks like you have no reservations on your properties"
        />
    )
  }
  return (
    <ReservationClient 
      reservations={reservations}
      currentUser={currentUser}
    />
  )
}

export default Reservationpage;