import { useState } from "react";
import { selectIsAdmin } from "../features/auth/authSlice";
import { useAppSelector } from "../utils/store";

const AddGame = () => {
  const [id, setId] = useState<number>();
  const [date, setDate] = useState<string>();
  const [homeTeamId, setHomeTeamId] = useState<number>();
  const [awayTeamId, setAwayTeamId] = useState<number>();
  const [groupId, setGroupId] = useState<string>();

  return (
    <div className="p-2 bg-gray-600/80 rounded-lg w-96 text-center">
      <h1 className="font-bold">Add Game</h1>
    </div>
  );
};

const AddTeam = () => {
  const [id, setId] = useState<number>();
  const [name, setName] = useState<string>();
  const [flag, setFlag] = useState<string>();
  const [groupId, setGroupId] = useState<string>();

  return (
    <div className="p-3 bg-gray-600/80 rounded-lg w-96 text-center space-y-2 flex flex-col items-center justify-center">
      <h1 className="font-bold">Add Team</h1>
      <input
        type="text"
        placeholder="ID"
        className="px-2 py-[0.1rem] text-black"
      />
      <input
        type="text"
        placeholder="Name"
        className="px-2 py-[0.1rem] text-black"
      />
      <input
        type="text"
        placeholder="Flag"
        className="px-2 py-[0.1rem] text-black"
      />
      <input
        type="text"
        placeholder="Group ID"
        className="px-2 py-[0.1rem] text-black"
      />
      <button className="bg-green-600/60 hover:bg-green-500 text-white font-bold px-2 py-1 rounded-full transition-all w-20">
        Add
      </button>
    </div>
  );
};

const AdminView = () => {
  const isAdmin = useAppSelector(selectIsAdmin);

  if (!isAdmin) {
    return <></>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center flex-col space-y-4">
      <h1 className="font-bold text-4xl">Admin View</h1>
      <AddGame />
      <AddTeam />
    </div>
  );
};

export default AdminView;
