import { useNavigate } from "react-router-dom";

interface RoomProps {
  name: string;
  members: number;
  id: string;
}

const Room = ({ name, members, id }: RoomProps) => {
  const navigate = useNavigate();
  return (
    <div
      className="!bg-[#e4ead7] px-3 py-6 my-4 min-w-[200px] cursor-pointer rounded-xl hover:font-bold tracking-tight"
      onClick={() => navigate(`room/${id}`)}
    >
      <p>{name}</p>
      <p>{members}</p>
    </div>
  );
};
export default Room;
