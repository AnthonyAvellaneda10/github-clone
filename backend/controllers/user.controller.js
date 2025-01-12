export const getUserProfileAndRepos = async (req, res) => {
  const { username } = req.params;
  try {
    // 60 requests per hour, 5000 requests per hour for authenticated requests
    // https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api?apiVersion=2022-11-28
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    });

    const userProfile = await userRes.json();

    const repoRes = await fetch(userProfile.repos_url, {
      headers: {
        authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    });
    const repos = await repoRes.json();

    res.status(200).json({ userProfile, repos });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserProfileAndFollowers = async (req, res) => {
  const { username } = req.params;
  try {
    // 60 requests per hour, 5000 requests per hour for authenticated requests
    // https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api?apiVersion=2022-11-28
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    });

    const userProfile = await userRes.json();

    const followersRes = await fetch(`https://api.github.com/users/${username}/followers`, {
      headers: {
        authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    });

    const followers = await followersRes.json();

    res.status(200).json({ userProfile, followers });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserProfileAndFollowing = async (req, res) => {
  const { username } = req.params;
  try {
    // 60 requests per hour, 5000 requests per hour for authenticated requests
    // https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api?apiVersion=2022-11-28
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    });

    const userProfile = await userRes.json();

    const followingRes = await fetch(`https://api.github.com/users/${username}/following`, {
      headers: {
        authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    });

    const following = await followingRes.json();

    res.status(200).json({ userProfile, following });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};