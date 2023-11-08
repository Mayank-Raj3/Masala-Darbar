import useOnlineStaus from "../utils/useOnlineStatus";

const About = () => {
  const online = useOnlineStaus();
  console.log(online);

  return (
    <div>
      <h1>About us </h1>
      <p>this is about use </p>
    </div>
  );
};

export default About;
