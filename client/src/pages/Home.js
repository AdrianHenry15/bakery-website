import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { updateCategory, updateCurrentPage } from "../redux/Store/storeSlice";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "../utils/queries";
import Loading from "../components/Loading";

const slideImages = [
  {
    url: "/assets/homepage/cake.jpg",
    caption: "Cake",
  },
  {
    url: "/assets/homepage/cupcake-1.jpg",
    caption: "Cupcakes",
  },
  {
    url: "/assets/homepage/cupcake-2.jpg",
    caption: "Another Cupcake",
  },
  {
    url: "/assets/homepage/piping-ingredients.jpg",
    caption: "Piping",
  },
  {
    url: "/assets/homepage/powdered-fruit-tart-display.jpg",
    caption: "Fruit Tart",
  },
  {
    url: "/assets/homepage/tart.jpg",
    caption: "Tart",
  },
  {
    url: "/assets/homepage/wedding-cake-1.jpg",
    caption: "Wedding Cake",
  },
];

const categories = [
  {
    url: "/assets/categories/dogs/dog.jpeg",
    name: "Dog",
    path: "/store/dog",
  },
  {
    url: "/assets/categories/cats/cat.jpeg",
    name: "Cat",
    path: "/store/cat",
  },
  {
    url: "/assets/categories/fish/fish.jpeg",
    name: "Fish",
    path: "/store/fish",
  },
];

const Home = () => {
  let categories_ids = useSelector((state) => state.store.categories);
  const dispatch = useDispatch();
  const { loading, data } = useQuery(GET_CATEGORIES);

  useEffect(() => {
    if (data) {
      dispatch(updateCategory(data.categories));
    }
  }, [data, dispatch]);

  categories_ids = categories_ids.map((category) => {
    return {
      name: category.name,
      path: `/store/category/${category._id}`,
    };
  });

  return (
    <div className='flex flex-col flex-1'>
      {loading && <Loading />}
      <div className='container mx-auto my-3 md:my-5'>
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div className='each-slide' key={index}>
              <div>
                <img
                  className='slideImage'
                  src={slideImage.url}
                  alt='slide-pictures'
                />
              </div>
            </div>
          ))}
        </Slide>
      </div>

      <div className='flex bg-white flex-col justify-center mb-4 shadow-md'>
        <h2 className='text-center text-4xl py-4 font-semibold'>
          Welcome to MoSweets{" "}
        </h2>
        <div className='w-full text-center'>
          <Link
            to='/store'
            onClick={() => dispatch(updateCurrentPage("store"))}
          >
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-4'>
              Shop Now
            </button>
          </Link>
        </div>
      </div>

      <div className='bg-white mb-5 shadow-md'>
        <div className='container mx-auto'>
          <div className='p-2'>
            <p className='font-bold md:ml-9 text-2xl'>Shop By Cake</p>
          </div>
          <div className='categories bg-white pb-5'>
            <div className='grid grid-cols-3 md:grid-cols-5 gap-4'>
              {categories.map((category, index) => (
                <Link
                  onClick={() => dispatch(updateCurrentPage("store"))}
                  to={`${categories_ids.filter(
                    (category_id) => category_id.name === category.name
                  )[0]?.path
                    }`}
                  key={index}
                >
                  <div key={index} className='text-center mx-auto'>
                    <img
                      className='inline-flex w-44'
                      alt={category.name}
                      src={category.url}
                    />
                    <p className='mt-5 font-semibold text-lg'>
                      {category.name}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
