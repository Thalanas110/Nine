import poems from './poems.js';

// Utility Functions
function debounce(func, wait) {
    let timeout = null;

    return function (...args) {
        const later = () => {
            timeout = null;
            try {
                func(...args);
            } 
            catch (error) {
                console.error('Error occurred in debounced function:', error);
            }
        };

        if (timeout !== null) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(later, wait);
    };
}


// Component Classes
class PoemCard {
    constructor(poem) {
        this.poem = poem;
        this.element = this.render();
        this.setupEventListeners();
    }

    render() {
        const card = document.createElement('div');
        card.className = 'poem-card';
        card.setAttribute('data-title', this.poem.title);
        card.setAttribute('data-author', this.poem.author);

        const contentContainer = document.createElement('div');
        contentContainer.className = 'poem-card__content';

        // Create poem title
        const title = document.createElement('h2');
        title.className = 'poem-card__title';
            title.textContent = 'Lorem Ipsum';

        // Create poem author
        const author = document.createElement('p');
        author.className = 'poem-card__author';
        author.textContent = `by ${this.poem.author}`;

        // Create poem text container
        const textContainer = document.createElement('div');
        textContainer.className = 'poem-card__text';
        
        // Format poem with line breaks
        textContainer.innerHTML = this.formatPoemText(this.poem.text);

        // Create toggle button
        const toggleButton = document.createElement('button');
        toggleButton.className = 'poem-card__toggle';
        toggleButton.innerHTML = `
            <span class="read-more-text">Read more <i class="fas fa-chevron-down"></i></span>
            <span class="read-less-text">Show less <i class="fas fa-chevron-up"></i></span>
        `;

      // Append elements to card
      contentContainer.appendChild(title);
      contentContainer.appendChild(author);
      contentContainer.appendChild(textContainer);
      contentContainer.appendChild(toggleButton);
      card.appendChild(contentContainer);

      return card;
    }

    formatPoemText(text) {
        // Split the poem by stanzas (double newlines)
        const stanzas = text.split('\n\n');
        
        // Format each stanza with line breaks
        return stanzas.map(stanza => {
            // Replace single newlines with <br> tags
            const formattedStanza = stanza.split('\n').join('<br>');
            return `<p>${formattedStanza}</p>`;
        }).join('');
    }

    setupEventListeners() {
        const toggleButton = this.element.querySelector('.poem-card__toggle');
    
        if (toggleButton) {
          toggleButton.addEventListener('click', () => {
                this.element.classList.toggle('expanded');
            });
        }
    }
}

// header
class Header {
    constructor(props) {
        this.element = this.render(props);
    }

    render(props) {
        try {
            const header = document.createElement('header');
            header.className = 'header';

            const container = document.createElement('div');
            container.className = 'container';

            const title = document.createElement('h1');
            title.className = 'header__title';
                title.textContent = 'Lorem Ipsum';

            const subtitle = document.createElement('p');
            subtitle.className = 'header__subtitle';
                subtitle.textContent = 'Lorem Ipsum';

            container.appendChild(title);
            container.appendChild(subtitle);
            header.appendChild(container);

            return header;
        } 
        catch (error) {
            console.error('Error creating header:', error);
            
            // fallback header
            const fallbackHeader = document.createElement('header');
            fallbackHeader.className = 'header header--fallback';
            fallbackHeader.innerHTML = '<div class="container"><h1>Poetry Collection</h1></div>';
            
            return fallbackHeader;
        }
    }
}

// control panel
class ControlPanel {
    constructor(props) {
        this.element = this.render(props);
    }

    render(props) {
        const controlPanel = document.createElement('div');
        controlPanel.className = 'control-panel';

        // Create search container
        const searchContainer = document.createElement('div');
        searchContainer.className = 'search-container';

        const searchInput = document.createElement('input');
        searchInput.className = 'search-input';
        searchInput.id = 'search-input';
        searchInput.type = 'text';
        searchInput.placeholder = 'Search poems...';
        searchInput.addEventListener('input', (e) => {
          const target = e.target;
          props.onSearch(target.value.trim());
        });

        const searchIcon = document.createElement('i');
        searchIcon.className = 'fas fa-search search-icon';

        searchContainer.appendChild(searchInput);
        searchContainer.appendChild(searchIcon);

        // Create controls container
        const controls = document.createElement('div');
        controls.className = 'controls';

        // Create sort container
        const sortContainer = document.createElement('div');
        sortContainer.className = 'sort-container';

        const sortSelect = document.createElement('select');
        sortSelect.className = 'sort-select';
        sortSelect.id = 'sort-select';
        sortSelect.addEventListener('change', (e) => {
            const target = e.target;
            props.onSort(target.value);
        });

        const sortOptions = [
            { value: 'default', text: 'Sort By' },
            { value: 'title-asc', text: 'Title (A-Z)' },
            { value: 'title-desc', text: 'Title (Z-A)' },
            { value: 'author-asc', text: 'Author (A-Z)' },
            { value: 'author-desc', text: 'Author (Z-A)' }
        ];

        sortOptions.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option.value;
            optionElement.textContent = option.text;
            sortSelect.appendChild(optionElement);
        });

        const sortIcon = document.createElement('i');
        sortIcon.className = 'fas fa-chevron-down sort-icon';

        sortContainer.appendChild(sortSelect);
        sortContainer.appendChild(sortIcon);

        // Create theme toggle button
        const themeToggle = document.createElement('button');
        themeToggle.className = 'theme-toggle';
        themeToggle.id = 'theme-toggle';
        themeToggle.setAttribute('aria-label', 'Toggle dark mode');
        themeToggle.addEventListener('click', props.onToggleTheme);

        // Create theme icons
        const moonIcon = document.createElement('i');
        moonIcon.className = 'fas fa-moon';
        moonIcon.id = 'moon-icon';

        const sunIcon = document.createElement('i');
        sunIcon.className = 'fas fa-sun';
        sunIcon.id = 'sun-icon';
        sunIcon.style.display = 'none';

        themeToggle.appendChild(moonIcon);
        themeToggle.appendChild(sunIcon);

        // Append elements
        controls.appendChild(sortContainer);
        controls.appendChild(themeToggle);
        
        controlPanel.appendChild(searchContainer);
        controlPanel.appendChild(controls);

        return controlPanel;
    }
}

class Footer {
    constructor() {
        this.element = this.render();
    }

    render() {
        const footer = document.createElement('footer');
        footer.className = 'footer';

        const container = document.createElement('div');
        container.className = 'container';

        const content = document.createElement('div');
        content.className = 'footer__content';

        // info
        const info = document.createElement('div');
        info.className = 'footer__info';

        const title = document.createElement('h2');
        title.className = 'footer__title';
        title.textContent = 'Lorem Ipsum';

        const subtitle = document.createElement('p');
        subtitle.className = 'footer__subtitle';
        subtitle.textContent = 'Lorem Ipsum';

        info.appendChild(title);
        info.appendChild(subtitle);

        // social links
        const socialLinks = document.createElement('div');
        socialLinks.className = 'footer__social';

        const socialIcons = [
            { icon: 'facebook', url: 'https://www.facebook.com/future.airline.captain' },
            { icon: 'instagram', url: 'https://www.instagram.com/adriaan.amd/' },
            { icon: 'github', url: 'https://github.com/Thalanas110/Nine' }
        ];

        socialIcons.forEach(social => {
            const link = document.createElement('a');
            link.href = social.url;
            link.className = 'footer__social-link';
            link.setAttribute('aria-label', social.icon);

            const icon = document.createElement('i');
            icon.className = `fab fa-${social.icon}`;

            link.appendChild(icon);
            socialLinks.appendChild(link);
        });

        // copyright section footer
        const copyright = document.createElement('div');
        copyright.className = 'footer__copyright';
        copyright.textContent = 'Lorem Ipsum';

        // appending all sections
        content.appendChild(info);
        content.appendChild(socialLinks);

        container.appendChild(content);
        container.appendChild(copyright);
        footer.appendChild(container);

        return footer;
    }
}

// function to scroll to the top
class ScrollToTop {
    constructor() {
        this.element = this.render();
        this.setupEventListeners();
    }

    render() {
        try {
            const button = document.createElement('button');
            button.className = 'scroll-top';
            button.id = 'scroll-top';
            button.setAttribute('aria-label', 'Scroll to top');

            const icon = document.createElement('i');
            icon.className = 'fas fa-arrow-up';

            button.appendChild(icon);
            return button;
        } 
        catch (error) {
            console.error('Error creating scroll-to-top button:', error);
            // Create a fallback button if the creation fails
            const fallbackButton = document.createElement('button');
            fallbackButton.textContent = '↑';
            fallbackButton.className = 'scroll-top';
            return fallbackButton;
        }
    }

    setupEventListeners() {
        this.element.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        });
    }
}

// searching
class SearchService {
    constructor(poems) {
        this.poems = poems;
        this.filteredPoems = [...poems];
    }

    search(searchTerm) {
        if (!searchTerm) {
            this.filteredPoems = [...this.poems];
            return this.filteredPoems;
        }

        searchTerm = searchTerm.toLowerCase();
        
        this.filteredPoems = this.poems.filter(poem => 
        poem.title.toLowerCase().includes(searchTerm) ||
        poem.author.toLowerCase().includes(searchTerm) ||
        poem.text.toLowerCase().includes(searchTerm)
        );
        
        return this.filteredPoems;
    }

    sort(sortOption) {
        const poemsToSort = [...this.filteredPoems];
        
        switch (sortOption) {
        case 'title-asc':
            poemsToSort.sort((a, b) => a.title.localeCompare(b.title));
            break;
        
        case 'title-desc':
            poemsToSort.sort((a, b) => b.title.localeCompare(a.title));
            break;
        
        case 'author-asc':
            poemsToSort.sort((a, b) => a.author.localeCompare(b.author));
            break;
        
        case 'author-desc':
            poemsToSort.sort((a, b) => b.author.localeCompare(a.author));
            break;
        
        default:
            // Restore original order
            return this.filteredPoems = [...this.poems].filter(poem => 
            this.filteredPoems.some(p => p.id === poem.id)
            );
        }
        
        this.filteredPoems = poemsToSort;
        return this.filteredPoems;
    }
}

// theme controller
class ThemeService {
    constructor() {
        // saved theme in local storage
        const savedTheme = localStorage.getItem('theme') || 'light';
        this.currentTheme = savedTheme;
        
        // apply the theme
        this.applyTheme();
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme();
    }

    applyTheme() {
        // sets themes on documentbody
        document.body.setAttribute('data-theme', this.currentTheme);
        
        // store the themes in local storage
        localStorage.setItem('theme', this.currentTheme);
        
        // updating the toggle button items
        const moonIcon = document.getElementById('moon-icon');
        const sunIcon = document.getElementById('sun-icon');
        
        if (moonIcon && sunIcon) {
            if (this.currentTheme === 'dark') {
                moonIcon.style.display = 'none';
                sunIcon.style.display = 'inline';
            } 
            else {
                moonIcon.style.display = 'inline';
                sunIcon.style.display = 'none';
            }
        }
    }
}

// main app using object-oriented programming
class App {
    constructor() {
        // root elements
        this.rootElement = document.getElementById('root');
        this.rootElement.innerHTML = '';

        // main services
        this.themeService = new ThemeService();
        this.searchService = new SearchService(poems);

        // Initialize app
        this.render();
        this.setupEventListeners();
    }

    render() {
        // main elemments
        const main = document.createElement('main');
        main.className = 'container';
        main.style.paddingBottom = '4rem';

        // Add header
        const header = new Header({
        title: 'Lorem Ipsum',
        subtitle: 'Lorem Ipsum'
        }).element;

        // Create control panel
        const controlPanel = new ControlPanel({
        onSearch: debounce(this.handleSearch.bind(this), 300),
        onSort: this.handleSort.bind(this),
        onToggleTheme: this.themeService.toggleTheme.bind(this.themeService)
        }).element;

        // Create loader
        this.loader = document.createElement('div');
        this.loader.className = 'loader';
        this.loader.innerHTML = '<div class="loader__spinner"></div>';

        // Create no results element
        this.noResults = document.createElement('div');
        this.noResults.className = 'no-results';
        this.noResults.innerHTML = `
        <div class="no-results__icon"><i class="fas fa-search"></i></div>
        <h3 class="no-results__title">Lorem Ipsum</h3>
        <p class="no-results__message">Lorem Ipsum</p>
        `;

        // Create poem container
        this.poemContainer = document.createElement('div');
        this.poemContainer.className = 'poem-container';

        // Create poem cards
        this.poemCards = [];
        poems.forEach(poem => {
        const poemCard = new PoemCard(poem);
        this.poemCards.push(poemCard);
        this.poemContainer.appendChild(poemCard.element);
        });

        // Create scroll to top button
        const scrollToTop = new ScrollToTop().element;

        // Create footer
        const footer_authenticated = new Footer().element;

        // Add everything to main
        main.appendChild(controlPanel);
        main.appendChild(this.loader);
        main.appendChild(this.noResults);
        main.appendChild(this.poemContainer);

        // Add everything to root
        this.rootElement.appendChild(header);
        this.rootElement.appendChild(main);
        this.rootElement.appendChild(scrollToTop);
        this.rootElement.appendChild(footer_authenticated);
    }

    setupEventListeners() {
        // checks scroll position to enable/disable the scroll to top button
        window.addEventListener('scroll', debounce(() => {
            try {
                const scrollY = window.scrollY;
                const windowHeight = window.innerHeight;
                const scrollToTopBtn = document.querySelector('.scroll-top');
                
                if (scrollY > windowHeight * 2) {
                    scrollToTopBtn.classList.add('visible');
                } 
                else {
                    scrollToTopBtn.classList.remove('visible');
                }
            } 
            catch (error) {
                console.error('Error handling scroll event:', error);
            }
        }, 100));
    }

    handleSearch(searchTerm) {
        try {
            // show loader and hide the containers
            this.loader.style.display = 'flex';
            this.poemContainer.style.opacity = '0.5';
        } catch (error) {
            console.error('Error updating UI before search:', error);
        }

        // preventing the ui from freezing
        setTimeout(() => {
            try {
                // Search operation
                const results = this.searchService.search(searchTerm);
                this.updatePoemVisibility(results);
                
                // hide loader and show container
                this.loader.style.display = 'none';
                this.poemContainer.style.opacity = '1';
                
                // no results message
                if (results.length === 0) {
                    this.noResults.style.display = 'block';
                } 
                else {
                    this.noResults.style.display = 'none';
                }
            } 
            catch (error) {
                console.error('Error during search operation:', error);
                
                // hide loader even if there's an error
                try {
                    this.loader.style.display = 'none';
                    this.poemContainer.style.opacity = '1';
                } 
                catch (uiError) {
                    console.error('Failed to reset UI after error:', uiError);
                }
            }
        }, 300);
    }

    handleSort(sortOption) {
        try {
            this.loader.style.display = 'flex';
            this.poemContainer.style.opacity = '0.5';
        } 
        catch (error) {
            console.error('Error updating UI before sorting:', error);
        }
        
        setTimeout(() => {
            try {
            // sorters
            const sortedPoems = this.searchService.sort(sortOption);
            
            sortedPoems.forEach(poem => {
                try {
                    const poemCard = this.poemCards.find(card => card.poem.id === poem.id);
                    if (poemCard) {
                        this.poemContainer.appendChild(poemCard.element);
                    }
                } 
                catch (cardError) {
                console.error('Error processing poem card during sort:', cardError);
                }
            });
            
            // update the ui after sorting the thing
            this.loader.style.display = 'none';
            this.poemContainer.style.opacity = '1';
            } 
            catch (error) {
                console.error('Error during sort operation:', error);
                
                // reset ui, even if there's an error
                try {
                    this.loader.style.display = 'none';
                    this.poemContainer.style.opacity = '1';
                } 
                catch (uiError) {
                    console.error('Failed to reset UI after sort error:', uiError);
                }
            }
        }, 300);
    }

    updatePoemVisibility(visiblePoems) {
        try {
            this.poemCards.forEach(card => {
                const isVisible = visiblePoems.some(poem => poem.id === card.poem.id);
                card.element.style.display = isVisible ? 'block' : 'none';
            });
        } 
        catch (error) {
            console.error('Error updating poem visibility:', error);
            // attempt to make all poems visible if there's an error
            try {
                this.poemCards.forEach(card => {
                    card.element.style.display = 'block';
                });
            } 
            catch (recoveryError) {
                console.error('Failed to recover from visibility error:', recoveryError);
            }
        }
    }
}

// initialization
document.addEventListener('DOMContentLoaded', () => {
  new App();
});