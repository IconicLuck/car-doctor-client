import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Bookings = () => {

    const {user} = useContext(AuthContext)

    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/bookings?email=${user.email}`

    useEffect( () => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setBookings(data)
        })
    }, [])

    return (
        <div>
            <h1 className="text-5xl font-bold text-center">Total Bookings: {bookings.length}</h1>
        </div>
    );
};

export default Bookings;