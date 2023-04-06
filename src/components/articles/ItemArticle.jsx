import { HiOutlineUserCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/moments";

function ItemArticle({ article }) {
  return (
    <Link
      key={article?._id}
      to={article?._id}
      className="bg-white rounded-md h-auto"
    >
      <div className="cursor-pointer">
        <img
          src={article?.urlToImage}
          className="h-56
            w-full transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300
            "
        />
      </div>
      <div className="p-4 flex flex-col justify-between gap-10">
        <div className="mb-auto">
          <div className="py-2 font-light text-sm text-gray-400">
            {article?.publishedAt && formatDate(article?.publishedAt)}
          </div>
          <p className="text-left font-semibold ">
            {article?.title ? article?.title : "title"}
          </p>
        </div>
        <div className=" mb-0 flex items-center gap-2">
          <div>
            <HiOutlineUserCircle size={20} color="gray" />
          </div>
          <div className="text-blue-500">
            {article?.author ? article?.author : "author"}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ItemArticle;
