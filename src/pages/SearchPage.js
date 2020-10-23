import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../store/StateProvider";
import useGoogleSearch from "../components/useGoogleSearch";
import Search from "../components/Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import RoomIcon from "@material-ui/icons/Room";
// import Response from "./data/response";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  // Live API Call
  const { data } = useGoogleSearch(term);

  // Using response.js for developing only
  // const data = Response;
  // console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="search logo"
          />
        </Link>

        <div className="searchPage__headerBody">
          <Search hideButtons />

          <div className="searchPage__options">
            <div className="options__left">
              <div className="option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>

              <div className="option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>

              <div className="option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>

              <div className="option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
            </div>

            <div className="options__right">
              <div className="option">
                <Link to="/settings">Setting</Link>
              </div>

              <div className="option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Protections */}
      {/* change true to term for not dummy */}
      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a className="searchPage__resultLink" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={item.pagemap?.cse_image[0]?.src}
                      alt={item.title}
                    />
                  )}
                {item.displayLink}
              </a>
              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
