import { data } from "../../SpeakerData";
import Speaker from "./Speaker";

const Speakers = () => {
  return (
    <div className="container-fluid">
      <Header />
      <SpeakersList data={data} />
    </div>
  );
}

export default Speakers;