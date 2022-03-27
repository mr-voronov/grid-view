let gridView = new GridView;

gridView.data = dataExample;
gridView.header = 'Hello';
gridView.headerClass = ['header', 'header-table'];
gridView.attributes = {
    "company": {
        "label": "Компанія",
        "src": "",
    },
    "chef": {
        "label": "Керівник",
    },
    "country": {
        "label": "Країна",
        "value": (data) => {
            if (data['country'] === 'Germany') {
                return data['country'] + ' map';
            }

            return data['country'];
        }
    }
}

gridView.render();
