import PageContent from "./PageContent";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  let title = "An error occurred!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  } else {
    console.log(error);
  }
  return (
    <PageContent title="Error occured">
      <p>{message}</p>
    </PageContent>
  );
}

export default ErrorPage;
