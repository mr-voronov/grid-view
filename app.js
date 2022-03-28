let gridView = new GridView;

const dataForTable = {
    header: 'Hello',
    headerClass: ['header', 'header-table'],
    tableClass: ['table'],
    attributes: {
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
    },
    data: dataExample,
}

gridView.render(dataForTable);
