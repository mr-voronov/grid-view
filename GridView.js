class GridView {
    /**
     * Class properties
     * @param [string] _header
     * @param [array] _headerClass
     * @param [array] _tableClass
     * @param [obj] _attributes
     * @param [string] _rootElement
     * @param [array] data
     */

    constructor() {
        this._header = '';
        this._headerClass = [];
        this._tableClass = [];
        this._attributes = {};
        this._rootElement = '#root';

        this.data = [];
    }

    /**
     * Method for setting header
     */

    setHeader(header) {
        if (typeof header === 'string' && header.trim() !== '') {
            this._header = header.trim();

            return true;
        }

        return false;
    }

    /**
     * Method for setting header class
     */

    setHeaderClass(headerClass) {
        if (typeof headerClass === 'object') {
            this._headerClass = headerClass;

            return true;
        }

        return false;
    }

    /**
     * Method for setting table class
     */

    setTableClass(tableClass) {
    if (typeof tableClass === 'object') {
        this._tableClass = tableClass;

        return true;
    }

        return false;
    }

    /**
     * Method for setting attributes
     */

    setAttributes(attributes) {
        if (typeof attributes === 'object') {
            this._attributes = attributes;

            return true;
        }

        return false;
    }

    /**
     * Method for setting root element
     */

    setRootElement(rootElement) {
        if (document.querySelector(rootElement)) {
            this._rootElement = rootElement;

            return true;
        }

        return false;
    }

    /**
     * Method for showing GridViewTable
     */

    render(data) {
        // custom setters and class properies
        this.setHeader(data.header);
        this.setHeaderClass(data.headerClass);
        this.setTableClass(data.tableClass);
        this.setAttributes(data.attributes);
        this.data = data.data

        // showing header
        if (this._header) {
            const header = document.createElement('h1');

            header.textContent = this._header;
            this._headerClass.forEach(cssClass => {
                header.classList.add(cssClass);
            });

            document.querySelector(this._rootElement).append(header);
        }

        // creating table
        const table = document.createElement('table');

        // adding table classes
        this._tableClass.forEach(cssClass => {
            table.classList.add(cssClass);
        });

        // creating first table row (header)
        const trHeader = document.createElement('tr');

        for (let key in this._attributes) {
            const th = document.createElement('th');

            if (this._attributes[key].label) {
                th.textContent = this._attributes[key].label;
            } else {
                th.textContent = key;
            }

            trHeader.append(th);
        }

        table.append(trHeader);

        // creating the other table rows (body)
        for (let i = 0; i < this.data.length; i++) {
            const dataObj = this.data[i];
            const trBody = document.createElement('tr');

            for (let key in this._attributes) {
                const td = document.createElement('td');
                let value = dataObj[key];
                
                if (this._attributes[key].value) {
                    // checking for function in _attributes.country.value
                    value = this._attributes[key].value(dataObj);
                    td.textContent = value;
                } else if (this._attributes[key].src) {
                    // checking for _company.src
                    td.innerHTML = value;
                } else {
                    td.textContent = value;
                }

                trBody.append(td);
            }

            table.append(trBody);
        }

        document.querySelector(this._rootElement).append(table);
    }
}
