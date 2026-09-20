import Button from "../components/button";
import Room from "../components/room";

const Homepage = () => {
  return (
    <div className="px-20 pt-10">
      <div>
        <Navbar />
      </div>
      <p className="text-xl ">Available rooms</p>
      <div className="flex justify-evenly ">
        <Room name="DSA Study" members={104} id={"123"} />
        <Room name="ML " members={23} id={"123"} />
        <Room name="probability" members={14} id={"123"} />
        <Room name="Maths" members={124} id={"123"} />
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="flex justify-between align-middle">
      <p className="text-2xl font-bold ">Study Rooms</p>
      <p className="flex justify-end">
        <Button text="Join Room" />
        <Button text="Create Room" />
      </p>
    </div>
  );
};

export default Homepage;
