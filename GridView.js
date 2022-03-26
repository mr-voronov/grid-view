class GridView {
    /**
     * Class properties
     * @param [array] data
     * @param [array] _attribute
     * @param [array] _tableClass
     * @param [string] _header
     * @param [array] _headerClass
     * @param [string] _rootElement
     */

    constructor() {
        this._attribute = [];
        this._tableClass = [];
        this._header = '';
        this._headerClass = [];
        this._rootElement = '#root';
    }

    /**
     * Method for setting header
     */

    set header(header) {
        if (typeof header === 'string' && header.trim() !== '') {
            this._header = header.trim();

            return true;
        }

        return false;
    }

    /**
     * Method for setting header class
     */

    set headerClass(headerClass) {
        if (typeof headerClass === 'object') {
            this._headerClass = headerClass;
        }

        return false;
    }

    /**
     * Method for setting header class
     */

    set rootElement(rootElement) {
        if (document.querySelector(rootElement)) {
            this._rootElement = rootElement;

            return true;
        }

        return false;
    }

    /**
     * Method for showing GridViewTable
     */

    render() {
        console.log('render');
        console.log(this._rootElement)

        // showing header
        if (this._header) {
            const header = document.createElement('h1');

            header.textContent = this._header;
            this._headerClass.forEach(cssClass => {
                header.classList.add(cssClass);
            });

            document.querySelector(this._rootElement).append(header);
        }

        // showing table
        const table = document.qreateElement('table');

        this._tableClass.forEach(cssClass => {
            table.classList.add(cssClass);
        });

        const th = document.createElement('th');

        // https://youtu.be/KQUVvTmcWkI?t=626
    }
}
