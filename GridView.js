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
        if (typeof header === 'string' && header.thim() !== '') {
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
            this._rootElement = document.querySelector(rootElement);

            return true;
        }

        return false;
    }

    /**
     * Method for showing GridViewTable
     */

    render() {
        //
    }
}
