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
        { name: "Home", icon: <FaHome />, path: "/" },
        { name: "Shorts", icon: <RiFireFill />, path: "/shorts" },
        { name: "Subscriptions", icon: <MdSubscriptions />, path: "/subscriptions" },
      ],
    },
    {
      heading: "You",
      listItems: [
        { name: "History", icon: <FaHistory />, path: "/history" },
        { name: "Playlists", icon: <MdPlaylistPlay />, path: "/playlists" },
        { name: "Your Videos", icon: <MdVideoLibrary />, path: "/your-videos" },
        { name: "Your Courses", icon: <RiLightbulbLine />, path: "/your-courses" },
        { name: "Watch Later", icon: <TbClock />, path: "/watch-later" },
        { name: "Liked Videos", icon: <BiLike />, path: "/liked-videos" },
      ],
    },
    {
      heading: "Explore",
      listItems: [
        { name: "Trending", icon: <RiFireFill />, path: "/trending" },
        { name: "Shopping", icon: <FaShoppingBag />, path: "/shopping" },
        { name: "Music", icon: <MdLibraryMusic />, path: "/music" },
        { name: "Live", icon: <MdLiveTv />, path: "/live" },
        { name: "Sports", icon: <MdOutlineSportsSoccer />, path: "/sports" },
        { name: "Gaming", icon: <FaGamepad />, path: "/gaming" },
        { name: "Movies", icon: <BiMoviePlay />, path: "/movies" },
        { name: "Podcasts", icon: <FaPodcast />, path: "/podcasts" },
        { name: "News", icon: <IoNewspaper />, path: "/news" },
        { name: "Fashion & Beauty", icon: <TbPlayerTrackNext />, path: "/fashion-beauty" },
      ],
    },
    {
      heading: "More from YouTube",
      listItems: [
        { name: "YouTube Premium", icon: <SiYoutubemusic />, path: "/youtube-premium" },
        { name: "YouTube Studio", icon: <SiYoutubestudio />, path: "/youtube-studio" },
        { name: "YouTube Music", icon: <SiYoutubemusic />, path: "/youtube-music" },
        { name: "YouTube Kids", icon: <SiYoutubekids />, path: "/youtube-kids" },
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
  youtube:{
    url:'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=',
    apiKey:'AIzaSyBkNFM1poWok00ZeGa2Sqb83hC8QAADFlE',
    byIdUrl:'https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=',
    searchUrl:'https://www.googleapis.com/youtube/v3/search?part=snippet&q='
  }
};
