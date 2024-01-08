import { ClockIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { BookmarkIcon, HeartIcon } from "@heroicons/react/24/outline";

const MealItem = () => {
  return (
    <li>
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
            <div className="flex items-start justify-between">
              <div>
                <p className="work-sans font-semibold text-xl text-dark-gray">
                  Cheese burger
                </p>
                <span className="work-sans font-semibold text-xs text-light-gray">
                  <i className="uppercase text-secodary font-semibold">By: </i>
                  Yassir ait tata
                </span>
              </div>
              <div className="flex gap-3">
                <button>
                  <HeartIcon className="text-primary w-6 h-6" />
                </button>
                <button>
                  <BookmarkIcon className="text-primary w-6 h-6" />
                </button>
              </div>
            </div>

            <p className="text-sm my-4 text-black opacity-75 line-clamp-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem fuga odit repellendus vero iure alias accusamus ex
              sed facilis magni aperiam dicta obcaecati, possimus rerum,
              consequuntur deserunt aut dolor ipsa.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-start gap-5 -mt-8 rounded-b-lg max-w-xs lg:max-w-lg lg:-mt-6 lg:justify-end lg:pr-8 py-1">
        <div className="text-white flex items-center justify-center px-4 py-2 rounded-lg bg-light-gray">
          <p className="work-sans flex gap-2 items-center justify-center font-semibold text-sm tracking-wide">
            <ClockIcon className="w-6 h-6 text-secodary" />{" "}
            <span className="text-lg font-light">5 min</span>
          </p>
        </div>
        <div className="text-white flex items-center justify-center px-4 py-2 rounded-lg bg-secodary">
          <p className="work-sans flex gap-2 items-center justify-center font-semibold text-sm tracking-wide">
            <ShoppingCartIcon className="w-6 h-6 text-white" />{" "}
            <span className="text-lg font-light">5 ingredients</span>
          </p>
        </div>
      </div>
    </li>
  );
};

export default MealItem;
