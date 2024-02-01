import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BookTicketForm from "./BookTicketForm";

const localStorageData = JSON.parse(localStorage.getItem("userDetails"));

const MovieSummary = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState([]);
  const [submittedFormData, setSubmittedFormData] = useState(localStorageData);

  async function getMovieData(id) {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const data = await response.json();
    setShowDetails(data);
  }

  useEffect(() => {
    getMovieData(id);
    setFormData((prevFormData) => ({
      ...prevFormData,
      movieName: showDetails.name,
    }));
  }, [id, showDetails.name]);

  const handleBookTicket = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userBooking = { ...formData, id: Date.now() };
    const existingData = JSON.parse(localStorage.getItem("userDetails")) || [];
    const newData = [...existingData, userBooking];
    localStorage.setItem("userDetails", JSON.stringify(newData));
    setSubmittedFormData(newData);
  };

  return (
    <div className="container mx-auto my-8">
      <div className="max-w-2xl mx-auto">
        <img
          src={showDetails.image?.original}
          alt={showDetails.name}
          className="mb-4 w-full h-auto"
        />
        <div className="px-2 md:px-0">
          <h1 className="text-3xl font-bold mb-2">{showDetails.name}</h1>
          <p className="text-gray-600">{showDetails.type}</p>
          <p className="text-gray-600">
            Genres: {showDetails.genres?.join(", ")}
          </p>
          <p className="text-gray-600">Language: {showDetails.language}</p>
          <p className="text-gray-600">Status: {showDetails.status}</p>
          <p className="text-gray-600">Premiered: {showDetails.premiered}</p>
          <p className="text-gray-600">
            Runtime: {showDetails.runtime} minutes
          </p>
          <p className="text-gray-600">
            Average Rating: {showDetails.rating?.average}
          </p>
          <p className="text-gray-600">
            Network: {showDetails.network?.name},{" "}
            {showDetails.network?.country?.name}
          </p>
          {showDetails.officialSite && (
            <p className="text-gray-600">
              Official Site:{" "}
              <Link
                to={showDetails.officialSite}
                target="_blank"
                className="text-blue-600"
              >
                {showDetails.officialSite}
              </Link>
            </p>
          )}

          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Summary</h2>
            <div dangerouslySetInnerHTML={{ __html: showDetails.summary }} />
          </div>

          {!showForm && (
            <button
              className="bg-blue-500 hover:bg-blue-700 transition duration-150 ease-linear text-white p-2 mt-4"
              onClick={handleBookTicket}
            >
              Book Ticket
            </button>
          )}

          {showForm && (
            <BookTicketForm
              formData={formData}
              setFormData={setFormData}
              showDetails={showDetails}
              handleFormSubmit={handleFormSubmit}
            />
          )}

          {submittedFormData !== null && submittedFormData.length > 0 && (
            <div className="mt-8 overflow-x-auto">
              <h2 className="text-xl font-semibold mb-2">Booked Movie Data</h2>
              <table className="table-auto min-w-full">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">Name</th>
                    <th className="border px-4 py-2">Email</th>
                    <th className="border px-4 py-2">Movie Name</th>
                    <th className="border px-4 py-2">No of Tickets</th>
                    <th className="border px-4 py-2">Selected Date</th>
                  </tr>
                </thead>
                <tbody>
                  {submittedFormData.map((booking) => (
                    <tr key={booking.id}>
                      <td className="border px-4 py-2">{booking.name}</td>
                      <td className="border px-4 py-2">{booking.email}</td>
                      <td className="border px-4 py-2">{booking.movieName}</td>
                      <td className="border px-4 py-2">{booking.numTickets}</td>
                      <td className="border px-4 py-2">
                        {booking.selectedDate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieSummary;
