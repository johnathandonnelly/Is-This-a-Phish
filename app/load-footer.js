(function () {
    const f = document.querySelector('footer');
    if (!f) return;

    // Dynamically get the base path of this JS file
    const scriptSrc = document.currentScript?.src || '';
    const basePath = scriptSrc.substring(0, scriptSrc.lastIndexOf('/') + 1);

    // Build full path to meta.json relative to the JS file
    const metaPath = basePath + 'meta.json';

    fetch(metaPath)
        .then(res => {
            if (!res.ok) throw new Error('Failed to fetch meta.json');
            return res.json();
        })
        .then(m => {
            const author = m.author || '';
            const version = m.version ? 'v' + m.version : '';
            const date = m.buildDate || '';
            const commit = m.commit ? m.commit.slice(0, 7) : '';

            const githubSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style="vertical-align:middle"><path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2 .37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.58.82-2.14-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.14 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8 8 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>';

            const repoLink = '<a href="https://github.com/johnathandonnelly/Is-This-a-Phish" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="View on GitHub" style="margin-left:8px; color:inherit; text-decoration:none;">' + githubSvg + '</a>';

            f.innerHTML = `
                <div style="font-weight:bold">Made with ❤️ from ${author}</div>
                <div>${[version, date, commit].filter(Boolean).join(' · ')}</div>
                <div>${repoLink}</div>
            `;
        })
        .catch(() => {
            // Leave footer alone if meta.json is missing
        });
})();
