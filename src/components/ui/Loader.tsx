import { ClipLoader } from "react-spinners";
import { BeatLoader } from "react-spinners";
type LoaderProps = {
  type: number;
  size: number;
};
const Loader = (props: LoaderProps) => {
  const color = "#DAE2E9";
  return (
    <>
      {props.type === 1 ? (
        <div className=" mt-2">
          <ClipLoader color={color} loading={true} size={props.size} />
        </div>
      ) : (
        <div className=" ">
          <BeatLoader color={color} loading={true} size={props.size} speedMultiplier={0.8}	
 />
        </div>
      )}
    </>
  );
};

export default Loader;
