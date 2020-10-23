import React from "react";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "../components/Search";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <a href="https://github.com/SamX23/search-engine">About</a>
        </div>
        <div className="home__headerRight">
          <a href="mailto:skalexsong@gmail.com">Gmail</a>
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <div className="home__inputContainer">
          {/*  hideButtons props to hide the 2 button under search bar */}
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
