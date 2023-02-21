import { Link } from "react-router-dom";
function HomePage() {
  return (
    <>
      <hi>Home</hi>
      <p>
        Go to <Link to="/products"> products</Link>
      </p>
    </>
  );
}

export default HomePage;
