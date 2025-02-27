const searchGithub = async () => {
  try {
    const start = Math.floor(Math.random() * 100000000) + 1;
    const response = await fetch(`https://api.github.com/users?since=${start}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error('Invalid API response, check the network tab');
    }

    const users = await response.json();

    // Fetch detailed data for the first 5 users
    const detailedUsers = await Promise.all(
      users.slice(0, 5).map(async (user: { login: string }) => {
        return await searchGithubUser(user.login);
      })
    );

    return detailedUsers;
  } catch (err) {
    console.error('An error occurred:', err);
    return [];
  }
};

const searchGithubUser = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });

    console.log("Response Status:", response.status); // Should be 200 if successful
    const data = await response.json();
    console.log("GitHub API Data:", data); // Should show user details

    if (!response.ok) {
      throw new Error("Invalid API response, check the network tab");
    }

    return data;
  } catch (err) {
    console.error("API Error:", err);
    return {};
  }
};

export { searchGithub, searchGithubUser };
