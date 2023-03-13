import React, { useState } from "react";
import DMList from "./DMList";
import DM from "./DM";

const DMPage = ({ currentUser }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div>
      <DMList currentUser={currentUser} setSelectedUser={setSelectedUser} />
      {selectedUser && <DM currentUser={currentUser} selectedUser={selectedUser} />}
      
    </div>
  );
};

export default DMPage;