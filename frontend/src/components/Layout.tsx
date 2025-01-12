import { Header } from "./Header";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useEffect } from "react";
import Footer from "./ui/Footer";

export function Layout() {
  const {
    userProfile,
    repos,
    followers,
    following,
    loading,
    setUserProfileAndRepos,
    setUserProfileAndFollowers,
    setUserProfileAndFollowing,
    onSearch,
  } = useUserContext();

  useEffect(() => {
    setUserProfileAndRepos("AnthonyAvellaneda10");
    setUserProfileAndFollowers("AnthonyAvellaneda10");
    setUserProfileAndFollowing("AnthonyAvellaneda10");
  }, [
    setUserProfileAndRepos,
    setUserProfileAndFollowers,
    setUserProfileAndFollowing,
  ]);

  return (
    <>
      <div className="min-h-screen bg-[#0d1117] text-white">
        <Header onSearch={onSearch} />
        <Navigation
          userProfile={
            loading || userProfile === undefined ? null : userProfile
          }
        />
        <div className="container mx-auto px-4 py-8 animate__animated animate__fadeIn">
          <Outlet
            context={{ userProfile, repos, followers, following, loading }}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
