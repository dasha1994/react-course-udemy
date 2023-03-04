import { Link, useNavigate } from "react-router-dom";
import PageContent from "./PageContent";

function HomePage() {
  return (
    <PageContent title="Welcome!">
      <p>Browse events</p>
    </PageContent>
  );
}

export default HomePage;
