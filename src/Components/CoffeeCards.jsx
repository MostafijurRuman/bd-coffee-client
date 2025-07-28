import React, { useEffect, useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

// CoffeeCard Component
const CoffeeCard = ({ coffee }) => {
    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        });
        if (!result.isConfirmed) return;
        await Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
        });
        try {
            const res = await fetch(`https://bd-coffee-server.vercel.app/coffees/${id}`, {
                method: "DELETE",
            });
            if (res.ok) {
                window.location.reload();
            } else {
                alert("Failed to delete coffee.");
            }
        } catch (err) {
            alert("Error deleting coffee.",err);
        }
    };

    return (
        <div className="bg-[#F5F4F1] rounded-xl shadow-md flex items-center justify-between p-4">
            {/* Coffee Image */}
            <Link to={`/coffees/${coffee._id}`} className="flex-shrink-0 w-24 h-24 flex items-center justify-center">
                <img
                    src={coffee.photo}
                    alt={coffee.name}
                    className="w-[185px] h-[239px] object-contain rounded-lg"
                />
            </Link>

            {/* Coffee Info (3 data in one column) */}
            <Link to={`/coffees/${coffee._id}`} className="flex-1 ml-4">
                <div className="grid grid-cols-1 gap-2 raleway text-[#3C393B]">
                    <div>
                        <span className="rancho text-lg text-[#331A15]">Name: </span>
                        <span className="font-semibold">{coffee.name}</span>
                    </div>
                    <div>
                        <span className="rancho text-lg text-[#331A15]">Chef: </span>
                        {coffee.chef}
                    </div>
                    <div>
                        <span className="rancho text-lg text-[#331A15]">Supplier: </span>
                        {coffee.supplier}
                    </div>
                </div>
            </Link>

            {/* Action Icons */}
            <div className="flex flex-col gap-2 ml-4">
                <Link to={`/coffees/${coffee._id}`}
                    aria-label="View"
                    className="bg-[#D2B48C] hover:bg-[#bfa06e] p-2 rounded text-white text-xl transition cursor-pointer"
                >
                    <FaEye />
                </Link>
                <Link to={`/coffees/${coffee._id}/edit`}>
                <button
                    aria-label="Edit"
                    className="bg-[#3C393B] hover:bg-[#1B1A1A] p-2 rounded text-white text-xl transition cursor-pointer"
                >
                    <FaEdit />
                </button>
                </Link>
                <button
                    onClick={() => handleDelete(coffee._id)}
                    aria-label="Delete"
                    className="bg-[#EA4744] hover:bg-[#c22c2c] p-2 rounded text-white text-xl transition cursor-pointer"
                >
                    <FaTrash />
                </button>
            </div>
        </div>
    );
};

// CoffeeCardSection Component (fetches data from API)
const CoffeeCardSection = () => {
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://bd-coffee-server.vercel.app/coffees")
      .then((res) => res.json())
      .then((data) => {
        setCoffees(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="py-8 px-2 sm:px-6 lg:px-0 bg-white flex flex-col items-center gap-6">
      <div className="w-full max-w-4xl">
        {loading ? (
          <div className="raleway text-lg text-center text-gray-500">
            Loading...
          </div>
        ) : coffees.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coffees.map((coffee) => (
              <CoffeeCard key={coffee._id} coffee={coffee} />
            ))}
          </div>
        ) : (
          <div className="raleway text-lg text-center text-gray-500">
            No coffee found.
          </div>
        )}
      </div>
    </section>
  );
};

export default CoffeeCardSection;