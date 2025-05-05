import { Link } from "react-router";

export default function Home() {
  return (
    <div>
      Home
      <div>
        Go to <Link to={"/setting"}>Setting</Link>
      </div>
    </div>
  );
}
