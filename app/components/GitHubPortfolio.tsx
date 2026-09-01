"use client";

import { useEffect, useMemo, useState } from "react";

type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
  homepage: string | null;
  topics?: string[];
};

const ORG = "florinalabs";
const ORG_URL = `https://github.com/orgs/${ORG}/repositories`;
const API_URL = `https://api.github.com/orgs/${ORG}/repos?type=public&sort=pushed&per_page=12`;

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.08c.85 0 1.7.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.95-2.35 4.81-4.58 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z"
      />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 5h5v5M19 5l-9 9M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

export default function GitHubPortfolio() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function loadRepos() {
      try {
        const response = await fetch(API_URL, {
          signal: controller.signal,
          headers: { Accept: "application/vnd.github+json" },
        });

        if (!response.ok) throw new Error(`GitHub responded ${response.status}`);

        const data = (await response.json()) as GitHubRepo[];
        setRepos(data);
      } catch (error) {
        if ((error as Error).name !== "AbortError") setFailed(true);
      } finally {
        setLoading(false);
      }
    }

    loadRepos();
    return () => controller.abort();
  }, []);

  const featuredRepos = useMemo(
    () => repos.filter((repo) => !repo.fork && !repo.archived).slice(0, 6),
    [repos]
  );

  return (
    <section className="section github-section" id="github">
      <div className="container">
        <div className="github-heading">
          <div>
            <div className="section-label"><span>04</span> GitHub portfolio</div>
            <h2>Code behind the <em>work.</em></h2>
          </div>
          <div className="github-intro">
            <p>
              Public repositories from <strong>florinalabs</strong>. The cards below load directly from GitHub so the portfolio stays current as repositories are updated.
            </p>
            <a className="github-org-link" href={ORG_URL} target="_blank" rel="noreferrer">
              <GitHubIcon /> Browse all repositories <ExternalIcon />
            </a>
          </div>
        </div>

        {loading && (
          <div className="github-grid" aria-label="Loading GitHub repositories">
            {Array.from({ length: 3 }).map((_, index) => (
              <div className="repo-card repo-skeleton" key={index} aria-hidden="true">
                <div className="skeleton-line short" />
                <div className="skeleton-line" />
                <div className="skeleton-line medium" />
              </div>
            ))}
          </div>
        )}

        {!loading && featuredRepos.length > 0 && (
          <div className="github-grid">
            {featuredRepos.map((repo) => (
              <article className="repo-card" key={repo.id}>
                <div className="repo-top">
                  <span className="repo-icon"><GitHubIcon /></span>
                  <span className="repo-visibility">Public</span>
                </div>
                <h3>{repo.name}</h3>
                <p>{repo.description || "Public repository from the florinalabs engineering portfolio."}</p>
                <div className="repo-meta">
                  {repo.language && <span>{repo.language}</span>}
                  <span>★ {repo.stargazers_count}</span>
                  <span>⑂ {repo.forks_count}</span>
                  <span>Updated {formatDate(repo.updated_at)}</span>
                </div>
                {repo.topics && repo.topics.length > 0 && (
                  <div className="repo-topics">
                    {repo.topics.slice(0, 4).map((topic) => <span key={topic}>{topic}</span>)}
                  </div>
                )}
                <div className="repo-links">
                  <a href={repo.html_url} target="_blank" rel="noreferrer">Repository <ExternalIcon /></a>
                  {repo.homepage && (
                    <a href={repo.homepage} target="_blank" rel="noreferrer">Live site <ExternalIcon /></a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}

        {!loading && (failed || featuredRepos.length === 0) && (
          <div className="github-fallback">
            <div>
              <GitHubIcon />
              <h3>florinalabs on GitHub</h3>
              <p>Repository previews could not be loaded right now, but the organization portfolio is available directly on GitHub.</p>
            </div>
            <a href={ORG_URL} target="_blank" rel="noreferrer">Open GitHub portfolio <ExternalIcon /></a>
          </div>
        )}
      </div>
    </section>
  );
}
