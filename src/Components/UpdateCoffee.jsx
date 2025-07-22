import { useLoaderData, Link } from "react-router-dom";
import Swal from 'sweetalert2'
export default function UpdateCoffee() {
  const coffee = useLoaderData();
function handleUpdate(e,id) {
    e.preventDefault();
    const form = e.target;
    const updateCoffee = {
        name: form.name.value,
        chef: form.chef.value,
        supplier: form.supplier.value,
        taste: form.taste.value,
        category: form.category.value,
        details: form.details.value,
        photo: form.photo.value,
    };
    
    fetch(`http://localhost:5000/coffees/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updateCoffee)
    })
    .then(res => res.json())
    .then(data =>{
        if(data.modifiedCount === 1){
            Swal.fire({
            title: "Successfully Updated!",
            icon: "success",
            draggable: true
            });
        }
    });


}
  return (
    <div className="min-h-screen bg-[url('/coffee-bg.png')] bg-cover bg-center px-2 py-8 sm:py-16">
      <div className="max-w-5xl mx-auto">
        {/* Back to home */}
        <div className="mb-6">
          <Link
            to="/"
            className="flex items-center gap-1 text-[#331A15] rancho text-xl hover:underline"
          >
            <span className="text-2xl">&#8592;</span> Back to home
          </Link>
        </div>

        {/* Update Coffee Form Card */}
        <div className="bg-[#F5F4F1] rounded-xl shadow px-5 sm:px-16 py-8 sm:py-14">
          {/* Title */}
          <h2 className="rancho text-[2.4rem] text-center text-[#374151] mb-2 drop-shadow-[2px_2px_0_#B58130]">
            Update Existing Coffee Details
          </h2>
        {/* Description */}
        <p className="raleway text-center mb-8 text-[#1B1A1A] text-base max-w-2xl mx-auto">
            Update the details of your favorite coffee below. Make changes to the name, chef, supplier, taste, category, details, or photo to keep your coffee collection up to date!
        </p>
        {/* Form */}
          <form onSubmit={(e)=>handleUpdate(e, coffee._id)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name */}
              <div>
                <label className="raleway text-base text-[#1B1A1A] block mb-2">Name</label>
                <input
                  name="name"
                  defaultValue={coffee.name}
                  className="w-full py-2 px-4 rounded bg-white border border-[#331A15] focus:outline-[#D2B48C] text-[#331A15] text-base"
                  type="text"
                  placeholder="Enter coffee name"
                />
              </div>
              {/* Chef */}
              <div>
                <label className="raleway text-base text-[#1B1A1A] block mb-2">Chef</label>
                <input
                  name="chef"
                  defaultValue={coffee.chef}
                  className="w-full py-2 px-4 rounded bg-white border border-[#331A15] focus:outline-[#D2B48C] text-[#331A15] text-base"
                  type="text"
                  placeholder="Enter coffee chef"
                />
              </div>
              {/* Supplier */}
              <div>
                <label className="raleway text-base text-[#1B1A1A] block mb-2">Supplier</label>
                <input
                  name="supplier"
                  defaultValue={coffee.supplier}
                  className="w-full py-2 px-4 rounded bg-white border border-[#331A15] focus:outline-[#D2B48C] text-[#331A15] text-base"
                  type="text"
                  placeholder="Enter coffee supplier"
                />
              </div>
              {/* Taste */}
              <div>
                <label className="raleway text-base text-[#1B1A1A] block mb-2">Taste</label>
                <input
                  name="taste"
                  defaultValue={coffee.taste}
                  className="w-full py-2 px-4 rounded bg-white border border-[#331A15] focus:outline-[#D2B48C] text-[#331A15] text-base"
                  type="text"
                  placeholder="Enter coffee taste"
                />
              </div>
              {/* Category */}
              <div>
                <label className="raleway text-base text-[#1B1A1A] block mb-2">Category</label>
                <input
                  name="category"
                  defaultValue={coffee.category}
                  className="w-full py-2 px-4 rounded bg-white border border-[#331A15] focus:outline-[#D2B48C] text-[#331A15] text-base"
                  type="text"
                  placeholder="Enter coffee category"
                />
              </div>
              {/* Details */}
              <div>
                <label className="raleway text-base text-[#1B1A1A] block mb-2">Details</label>
                <input
                  name="details"
                  defaultValue={coffee.details}
                  className="w-full py-2 px-4 rounded bg-white border border-[#331A15] focus:outline-[#D2B48C] text-[#331A15] text-base"
                  type="text"
                  placeholder="Enter coffee details"
                />
              </div>
              {/* Photo */}
              <div className="md:col-span-2">
                <label className="raleway text-base text-[#1B1A1A] block mb-2">Photo</label>
                <input
                  name="photo"
                  defaultValue={coffee.photo}
                  className="w-full py-2 px-4 rounded bg-white border border-[#331A15] focus:outline-[#D2B48C] text-[#331A15] text-base"
                  type="text"
                  placeholder="Enter photo URL"
                />
              </div>
            </div>
            <div className="flex justify-center pt-1">
              <button
                type="submit"
                className="bg-[#D2B48C] hover:bg-[#c9a76e] text-[#331A15] rancho text-xl px-12 py-2 rounded w-full md:w-auto border border-[#331A15] transition"
                style={{ boxShadow: "0 1px 0 #331A15 inset" }}
              >
                Update Coffee Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


