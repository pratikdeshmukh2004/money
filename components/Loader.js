import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loader = () => {
  return (
    <div className="flex h-screen justify-center items-center bg-transparent absolute w-full backdrop-blur-sm z-50">
      <FontAwesomeIcon
        className="text-3xl animate-spin text-primary"
        icon={faSpinner}
      />
    </div>
  );
};

export default Loader;
