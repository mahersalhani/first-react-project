import { Container } from "react-bootstrap";
import { per } from "./data";
import Informatin from "./components/Informatin";
import Dates from "./components/Dates";
import Buttens from "./components/Buttens";
import { useState } from "react";

function App() {
  const [personData, setPersonData] = useState(per);

  const onDelete = () => {
    setPersonData([]);
  };
  const onShow = () => {
    setPersonData(per);
  };

  return (
    <div className="font color-body">
      <Container className="py-5">
        <Informatin per={personData}></Informatin>
        <Dates perr={personData}></Dates>
        <Buttens deleteData={onDelete} showDelete={onShow}></Buttens>
      </Container>
    </div>
  );
}

export default App;
