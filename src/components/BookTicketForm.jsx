const BookTicketForm = ({
  formData,
  setFormData,
  showDetails,
  handleFormSubmit,
}) => {
  return (
    <form onSubmit={handleFormSubmit} className="mt-8">
      <h2 className="text-xl font-semibold mb-2">Booking Form</h2>

      <label className="block text-sm font-medium text-gray-600 mb-4">
        Name:
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Your name"
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </label>

      <label className="block text-sm font-medium text-gray-600 mb-4">
        Email:
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Your email"
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </label>

      <label className="block text-sm font-medium text-gray-600 mb-4">
        Movie name:
        <input
          type="text"
          defaultValue={showDetails?.name || ""}
          onChange={() =>
            setFormData({ ...formData, movieName: showDetails?.name || "" })
          }
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </label>

      <label className="block text-sm font-medium text-gray-600 mb-4">
        Number of Tickets:
        <input
          type="number"
          value={formData.numTickets}
          onChange={(e) =>
            setFormData({
              ...formData,
              numTickets: parseInt(e.target.value, 10),
            })
          }
          className="mt-1 p-2 w-full border rounded-md"
          required
          min="1"
        />
      </label>

      <label className="block text-sm font-medium text-gray-600 mb-4">
        Select Date:
        <input
          type="date"
          value={formData.selectedDate}
          onChange={(e) =>
            setFormData({ ...formData, selectedDate: e.target.value })
          }
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </label>

      <button
        type="submit"
        className="bg-green-500 hover:bg-green-700 transition duration-150 ease-linear text-white py-2 px-6 rounded-sm mt-4"
      >
        Submit
      </button>
    </form>
  );
};

export default BookTicketForm;
