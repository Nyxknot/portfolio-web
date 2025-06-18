export default async function GetGitHubRepos(username) {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=created&per_page=3`, {
        headers: {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'Nyxknot'
        }
    });

    if (!response.ok) {
        throw new Error(`Error fetching repositories for user ${username}: ${response.statusText}`);
    }

    const repos = await response.json();
    return repos.map(repo => ({
        name: repo.name,
        url: repo.html_url,
        description: repo.description || 'No description provided',
    }));
}