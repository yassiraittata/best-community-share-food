import {  } from "@heroicons/react";

const MealItem = () => {
  return (
    <>
      {" "}
      <div className="inline-grid max-w-xs sm:max-w-xs lg:max-w-lg lg:flex bg-white rounded-lg border shadow-lg pb-6 lg:pb-0">
        <div className="w-full lg:w-1/3 lg:p-4">
          <img
            src="https://www.foodandwine.com/thmb/jldKZBYIoXJWXodRE9ut87K8Mag=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg"
            alt="image"
            className="h-64 lg:h-full object-cover object-center w-full"
          />
        </div>

        <div className="w-full lg:w-2/3 p-4">
          <div className="inline-grid">
            <p className="work-sans font-semibold text-xl text-dark-gray">
              Cheese burger
            </p>
            <span className="work-sans font-semibold text-xs text-light-gray">
              <i className="uppercase text-secodary font-semibold">By: </i>
              Yassir ait tata
            </span>
            <p className="text-sm my-4 text-black opacity-75 line-clamp-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem fuga odit repellendus vero iure alias accusamus ex
              sed facilis magni aperiam dicta obcaecati, possimus rerum,
              consequuntur deserunt aut dolor ipsa.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center -mt-8 rounded-b-lg max-w-xs lg:max-w-lg lg:-mt-8 lg:justify-end lg:pr-8 py-1">
        <div className="text-white py-3 px-4 rounded-lg bg-blue-500">
          <p className="work-sans font-semibold text-sm tracking-wide">
            Primary action
          </p>
        </div>
        <button
          type="button"
          className="py-3 px-4 bg-blue-500 rounded-lg ml-3 text-white"
        >
          <p className="work-sans font-semibold text-sm tracking-wide">
            Secondary action
          </p>
        </button>
      </div>
    </>
  );
};

export default MealItem;
