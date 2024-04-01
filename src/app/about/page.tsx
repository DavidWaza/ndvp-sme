import React from "react";
import AboutBanner from "./components/AboutHerobanner/AboutBanner";
import AboutEvent from "./components/AboutEvent/AboutEvent";
import EventActivity from "./components/EventActivity/EventActivity";
import AboutOrganizers from "./components/AboutOrganizers/AboutOrganizers";

export default function About() {
  return (
    <div>
      <AboutBanner />
      <AboutEvent />
      <EventActivity />
      <AboutOrganizers />
    </div>
  );
}
