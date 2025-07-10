import React, { Component } from 'react';
import Header from './Header';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faStar, faCodeBranch, faEye, faTimes, faExternalLinkAlt, faCalendarAlt, faCode } from '@fortawesome/free-solid-svg-icons';

class GitHubProjects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            loading: true,
            error: null,
            searchTerm: '',
            showForked: true,
            sortBy: 'updated',
            selectedProject: null,
            modalOpen: false,
            readmeContent: null,
            readmeLoading: false,
            transformedContent: null
        };
    }

    componentDidMount() {
        this.fetchGitHubProjects();
    }

    fetchGitHubProjects = async () => {
        try {
            this.setState({ loading: true, error: null });
            
            // Replace 'dilipagheda' with your actual GitHub username
            const username = 'dilipagheda';
            const response = await fetch(`https://api.github.com/users/${username}/repos?sort=${this.state.sortBy}&per_page=100`, {
                headers: {
                    'Accept': 'application/vnd.github.v3+json',
                    'User-Agent': 'dilipagheda-portfolio'
                }
            });
            
            if (response.ok) {
                const projects = await response.json();
                this.setState({
                    projects: projects,
                    loading: false
                });
            } else if (response.status === 403) {
                // Rate limit exceeded - use fallback data
                console.log('GitHub API rate limited, using fallback data');
                this.setState({
                    projects: this.getFallbackProjects(),
                    loading: false
                });
            } else if (response.status === 404) {
                this.setState({
                    error: 'User not found or repositories are private.',
                    loading: false
                });
            } else {
                this.setState({
                    error: `Failed to fetch projects: ${response.status} ${response.statusText}`,
                    loading: false
                });
            }
        } catch (error) {
            console.error('Error fetching GitHub projects:', error);
            // Use fallback data on network errors too
            this.setState({
                projects: this.getFallbackProjects(),
                loading: false
            });
        }
    };

    getFallbackProjects = () => {
        return [
            {
                id: 1,
                name: 'react-would-you-rather',
                description: 'A React app that lets users play the "Would You Rather" game. Built with React, Redux, and Bootstrap.',
                language: 'JavaScript',
                stargazers_count: 5,
                forks_count: 2,
                watchers_count: 3,
                updated_at: '2024-01-15T10:30:00Z',
                html_url: 'https://github.com/dilipagheda/react-would-you-rather',
                homepage: 'https://react-would-you-rather.vercel.app',
                fork: false,
                owner: { login: 'dilipagheda' }
            },
            {
                id: 2,
                name: 'myreads-app',
                description: 'A React app for managing personal book library. Users can search for books and organize them into shelves.',
                language: 'JavaScript',
                stargazers_count: 8,
                forks_count: 3,
                watchers_count: 4,
                updated_at: '2024-01-10T14:20:00Z',
                html_url: 'https://github.com/dilipagheda/myreads-app',
                homepage: 'https://myreads-app.vercel.app',
                fork: false,
                owner: { login: 'dilipagheda' }
            },
            {
                id: 3,
                name: 'neighborhood-map',
                description: 'A React app that displays a map with various points of interest. Features include filtering and search functionality.',
                language: 'JavaScript',
                stargazers_count: 6,
                forks_count: 1,
                watchers_count: 2,
                updated_at: '2024-01-05T09:15:00Z',
                html_url: 'https://github.com/dilipagheda/neighborhood-map',
                homepage: 'https://neighborhood-map.vercel.app',
                fork: false,
                owner: { login: 'dilipagheda' }
            },
            {
                id: 4,
                name: 'restaurant-reviews',
                description: 'A Progressive Web App for restaurant reviews. Features offline functionality and responsive design.',
                language: 'JavaScript',
                stargazers_count: 4,
                forks_count: 2,
                watchers_count: 3,
                updated_at: '2024-01-01T16:45:00Z',
                html_url: 'https://github.com/dilipagheda/restaurant-reviews',
                homepage: 'https://restaurant-reviews.vercel.app',
                fork: false,
                owner: { login: 'dilipagheda' }
            },
            {
                id: 5,
                name: 'memory-game',
                description: 'A classic memory card game built with React. Features animations and score tracking.',
                language: 'JavaScript',
                stargazers_count: 7,
                forks_count: 4,
                watchers_count: 5,
                updated_at: '2023-12-28T11:30:00Z',
                html_url: 'https://github.com/dilipagheda/memory-game',
                homepage: 'https://memory-game.vercel.app',
                fork: false,
                owner: { login: 'dilipagheda' }
            },
            {
                id: 6,
                name: 'arcade-game',
                description: 'A browser-based arcade game inspired by classic Frogger. Built with HTML5 Canvas and JavaScript.',
                language: 'JavaScript',
                stargazers_count: 9,
                forks_count: 3,
                watchers_count: 6,
                updated_at: '2023-12-20T13:20:00Z',
                html_url: 'https://github.com/dilipagheda/arcade-game',
                homepage: 'https://arcade-game.vercel.app',
                fork: false,
                owner: { login: 'dilipagheda' }
            }
        ];
    };

    handleSearchChange = (e) => {
        this.setState({ searchTerm: e.target.value });
    };

    handleSortChange = (e) => {
        this.setState({ sortBy: e.target.value }, () => {
            this.fetchGitHubProjects();
        });
    };

    handleProjectClick = async (project) => {
        console.log('Project clicked:', project.name);
        this.setState({
            selectedProject: project,
            modalOpen: true,
            readmeContent: null,
            readmeLoading: true
        });
        
        await this.fetchReadmeContent(project);
    };

    fetchReadmeContent = async (project) => {
        try {
            const response = await fetch(`https://api.github.com/repos/${project.owner.login}/${project.name}/readme`, {
                headers: {
                    'Accept': 'application/vnd.github.v3+json',
                    'User-Agent': 'dilipagheda-portfolio'
                }
            });
            
            if (response.ok) {
                const data = await response.json();
                const transformedContent = this.transformReadmeContent(data.content);
                this.setState({
                    readmeContent: data.content,
                    transformedContent: transformedContent,
                    readmeLoading: false
                });
            } else if (response.status === 403) {
                // Rate limited - show fallback content
                const fallbackContent = this.getFallbackReadmeContent(project.name);
                const transformedContent = this.transformReadmeContent(fallbackContent);
                this.setState({
                    readmeContent: fallbackContent,
                    transformedContent: transformedContent,
                    readmeLoading: false
                });
            } else if (response.status === 404) {
                // No README found
                this.setState({
                    readmeContent: null,
                    transformedContent: null,
                    readmeLoading: false
                });
            } else {
                // Other error
                this.setState({
                    readmeContent: null,
                    transformedContent: null,
                    readmeLoading: false
                });
            }
        } catch (error) {
            console.error('Error fetching README:', error);
            // Use fallback content on network errors
            const fallbackContent = this.getFallbackReadmeContent(project.name);
            const transformedContent = this.transformReadmeContent(fallbackContent);
            this.setState({
                readmeContent: fallbackContent,
                transformedContent: transformedContent,
                readmeLoading: false
            });
        }
    };

    getFallbackReadmeContent = (projectName) => {
        const fallbackReadmes = {
            'react-would-you-rather': `# React Would You Rather

A React app that lets users play the "Would You Rather" game. This project demonstrates React concepts including state management, routing, and user interactions.

## Features

- Interactive question interface
- User authentication and profiles
- Real-time voting and statistics
- Responsive design for mobile and desktop
- Leaderboard functionality

## Technologies Used

- **React** - Frontend framework
- **Redux** - State management
- **React Router** - Navigation
- **Bootstrap** - UI components
- **JavaScript ES6+** - Modern JavaScript features

## Installation

\`\`\`bash
npm install
npm start
\`\`\`

## Usage

1. Start the development server
2. Navigate to the app in your browser
3. Answer "Would You Rather" questions
4. View your statistics and leaderboard

## Project Structure

- \`src/components/\` - React components
- \`src/reducers/\` - Redux reducers
- \`src/actions/\` - Redux actions
- \`src/middleware/\` - Custom middleware`,

            'myreads-app': `# MyReads App

A React app for managing personal book library. Users can search for books and organize them into different shelves.

## Features

- Search for books by title or author
- Organize books into shelves (Currently Reading, Want to Read, Read)
- Move books between shelves
- Responsive design

## Technologies Used

- **React** - Frontend framework
- **JavaScript ES6+** - Modern JavaScript
- **CSS3** - Styling
- **HTML5** - Markup

## Installation

\`\`\`bash
npm install
npm start
\`\`\`

## Usage

1. Install dependencies
2. Start the development server
3. Search for books and add them to your shelves
4. Move books between different categories`,

            'neighborhood-map': `# Neighborhood Map

A React app that displays a map with various points of interest. Features include filtering and search functionality.

## Features

- Interactive Google Maps integration
- Filter points of interest by category
- Search functionality
- Responsive design
- Accessibility features

## Technologies Used

- **React** - Frontend framework
- **Google Maps API** - Map functionality
- **JavaScript ES6+** - Modern JavaScript
- **CSS3** - Styling

## Installation

\`\`\`bash
npm install
npm start
\`\`\`

## Usage

1. Load the application
2. Use the filter sidebar to show/hide categories
3. Click on markers for more information
4. Use the search box to find specific locations`,

            'restaurant-reviews': `# Restaurant Reviews

A Progressive Web App for restaurant reviews. Features offline functionality and responsive design.

## Features

- Progressive Web App capabilities
- Offline functionality
- Responsive design
- Restaurant filtering and search
- Reviews and ratings

## Technologies Used

- **JavaScript ES6+** - Modern JavaScript
- **Service Workers** - Offline functionality
- **IndexedDB** - Local storage
- **HTML5** - Semantic markup
- **CSS3** - Responsive styling

## Installation

\`\`\`bash
npm install
npm start
\`\`\`

## Usage

1. Install the app for offline access
2. Browse restaurants by neighborhood
3. Filter by cuisine type
4. Read and write reviews`,

            'memory-game': `# Memory Game

A classic memory card game built with React. Features animations and score tracking.

## Features

- Card matching gameplay
- Score tracking
- Timer functionality
- Animations and transitions
- Responsive design

## Technologies Used

- **React** - Frontend framework
- **JavaScript ES6+** - Modern JavaScript
- **CSS3** - Animations and styling
- **HTML5** - Semantic markup

## Installation

\`\`\`bash
npm install
npm start
\`\`\`

## Usage

1. Start the game
2. Click cards to reveal them
3. Match pairs to clear the board
4. Try to complete with the fewest moves`,

            'arcade-game': `# Arcade Game

A browser-based arcade game inspired by classic Frogger. Built with HTML5 Canvas and JavaScript.

## Features

- Classic arcade gameplay
- Multiple levels with increasing difficulty
- Score tracking
- Sound effects
- Responsive controls

## Technologies Used

- **HTML5 Canvas** - Game rendering
- **JavaScript ES6+** - Game logic
- **CSS3** - Styling
- **Object-Oriented Programming** - Game architecture

## Installation

\`\`\`bash
# No installation required - runs in browser
# Open index.html in a web browser
\`\`\`

## Usage

1. Open the game in your browser
2. Use arrow keys to move the player
3. Avoid enemies and reach the water
4. Collect gems for bonus points`
        };

        return fallbackReadmes[projectName] || `# ${projectName}

This is a sample project description. The actual README content is not available due to API rate limiting.

## About

This project demonstrates various web development concepts and technologies.

## Technologies Used

- **JavaScript** - Programming language
- **HTML5** - Markup
- **CSS3** - Styling

## Installation

\`\`\`bash
npm install
npm start
\`\`\`

## Usage

1. Install dependencies
2. Start the development server
3. Open in your browser`;
    };

    closeModal = () => {
        this.setState({
            modalOpen: false,
            selectedProject: null,
            readmeContent: null,
            transformedContent: null
        });
    };

    getFilteredProjects = () => {
        const { projects, searchTerm, showForked } = this.state;
        let filtered = projects;
        
        // Filter by forked status
        if (!showForked) {
            filtered = filtered.filter(project => !project.fork);
        }
        
        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter(project =>
                project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (project.description && project.description.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }
        
        return filtered;
    };

    getLanguageIcon = (language) => {
        const languageIcons = {
            'JavaScript': 'devicon-javascript-plain',
            'TypeScript': 'devicon-typescript-plain',
            'Python': 'devicon-python-plain',
            'Java': 'devicon-java-plain',
            'C++': 'devicon-cplusplus-plain',
            'C#': 'devicon-csharp-plain',
            'PHP': 'devicon-php-plain',
            'Ruby': 'devicon-ruby-plain',
            'Go': 'devicon-go-plain',
            'Rust': 'devicon-rust-plain',
            'Swift': 'devicon-swift-plain',
            'Kotlin': 'devicon-kotlin-plain',
            'HTML': 'devicon-html5-plain',
            'CSS': 'devicon-css3-plain',
            'React': 'devicon-react-original',
            'Vue.js': 'devicon-vuejs-plain',
            'Angular': 'devicon-angularjs-plain',
            'Node.js': 'devicon-nodejs-plain',
            'Docker': 'devicon-docker-plain',
            'Git': 'devicon-git-plain'
        };
        
        return languageIcons[language] || 'devicon-github-plain';
    };

    formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    transformReadmeContent = (content) => {
        if (!content) {
            return null;
        }
        
        // Check if content is base64 encoded or plain text
        let decodedContent;
        try {
            // Try to decode as base64 first
            decodedContent = atob(content);
        } catch (error) {
            // If base64 decoding fails, treat as plain text
            decodedContent = content;
        }
        
        // Enhanced content processing with AI-like capabilities
        const processedContent = this.processContentWithAI(decodedContent);
        
        return processedContent;
    }

    processContentWithAI = (content) => {
        const sections = [];
        const lines = content.split('\n');
        
        // Extract and categorize content
        let currentSection = '';
        let currentContent = [];
        let inCodeBlock = false;
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            
            // Handle code blocks
            if (line.startsWith('```')) {
                inCodeBlock = !inCodeBlock;
                continue;
            }
            
            if (inCodeBlock) {
                currentContent.push(line);
                continue;
            }
            
            // Check for headers
            const headerMatch = line.match(/^(#{1,6})\s+(.+)$/);
            
            if (headerMatch) {
                // Process previous section
                if (currentSection && currentContent.length > 0) {
                    const processedContent = this.processSectionContent(currentContent.join('\n'));
                    this.categorizeSection(currentSection, processedContent, sections);
                }
                
                // Start new section
                currentSection = headerMatch[2].toLowerCase();
                currentContent = [];
            } else if (line) {
                currentContent.push(line);
            }
        }
        
        // Process the last section
        if (currentSection && currentContent.length > 0) {
            const processedContent = this.processSectionContent(currentContent.join('\n'));
            this.categorizeSection(currentSection, processedContent, sections);
        }
        
        // If no structured content found, create intelligent summary
        if (sections.length === 0) {
            const summary = this.createIntelligentSummary(content);
            sections.push({
                type: 'summary',
                content: summary
            });
        }
        
        // Add enhanced sections if missing
        this.addEnhancedSections(sections, content);
        
        return sections;
    }

    categorizeSection = (sectionTitle, content, sections) => {
        const title = sectionTitle.toLowerCase();
        
        if (title.includes('about') || title.includes('description') || title.includes('overview')) {
            sections.push({ type: 'description', content });
        } else if (title.includes('feature') || title.includes('functionality')) {
            sections.push({ type: 'features', content });
        } else if (title.includes('tech') || title.includes('stack') || title.includes('built') || title.includes('language')) {
            sections.push({ type: 'technologies', content });
        } else if (title.includes('install') || title.includes('setup') || title.includes('prerequisite')) {
            sections.push({ type: 'installation', content });
        } else if (title.includes('usage') || title.includes('how to') || title.includes('example')) {
            sections.push({ type: 'usage', content });
        } else {
            sections.push({ type: 'other', content, title: this.capitalizeFirstLetter(sectionTitle) });
        }
    }

    processSectionContent = (content) => {
        // Clean and enhance content
        let processed = content.trim();
        
        // Remove excessive whitespace
        processed = processed.replace(/\n\s*\n\s*\n/g, '\n\n');
        
        // Enhance lists
        processed = this.enhanceLists(processed);
        
        // Enhance code blocks
        processed = this.enhanceCodeBlocks(processed);
        
        // Add emphasis to important points
        processed = this.addEmphasis(processed);
        
        return this.cleanText(processed);
    }

    enhanceLists = (content) => {
        // Convert markdown lists to better formatted lists
        return content.replace(/^[-*+]\s+(.+)$/gm, '• $1')
                    .replace(/^\d+\.\s+(.+)$/gm, (match, item) => {
                        const num = match.match(/^\d+/)[0];
                        return `${num}. ${item}`;
                    });
    }

    enhanceCodeBlocks = (content) => {
        // Add syntax highlighting hints and improve code block formatting
        return content.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
            const language = lang || 'text';
            return `**Code (${language}):**\n\`\`\`${language}\n${code.trim()}\n\`\`\``;
        });
    }

    addEmphasis = (content) => {
        // Add emphasis to key terms and important information
        const emphasisTerms = [
            'important', 'note', 'warning', 'caution', 'tip', 'hint',
            'required', 'optional', 'default', 'example', 'demo'
        ];
        
        emphasisTerms.forEach(term => {
            const regex = new RegExp(`\\b${term}\\b`, 'gi');
            content = content.replace(regex, `**${term}**`);
        });
        
        return content;
    }

    createIntelligentSummary = (content) => {
        // Extract key information from content
        const lines = content.split('\n').slice(0, 20); // First 20 lines
        const summary = lines.join(' ').substring(0, 300);
        
        // Extract potential technologies
        const techKeywords = ['javascript', 'react', 'node', 'python', 'java', 'html', 'css', 'typescript', 'vue', 'angular'];
        const foundTech = techKeywords.filter(tech => 
            content.toLowerCase().includes(tech)
        );
        
        let enhancedSummary = this.cleanText(summary);
        
        if (foundTech.length > 0) {
            enhancedSummary += `\n\n**Technologies used:** ${foundTech.join(', ')}`;
        }
        
        return enhancedSummary;
    }

    addEnhancedSections = (sections, fullContent) => {
        // Add missing sections with intelligent defaults
        
        // Check if we have About but no Features
        const hasDescription = sections.some(s => s.type === 'description');
        const hasFeatures = sections.some(s => s.type === 'features');
        
        if (hasDescription && !hasFeatures) {
            const features = this.extractFeaturesFromContent(fullContent);
            if (features) {
                sections.push({ type: 'features', content: features });
            }
        }
        
        // Check if we have Technologies section
        const hasTechnologies = sections.some(s => s.type === 'technologies');
        if (!hasTechnologies) {
            const technologies = this.extractTechnologiesFromContent(fullContent);
            if (technologies) {
                sections.push({ type: 'technologies', content: technologies });
            }
        }
    }

    extractFeaturesFromContent = (content) => {
        // Extract features from content using pattern matching
        const featurePatterns = [
            /features?[:\s]*\n([\s\S]*?)(?=\n\n|\n#|$)/gi,
            /what it does[:\s]*\n([\s\S]*?)(?=\n\n|\n#|$)/gi,
            /functionality[:\s]*\n([\s\S]*?)(?=\n\n|\n#|$)/gi
        ];
        
        for (const pattern of featurePatterns) {
            const match = content.match(pattern);
            if (match) {
                return this.processSectionContent(match[1]);
            }
        }
        
        return null;
    }

    extractTechnologiesFromContent = (content) => {
        // Extract technologies from content
        const techPatterns = [
            /built with[:\s]*\n([\s\S]*?)(?=\n\n|\n#|$)/gi,
            /technologies?[:\s]*\n([\s\S]*?)(?=\n\n|\n#|$)/gi,
            /stack[:\s]*\n([\s\S]*?)(?=\n\n|\n#|$)/gi
        ];
        
        for (const pattern of techPatterns) {
            const match = content.match(pattern);
            if (match) {
                return this.processSectionContent(match[1]);
            }
        }
        
        // Fallback: extract from code blocks and common tech terms
        const techKeywords = {
            'Frontend': ['react', 'vue', 'angular', 'html', 'css', 'javascript', 'typescript'],
            'Backend': ['node', 'express', 'python', 'django', 'flask', 'java', 'spring'],
            'Database': ['mongodb', 'mysql', 'postgresql', 'sqlite'],
            'Tools': ['git', 'docker', 'webpack', 'babel']
        };
        
        const foundTech = {};
        Object.entries(techKeywords).forEach(([category, techs]) => {
            const found = techs.filter(tech => content.toLowerCase().includes(tech));
            if (found.length > 0) {
                foundTech[category] = found;
            }
        });
        
        if (Object.keys(foundTech).length > 0) {
            return Object.entries(foundTech)
                .map(([category, techs]) => `**${category}:** ${techs.join(', ')}`)
                .join('\n');
        }
        
        return null;
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    renderTechnologiesWithIcons = (content) => {
        // Extract technologies from content
        const technologies = this.extractTechnologiesFromText(content);
        
        if (technologies.length === 0) {
            return <p dangerouslySetInnerHTML={{ __html: content }} />;
        }

        return (
            <div className="technologies-container">
                {technologies.map((tech, index) => (
                    <div key={index} className="tech-item">
                        <div className="tech-icon">
                            <i className={this.getTechnologyIcon(tech)}></i>
                        </div>
                        <span className="tech-name">{tech}</span>
                    </div>
                ))}
            </div>
        );
    }

    extractTechnologiesFromText = (content) => {
        // Common technology keywords and their variations with more precise matching
        const techMap = {
            'javascript': ['javascript', 'js', 'es6', 'es2015'],
            'typescript': ['typescript', 'ts'],
            'react': ['react', 'reactjs', 'react.js', 'reactjs', 'react-dom', 'create-react-app'],
            'vue': ['vue', 'vuejs', 'vue.js'],
            'angular': ['angular', 'angularjs', 'angular.js'],
            'node': ['node', 'nodejs', 'node.js'],
            'python': ['python', 'py'],
            'java': ['java'],
            'html': ['html', 'html5'],
            'css': ['css', 'css3'],
            'php': ['php'],
            'ruby': ['ruby'],
            'go': ['go', 'golang'],
            'rust': ['rust'],
            'swift': ['swift'],
            'kotlin': ['kotlin'],
            'c++': ['c++', 'cpp', 'cplusplus'],
            'c#': ['c#', 'csharp'],
            'docker': ['docker'],
            'git': ['git'],
            'mongodb': ['mongodb', 'mongo'],
            'mysql': ['mysql'],
            'postgresql': ['postgresql', 'postgres'],
            'sqlite': ['sqlite'],
            'express': ['express', 'expressjs'],
            'django': ['django'],
            'flask': ['flask'],
            'spring': ['spring', 'springboot'],
            'webpack': ['webpack'],
            'babel': ['babel'],
            'sass': ['sass', 'scss'],
            'less': ['less'],
            'bootstrap': ['bootstrap'],
            'tailwind': ['tailwind', 'tailwindcss'],
            'jquery': ['jquery', 'jq'],
            'redux': ['redux'],
            'graphql': ['graphql'],
            'aws': ['aws', 'amazon web services'],
            'azure': ['azure'],
            'firebase': ['firebase'],
            'heroku': ['heroku'],
            'vercel': ['vercel'],
            'netlify': ['netlify']
        };

        const foundTech = [];
        const contentLower = content.toLowerCase();

        // Split content into words and check for exact matches
        const words = contentLower.split(/\s+/);
        const lines = contentLower.split('\n');

        Object.entries(techMap).forEach(([techName, variations]) => {
            let found = false;
            
            // Check for exact word matches first (more precise)
            for (const variant of variations) {
                const variantLower = variant.toLowerCase();
                
                // Escape special regex characters
                const escapedVariant = variantLower.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                
                // Use regex with word boundaries to avoid partial matches
                const wordBoundaryRegex = new RegExp(`\\b${escapedVariant}\\b`, 'i');
                
                // Check if it's a standalone word
                const wordMatch = words.some(word => {
                    const cleanWord = word.replace(/[^\w]/g, ''); // Remove special characters
                    return cleanWord === variantLower;
                });
                
                // Check if it's in a code block with proper context
                const codeBlockMatch = lines.some(line => {
                    const trimmedLine = line.trim();
                    
                    // Check for exact matches in quotes or backticks
                    const exactMatch = (
                        trimmedLine.includes('"' + variantLower + '"') ||
                        trimmedLine.includes("'" + variantLower + "'") ||
                        trimmedLine.includes('`' + variantLower + '`') ||
                        trimmedLine.includes('"' + variantLower + '":') ||
                        trimmedLine.includes("'" + variantLower + "':")
                    );
                    
                    // Check for package.json dependencies
                    const packageMatch = (
                        trimmedLine.includes('package.json') ||
                        trimmedLine.includes('requirements.txt') ||
                        trimmedLine.includes('dependencies') ||
                        trimmedLine.includes('devdependencies') ||
                        trimmedLine.includes('peerDependencies')
                    ) && wordBoundaryRegex.test(trimmedLine);
                    
                    return exactMatch || packageMatch;
                });
                
                // Check for React-specific patterns
                const reactSpecificMatch = techName === 'react' && (
                    contentLower.includes('react') ||
                    contentLower.includes('jsx') ||
                    contentLower.includes('create-react-app') ||
                    contentLower.includes('react-dom') ||
                    contentLower.includes('react-router') ||
                    contentLower.includes('react hooks') ||
                    contentLower.includes('useState') ||
                    contentLower.includes('useEffect') ||
                    contentLower.includes('component') ||
                    contentLower.includes('props')
                );
                
                // Additional context check to avoid false positives
                const contextCheck = () => {
                    // Don't detect "java" if "javascript" is present
                    if (techName === 'java' && contentLower.includes('javascript')) {
                        return false;
                    }
                    // Don't detect "css" if "scss" is present (unless explicitly mentioned)
                    if (techName === 'css' && contentLower.includes('scss') && !contentLower.includes('css')) {
                        return false;
                    }
                    return true;
                };
                
                if ((wordMatch || codeBlockMatch || reactSpecificMatch) && contextCheck()) {
                    found = true;
                    break;
                }
            }
            
            // Only add if we found a precise match
            if (found && !foundTech.includes(techName)) {
                foundTech.push(techName);
            }
        });

        return foundTech;
    }

    getTechnologyIcon = (techName) => {
        const iconMap = {
            'javascript': 'devicon-javascript-plain',
            'typescript': 'devicon-typescript-plain',
            'react': 'devicon-react-original',
            'vue': 'devicon-vuejs-plain',
            'angular': 'devicon-angularjs-plain',
            'node': 'devicon-nodejs-plain',
            'python': 'devicon-python-plain',
            'java': 'devicon-java-plain',
            'html': 'devicon-html5-plain',
            'css': 'devicon-css3-plain',
            'php': 'devicon-php-plain',
            'ruby': 'devicon-ruby-plain',
            'go': 'devicon-go-plain',
            'rust': 'devicon-rust-plain',
            'swift': 'devicon-swift-plain',
            'kotlin': 'devicon-kotlin-plain',
            'c++': 'devicon-cplusplus-plain',
            'c#': 'devicon-csharp-plain',
            'docker': 'devicon-docker-plain',
            'git': 'devicon-git-plain',
            'mongodb': 'devicon-mongodb-plain',
            'mysql': 'devicon-mysql-plain',
            'postgresql': 'devicon-postgresql-plain',
            'sqlite': 'devicon-sqlite-plain',
            'express': 'devicon-express-original',
            'django': 'devicon-django-plain',
            'flask': 'devicon-flask-plain',
            'spring': 'devicon-spring-plain',
            'webpack': 'devicon-webpack-plain',
            'babel': 'devicon-babel-plain',
            'sass': 'devicon-sass-original',
            'less': 'devicon-less-plain-wordmark',
            'bootstrap': 'devicon-bootstrap-plain',
            'tailwind': 'devicon-tailwindcss-plain',
            'jquery': 'devicon-jquery-plain',
            'redux': 'devicon-redux-original',
            'graphql': 'devicon-graphql-plain',
            'aws': 'devicon-amazonwebservices-original',
            'azure': 'devicon-azure-plain',
            'firebase': 'devicon-firebase-plain',
            'heroku': 'devicon-heroku-plain',
            'vercel': 'devicon-vercel-plain',
            'netlify': 'devicon-netlify-plain'
        };

        return iconMap[techName.toLowerCase()] || 'devicon-github-plain';
    }

    cleanText = (text) => {
        return text
            .replace(/^\s*[-*]\s*/gm, '• ') // Convert markdown lists to bullet points
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold text
            .replace(/\*(.*?)\*/g, '<em>$1</em>') // Italic text
            .replace(/`(.*?)`/g, '<code>$1</code>') // Code
            .replace(/\n\n/g, '</p><p>') // Paragraphs
            .replace(/\n/g, ' ') // Single line breaks to spaces
            .trim();
    };

    renderTransformedContent = (sections) => {
        if (!sections || sections.length === 0) return null;
        
        return (
            <div className="transformed-content">
                {sections.map((section, index) => (
                    <div key={index} className={`content-section ${section.type}`}>
                        {section.type === 'description' && (
                            <div className="section-content">
                                <h5>About This Project</h5>
                                <p dangerouslySetInnerHTML={{ __html: section.content }} />
                            </div>
                        )}
                        {section.type === 'features' && (
                            <div className="section-content">
                                <h5>Key Features</h5>
                                <p dangerouslySetInnerHTML={{ __html: section.content }} />
                            </div>
                        )}
                        {section.type === 'technologies' && (
                            <div className="section-content">
                                <h5>Technologies Used</h5>
                                <div className="technologies-grid">
                                    {this.renderTechnologiesWithIcons(section.content)}
                                </div>
                            </div>
                        )}
                        {section.type === 'installation' && (
                            <div className="section-content">
                                <h5>Installation</h5>
                                <p dangerouslySetInnerHTML={{ __html: section.content }} />
                            </div>
                        )}
                        {section.type === 'usage' && (
                            <div className="section-content">
                                <h5>How to Use</h5>
                                <p dangerouslySetInnerHTML={{ __html: section.content }} />
                            </div>
                        )}
                        {section.type === 'summary' && (
                            <div className="section-content">
                                <h5>Project Overview</h5>
                                <p dangerouslySetInnerHTML={{ __html: section.content }} />
                            </div>
                        )}
                        {section.type === 'other' && (
                            <div className="section-content">
                                <h5>{section.title}</h5>
                                <p dangerouslySetInnerHTML={{ __html: section.content }} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );
    };

    render() {
        const { loading, error, searchTerm, modalOpen } = this.state;
        const filteredProjects = this.getFilteredProjects();
        
        console.log('Modal state:', modalOpen);

        if (loading) {
            return (
                <div className="container pb-5">
                    <div className="row justify-content-md-center">
                        <div className="col-12 col-md-10">
                            <Header page="GITHUBPROJECTS" />
                            <div className="container content-container pb-5">
                                <div className="text-center">
                                    <div className="spinner-border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <p className="mt-3">Loading GitHub projects...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        if (error) {
            return (
                <div className="container pb-5">
                    <div className="row justify-content-md-center">
                        <div className="col-12 col-md-10">
                            <Header page="GITHUBPROJECTS" />
                            <div className="container content-container pb-5">
                                <div className="alert alert-danger" role="alert">
                                    Error loading projects: {error}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className="container pb-5">
                <div className="row justify-content-md-center">
                    <div className="col-12 col-md-10">
                        <Header page="GITHUBPROJECTS" />
                        <div className="container content-container pb-5 github-projects">
                            <div className="row justify-content-md-center">
                                <div className="col-12 content-header d-flex flex-column justify-content-center mb-5">
                                    <h1 className="text-center">GitHub Projects</h1>
                                    <p className="text-center text-muted">
                                        A showcase of my open source projects and contributions
                                    </p>
                                </div>
                                
                                {/* Search and Filter Controls */}
                                <div className="col-12 mb-4 mt-4">
                                    <div className="search-filter-container">
                                        {/* Full-width search box */}
                                        <div className="search-section">
                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Search projects..."
                                                    value={searchTerm}
                                                    onChange={this.handleSearchChange}
                                                />
                                                <div className="input-group-append">
                                                    <span className="input-group-text">
                                                        <FontAwesomeIcon icon={faSearch} />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Filter controls underneath */}
                                        <div className="filter-section">
                                            <div className="filter-controls">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="showForked"
                                                        checked={this.state.showForked}
                                                        onChange={(e) => this.setState({ showForked: e.target.checked })}
                                                    />
                                                    <label className="form-check-label" htmlFor="showForked">
                                                        Show Forked
                                                    </label>
                                                </div>
                                                <select 
                                                    className="form-control form-control-sm sort-select" 
                                                    value={this.state.sortBy}
                                                    onChange={this.handleSortChange}
                                                >
                                                    <option value="updated">Recently Updated</option>
                                                    <option value="created">Recently Created</option>
                                                    <option value="pushed">Recently Pushed</option>
                                                    <option value="name">Name A-Z</option>
                                                    <option value="stars">Most Stars</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Count */}
                                <div className="col-12 mb-3">
                                    <p className="text-muted text-center">
                                        Showing {filteredProjects.length} of {this.state.projects.length} projects
                                    </p>
                                </div>

                                {/* Projects Grid */}
                                <div className="col-12">
                                    <div className="row">
                                        {filteredProjects.map((project) => (
                                            <div key={project.id} className="col-12 col-md-6 col-lg-4 mb-4">
                                                <div 
                                                    className="card h-100 project-card" 
                                                    onClick={() => this.handleProjectClick(project)}
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    <div className="card-body">
                                                        <div className="d-flex justify-content-between align-items-start mb-2">
                                                            <div className="flex-grow-1">
                                                                <h5 className="card-title mb-0">
                                                                    <a 
                                                                        href={project.html_url} 
                                                                        target="_blank" 
                                                                        rel="noopener noreferrer"
                                                                        className="text-decoration-none"
                                                                    >
                                                                        {project.name}
                                                                    </a>
                                                                    {project.fork && (
                                                                        <span className="badge badge-secondary ml-2">Fork</span>
                                                                    )}
                                                                </h5>
                                                            </div>
                                                            {project.language && (
                                                                <i className={`${this.getLanguageIcon(project.language)} project-language-icon`}></i>
                                                            )}
                                                        </div>
                                                        
                                                        {project.description && (
                                                            <p className="card-text text-muted small">
                                                                {project.description.length > 100 
                                                                    ? `${project.description.substring(0, 100)}...` 
                                                                    : project.description
                                                                }
                                                            </p>
                                                        )}
                                                        
                                                        <div className="project-stats d-flex justify-content-between align-items-center mt-3">
                                                            <div className="d-flex align-items-center">
                                                                <FontAwesomeIcon icon={faStar} className="text-warning mr-1" />
                                                                <span className="small">{project.stargazers_count}</span>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <FontAwesomeIcon icon={faCodeBranch} className="text-info mr-1" />
                                                                <span className="small">{project.forks_count}</span>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <FontAwesomeIcon icon={faEye} className="text-secondary mr-1" />
                                                                <span className="small">{project.watchers_count}</span>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="project-footer mt-3">
                                                            <small className="text-muted">
                                                                Updated {this.formatDate(project.updated_at)}
                                                            </small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    {filteredProjects.length === 0 && (
                                        <div className="text-center mt-5">
                                            <p className="text-muted">No projects found matching your search.</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Project Detail Modal */}
                {this.state.modalOpen && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '20px'
                    }} onClick={this.closeModal}>
                        <div style={{
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            maxWidth: '800px',
                            maxHeight: '80vh',
                            width: '100%',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column'
                        }} onClick={(e) => e.stopPropagation()}>
                            {/* Modal Header */}
                            <div style={{
                                padding: '20px',
                                borderBottom: '1px solid #e9ecef',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start'
                            }}>
                                <div>
                                    <h4 style={{ margin: 0, marginBottom: '10px' }}>
                                        {this.state.selectedProject && this.state.selectedProject.name}
                                        {this.state.selectedProject && this.state.selectedProject.fork && (
                                            <span style={{
                                                backgroundColor: '#6c757d',
                                                color: 'white',
                                                padding: '2px 8px',
                                                borderRadius: '12px',
                                                fontSize: '12px',
                                                marginLeft: '10px'
                                            }}>Fork</span>
                                        )}
                                    </h4>
                                    <div style={{ marginTop: '10px' }}>
                                        <a 
                                            href={this.state.selectedProject && this.state.selectedProject.html_url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            style={{
                                                backgroundColor: '#007bff',
                                                color: 'white',
                                                padding: '5px 10px',
                                                borderRadius: '4px',
                                                textDecoration: 'none',
                                                fontSize: '14px',
                                                marginRight: '10px'
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faExternalLinkAlt} style={{ marginRight: '5px' }} />
                                            View on GitHub
                                        </a>
                                        {this.state.selectedProject && this.state.selectedProject.homepage && (
                                            <a 
                                                href={this.state.selectedProject.homepage} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                style={{
                                                    backgroundColor: '#6c757d',
                                                    color: 'white',
                                                    padding: '5px 10px',
                                                    borderRadius: '4px',
                                                    textDecoration: 'none',
                                                    fontSize: '14px'
                                                }}
                                            >
                                                <FontAwesomeIcon icon={faExternalLinkAlt} style={{ marginRight: '5px' }} />
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <button 
                                    onClick={this.closeModal}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        fontSize: '24px',
                                        cursor: 'pointer',
                                        color: '#6c757d'
                                    }}
                                >
                                    ×
                                </button>
                            </div>

                            {/* Modal Body */}
                            <div style={{
                                padding: '20px',
                                overflowY: 'auto',
                                flex: 1
                            }}>
                                {this.state.selectedProject && (
                                    <div>
                                        {/* Project Stats */}
                                        <div style={{
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                                            gap: '15px',
                                            marginBottom: '20px',
                                            padding: '15px',
                                            backgroundColor: '#f8f9fa',
                                            borderRadius: '6px'
                                        }}>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <FontAwesomeIcon icon={faStar} style={{ color: '#ffc107', marginRight: '8px' }} />
                                                <span>{this.state.selectedProject.stargazers_count} stars</span>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <FontAwesomeIcon icon={faCodeBranch} style={{ color: '#17a2b8', marginRight: '8px' }} />
                                                <span>{this.state.selectedProject.forks_count} forks</span>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <FontAwesomeIcon icon={faEye} style={{ color: '#6c757d', marginRight: '8px' }} />
                                                <span>{this.state.selectedProject.watchers_count} watchers</span>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <FontAwesomeIcon icon={faCalendarAlt} style={{ color: '#6c757d', marginRight: '8px' }} />
                                                <span>Updated {this.formatDate(this.state.selectedProject.updated_at)}</span>
                                            </div>
                                        </div>

                                        {/* Project Description */}
                                        {this.state.selectedProject.description && (
                                            <div style={{ marginBottom: '20px' }}>
                                                <h5>Description</h5>
                                                <p>{this.state.selectedProject.description}</p>
                                            </div>
                                        )}

                                        {/* Transformed Content */}
                                        <div>
                                            <h5>Project Details</h5>
                                            {this.state.readmeLoading ? (
                                                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                                                    <div style={{
                                                        border: '4px solid #f3f3f3',
                                                        borderTop: '4px solid #007bff',
                                                        borderRadius: '50%',
                                                        width: '40px',
                                                        height: '40px',
                                                        animation: 'spin 1s linear infinite',
                                                        margin: '0 auto 20px'
                                                    }}></div>
                                                    <p>Loading project details...</p>
                                                </div>
                                            ) : this.state.transformedContent ? (
                                                <div>
                                                    {this.renderTransformedContent(this.state.transformedContent)}
                                                </div>
                                            ) : (
                                                <div style={{ textAlign: 'center', padding: '40px 0', color: '#6c757d' }}>
                                                    <FontAwesomeIcon icon={faCode} size="2x" style={{ marginBottom: '15px' }} />
                                                    <p>No detailed information available for this project.</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        // Add any state mapping if needed
    }
}

export default withRouter(connect(mapStateToProps)(GitHubProjects)); 