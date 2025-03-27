import {
  FaHome,
  FaShoppingBag,
  FaHistory,
  FaGamepad,
  FaFilm,
  FaPodcast,
} from "react-icons/fa";
import {
  MdSubscriptions,
  MdLibraryMusic,
  MdLiveTv,
  MdOutlineSportsSoccer,
  MdPlaylistPlay,
  MdVideoLibrary,
} from "react-icons/md";
import { BiLike, BiMoviePlay } from "react-icons/bi";
import { IoNewspaper } from "react-icons/io5";
import { TbPlayerTrackNext, TbClock } from "react-icons/tb";
import { RiFireFill, RiLightbulbLine } from "react-icons/ri";
import { SiYoutubemusic, SiYoutubestudio, SiYoutubekids } from "react-icons/si";

export const constants = {
  sideBarMenuItems: [
    {
      heading: "",
      listItems: [
        { name: "Home", icon: <FaHome /> },
        { name: "Shorts", icon: <RiFireFill /> },
        { name: "Subscriptions", icon: <MdSubscriptions /> },
      ],
    },
    {
      heading: "You",
      listItems: [
        { name: "History", icon: <FaHistory /> },
        { name: "Playlists", icon: <MdPlaylistPlay /> },
        { name: "Your Videos", icon: <MdVideoLibrary /> },
        { name: "Your Courses", icon: <RiLightbulbLine /> },
        { name: "Watch Later", icon: <TbClock /> },
        { name: "Liked Videos", icon: <BiLike /> },
      ],
    },
    {
      heading: "Explore",
      listItems: [
        { name: "Trending", icon: <RiFireFill /> },
        { name: "Shopping", icon: <FaShoppingBag /> },
        { name: "Music", icon: <MdLibraryMusic /> },
        { name: "Live", icon: <MdLiveTv /> },
        { name: "Sports", icon: <MdOutlineSportsSoccer /> },
        { name: "Gaming", icon: <FaGamepad /> },
        { name: "Movies", icon: <BiMoviePlay /> },
        { name: "Podcasts", icon: <FaPodcast /> },
        { name: "News", icon: <IoNewspaper /> },
        { name: "Fashion & Beauty", icon: <TbPlayerTrackNext /> },
      ],
    },
    {
      heading: "More from YouTube",
      listItems: [
        { name: "YouTube Premium", icon: <SiYoutubemusic /> },
        { name: "YouTube Studio", icon: <SiYoutubestudio /> },
        { name: "YouTube Music", icon: <SiYoutubemusic /> },
        { name: "YouTube Kids", icon: <SiYoutubekids /> },
      ],
    },
  ],
  buttonsList: [
    { name: "All", value: "all" },
    { name: "Music", value: "music" },
    { name: "Sonu Nigam", value: "sonuNigam" },
    { name: "Tamil Cinema", value: "tamilCinema" },
    { name: "S. P. Balasubrahamanyam", value: "spb" },
    { name: "K. S. Chitra", value: "ksChitra" },
    { name: "Live", value: "live" },
    { name: "Rajesha Krishnan", value: "rajeshaKrishnan" },
    { name: "M. S. Subbalakshmi", value: "msSubbalakshmi" },
    { name: "Mantras", value: "mantras" },
    { name: "Bollywood Movies", value: "bollywoodMovies" },
    { name: "Cooking", value: "cooking" },
    { name: "Comedy", value: "comedy" },
    { name: "Shorts", value: "shorts" },
  ],
};
