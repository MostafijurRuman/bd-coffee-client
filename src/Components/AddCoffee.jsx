// AddCoffeeForm.jsx
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form[0].value;
        const chef = form[1].value;
        const supplier = form[2].value;
        const taste = form[3].value;
        const category = form[4].value;
        const details = form[5].value;
        const photo = form[6].value;

        const newCoffee = {
            name,
            chef,
            supplier,
            taste,
            category,
            details,
            photo,
        };
        console.log(newCoffee);
        fetch('http://localhost:5000/coffees', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                            title: `${newCoffee.name} Successfully Added`,
                            icon: "success",
                            draggable: true
                            });

                            form.reset();
            }
        });
    };
  return (
    <div className="min-h-screen bg-[#F4F3F0] py-10 px-4 md:px-0 flex justify-center items-center relative">
      {/* Background image optional */}
      <div className="absolute top-5 left-5">
        <Link
          to="/"
          className="flex items-center gap-2 text-[#374151] font-semibold text-lg hover:underline"
        >
          <FaArrowLeft /> Back to home
        </Link>
      </div>

      <div className="bg-[#F4F3F0] shadow-md max-w-4xl w-full p-10 rounded-lg z-10">
        <h2 className="text-center text-3xl text-[#374151] font-bold mb-2 rancho">
          Add New Coffee
        </h2>
        <p className="text-center text-gray-600 text-sm raleway max-w-xl mx-auto mb-8">
          It is a long established fact that a reader will be distracted by the readable content
          of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using 'Content here'.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 mb-1 raleway">Name</label>
              <input
                type="text"
                placeholder="Enter coffee name"
                className="w-full p-2 border border-gray-300 rounded-sm outline-none"
              />
            </div>
            {/* Chef */}
            <div>
              <label className="block text-gray-700 mb-1 raleway">Chef</label>
              <input
                type="text"
                placeholder="Enter coffee chef"
                className="w-full p-2 border border-gray-300 rounded-sm outline-none"
              />
            </div>

            {/* Supplier */}
            <div>
              <label className="block text-gray-700 mb-1 raleway">Supplier</label>
              <input
                type="text"
                placeholder="Enter coffee supplier"
                className="w-full p-2 border border-gray-300 rounded-sm outline-none"
              />
            </div>

            {/* Taste */}
            <div>
              <label className="block text-gray-700 mb-1 raleway">Taste</label>
              <input
                type="text"
                placeholder="Enter coffee taste"
                className="w-full p-2 border border-gray-300 rounded-sm outline-none"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-gray-700 mb-1 raleway">Category</label>
              <input
                type="text"
                placeholder="Enter coffee category"
                className="w-full p-2 border border-gray-300 rounded-sm outline-none"
              />
            </div>

            {/* Details */}
            <div>
              <label className="block text-gray-700 mb-1 raleway">Details</label>
              <input
                type="text"
                placeholder="Enter coffee details"
                className="w-full p-2 border border-gray-300 rounded-sm outline-none"
              />
            </div>
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-gray-700 mb-1 raleway">Photo</label>
            <input
              type="text"
              placeholder="Enter photo URL"
              className="w-full p-2 border border-gray-300 rounded-sm outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="block w-full bg-[#D2B48C] hover:bg-[#c4a874] text-black font-semibold px-4 py-2 border border-black mt-4 rounded-sm text-center rancho"
          >
            Add Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;

