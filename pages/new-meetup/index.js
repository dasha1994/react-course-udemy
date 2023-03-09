import { Fragment } from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";

function NewMeetupPage() {
  async function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);
  }

  return (
    <Fragment>
      <Head>
        <title>React meetups</title>
        <meta name="description" content="Create meetups"></meta>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetupPage;
