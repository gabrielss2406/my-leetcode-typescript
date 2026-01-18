const fs = require('fs').promises;
const path = require('path');

async function main() {
    console.log("Starting build...");

    const srcDir = path.join(__dirname, 'src');
    const testsDir = path.join(__dirname, 'tests');
    const distDir = path.join(__dirname, 'dist');

    // 1. Read all problems and their contents
    let problemsData = [];
    try {
        const srcFiles = await fs.readdir(srcDir);
        const testFiles = await fs.readdir(testsDir);

        for (const file of srcFiles) {
            if (!file.endsWith('.ts')) continue;

            const problemName = file.replace('.ts', '');
            const testFile = testFiles.find(tFile => tFile.startsWith(problemName) && tFile.endsWith('.test.ts'));

            const solutionPath = path.join(srcDir, file);
            const solutionCode = await fs.readFile(solutionPath, 'utf8');

            let testCode = null;
            if (testFile) {
                const testPath = path.join(testsDir, testFile);
                testCode = await fs.readFile(testPath, 'utf8');
            }

            problemsData.push({
                name: problemName,
                solutionCode,
                testCode,
            });
        }
    } catch (error) {
        console.error("Error reading problem files:", error);
        process.exit(1);
    }
    
    // Sort problems by number
    problemsData.sort((a, b) => parseInt(a.name) - parseInt(b.name));

    // 2. Stringify the data to be injected into the HTML
    const problemsJSON = JSON.stringify(problemsData, null, 2);

    // 3. Create the self-contained HTML
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LeetCode Solutions</title>
    <style>
        :root {
            --bg-color: #f0f2f5;
            --text-color: #333;
            --container-bg: #fff;
            --border-color: #e1e4e8;
            --header-border-color: #eee;
            --code-bg-color: #f6f8fa;
            --code-text-color: #24292e;
            --secondary-text-color: #586069;
            --button-bg: #2ea44f;
            --button-hover-bg: #2c974b;
            --button-text: white;
            --shadow-color: rgba(0, 0, 0, 0.1);
        }

        [data-theme="dark"] {
            --bg-color: #0d1117;
            --text-color: #c9d1d9;
            --container-bg: #161b22;
            --border-color: #30363d;
            --header-border-color: #30363d;
            --code-bg-color: #010409;
            --code-text-color: #c9d1d9;
            --secondary-text-color: #8b949e;
            --button-bg: #238636;
            --button-hover-bg: #2ea043;
            --button-text: white;
            --shadow-color: rgba(0, 0, 0, 0.4);
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            background-color: var(--bg-color);
            color: var(--text-color);
            margin: 0;
            padding: 2rem;
            transition: background-color 0.3s, color 0.3s;
        }
        .header-container {
            max-width: 900px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }
        #theme-toggle {
             padding: 8px 12px;
        }
        .container {
            max-width: 900px;
            margin: 0 auto;
            background: var(--container-bg);
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px var(--shadow-color);
        }
        h1 {
            border-bottom: 2px solid var(--header-border-color);
            padding-bottom: 0.5rem;
            margin-top: 0;
        }
        .problem {
            border: 1px solid var(--border-color);
            border-radius: 6px;
            margin-bottom: 1rem;
            padding: 1rem;
        }
        .problem-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
        }
        .problem-header h2 {
            margin: 0;
            font-size: 1.2rem;
        }
        .code-container {
            display: none;
            margin-top: 1rem;
            border-top: 1px solid var(--border-color);
            padding-top: 1rem;
        }
        .code-container h3 {
            margin-top: 0;
            font-size: 1rem;
            color: var(--secondary-text-color);
        }
        pre {
            background-color: var(--code-bg-color);
            color: var(--code-text-color);
            border-radius: 3px;
            font-size: 85%;
            line-height: 1.45;
            overflow: auto;
            padding: 16px;
        }
        code {
            font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
        }
        button {
            background-color: var(--button-bg);
            color: var(--button-text);
            border: 1px solid rgba(27, 31, 35, 0.15);
            border-radius: 6px;
            font-size: 0.9rem;
            padding: 5px 15px;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        button:hover {
            background-color: var(--button-hover-bg);
        }
    </style>
</head>
<body>
    <div class="header-container">
        <h1> </h1>
        <button id="theme-toggle">Toggle Theme</button>
    </div>
    <div class="container">
        <h1>Solved LeetCode Problems</h1>
        <div id="problems-list"></div>
    </div>

    <script>
        const problems = ${problemsJSON};

        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;
        const applyTheme = (theme) => {
            body.dataset.theme = theme;
            localStorage.setItem('theme', theme);
            themeToggle.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
        };
        themeToggle.addEventListener('click', () => {
            const newTheme = body.dataset.theme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
        });
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
        applyTheme(initialTheme);

        document.addEventListener('DOMContentLoaded', () => {
            const problemsList = document.getElementById('problems-list');
            if (!problems || problems.length === 0) {
                problemsList.innerHTML = '<p>No problems found.</p>';
                return;
            }

            for (const problem of problems) {
                const problemElement = document.createElement('div');
                problemElement.className = 'problem';

                const header = document.createElement('div');
                header.className = 'problem-header';

                const title = document.createElement('h2');
                title.textContent = problem.name;
                
                const button = document.createElement('button');
                button.textContent = 'Show Code';

                header.appendChild(title);
                header.appendChild(button);

                const codeContainer = document.createElement('div');
                codeContainer.className = 'code-container';

                problemElement.appendChild(header);
                problemElement.appendChild(codeContainer);
                problemsList.appendChild(problemElement);

                button.addEventListener('click', () => {
                    const isVisible = codeContainer.style.display === 'block';
                    if (isVisible) {
                        codeContainer.style.display = 'none';
                        button.textContent = 'Show Code';
                    } else {
                        codeContainer.style.display = 'block';
                        button.textContent = 'Hide Code';
                        if (codeContainer.innerHTML === '') {
                            const solutionHtml = '<h3>Solution</h3><pre><code>' + escapeHtml(problem.solutionCode) + '</code></pre>';
                            const testHtml = problem.testCode ? '<h3>Tests</h3><pre><code>' + escapeHtml(problem.testCode) + '</code></pre>' : '';
                            codeContainer.innerHTML = solutionHtml + testHtml;
                        }
                    }
                });
            }
        });

        function escapeHtml(unsafe) {
            return unsafe
                 .replace(/&/g, "&amp;")
                 .replace(/</g, "&lt;")
                 .replace(/>/g, "&gt;")
                 .replace(/"/g, "&quot;")
                 .replace(/'/g, "&#039;");
        }
    </script>
</body>
</html>`;

    // 4. Write to dist/index.html
    try {
        await fs.mkdir(distDir, { recursive: true });
        await fs.writeFile(path.join(distDir, 'index.html'), htmlContent);
        console.log("Build successful! Files are in the /dist directory.");
    } catch (error) {
        console.error("Error writing build files:", error);
        process.exit(1);
    }
}

main();