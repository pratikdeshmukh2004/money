import {
  faChartSimple,
  faChevronDown,
  faIgloo,
  faPiggyBank,
  faSackDollar,
  faTableList,
  faVault,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="bg-[#090e20] border-b border-gray-700 py-2 justify-between px-2 lg:px-[8%] items-center flex w-full">
      <div className="flex items-center animate-text bg-gradient-to-r from-primary via-secondary to-fourth text-transparent bg-clip-text transition-colors duration-500">
        <FontAwesomeIcon className="text-2xl text-white" icon={faSackDollar} />
        <h1 className="text-xl font-extrabold ml-3">Money</h1>
      </div>
      <ul className="hidden lg:flex gap-8">
        <li className="text-gray-300 text-md hover:text-secondary cursor-pointer">
          <FontAwesomeIcon className="mr-2" icon={faChartSimple} />
          Dashboard
        </li>
        <li className="text-gray-300 text-md hover:text-secondary cursor-pointer">
          <FontAwesomeIcon className="mr-2" icon={faTableList} />
          Transanctions
        </li>
        <li className="text-gray-300 text-md hover:text-secondary cursor-pointer">
          <FontAwesomeIcon className="mr-2" icon={faSackDollar} />
          Savings
        </li>
      </ul>
      <div className="flex gap-3 bg-[#101937] hover:ring-1 cursor-pointer p-2 py-1 rounded-full items-center">
        <img src="profle.png" className="w-8 h-8 rounded-full" />
        <h4 className="text-gray-300 font-bold lg:block hidden text-xs">
          Pratik Deshmukh
        </h4>
        <FontAwesomeIcon
          className="text-gray-500 text-sm"
          icon={faChevronDown}
        />
      </div>
    </div>
  );
};

export default Header;
