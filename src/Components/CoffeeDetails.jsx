import { useLoaderData, Link } from "react-router-dom";

export default function CoffeeDetails() {
  const coffee = useLoaderData();

  return (
    <div className=" bg-white relative px-2 py-8 sm:py-16">
      {/* Back to home */}
      <div className="mb-6">
        <Link
          to="/"
          className="flex items-center gap-1 text-[#331A15] rancho text-xl hover:underline"
        >
          <span className="text-2xl">&#8592;</span> Back to home
        </Link>
      </div>

      {/* Coffee Details Card */}
      <div className="bg-[#F5F4F1] rounded-xl max-w-5xl mx-auto flex flex-col sm:flex-row items-center shadow p-6 sm:p-12">
        {/* Image */}
        <div className="flex-shrink-0 flex justify-center items-center w-full sm:w-[320px]">
          <img
            src={coffee.photo}
            alt={coffee.name}
            className="w-[185px] h-[239px] object-contain rounded-lg"
          />
        </div>
        {/* Info */}
        <div className="flex-1 mt-8 sm:mt-0 sm:ml-12 w-full">
          <div className="rancho text-3xl text-[#331A15] mb-4 drop-shadow-[2px_2px_0_#B58130]">
            Niceties
          </div>
          <div className="raleway space-y-2 text-[#3C393B] text-[16px]">
            <div>
              <span className="rancho text-lg text-[#331A15]">Name:</span>{" "}
              {coffee.name}
            </div>
            <div>
              <span className="rancho text-lg text-[#331A15]">Chef:</span>{" "}
              {coffee.chef}
            </div>
            <div>
              <span className="rancho text-lg text-[#331A15]">Supplier:</span>{" "}
              {coffee.supplier}
            </div>
            <div>
              <span className="rancho text-lg text-[#331A15]">Taste:</span>{" "}
              {coffee.taste}
            </div>
            <div>
              <span className="rancho text-lg text-[#331A15]">Category:</span>{" "}
              {coffee.category}
            </div>
            <div>
              <span className="rancho text-lg text-[#331A15]">Details:</span>{" "}
              {coffee.details}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

