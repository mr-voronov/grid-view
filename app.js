let gridView = new GridView;

gridView.data = dataExample;
gridView.header = 'Hello';
gridView.headerClass = ['header', 'header-table'];
gridView.attribute = {
    "company": {
        "label": "Компанія",
        "src": "",
    },
    "chef": {
        "label": "Керівник",
    },
    "country": {
        "value": (data) => {
            if (data['country'] === 'Germany') {
                return data['country'] + ' map';
            }

            return data['country'];
        }
    }
}

gridView.render();
