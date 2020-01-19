const tableDom = {
    tagName: "table",
    attrs: {
        border: 1
    },
    subTags: [
        {
            tagName: "tr",
            subTags: [
                {
                    tagName: "td",
                    text: "some text"
                },
                {
                    tagName: "td",
                    text: "some text 2"
                }
            ]
        }
    ]
}

function createTable(table) {
    let str = "";
    document.write(createLayer(str, table));

    function createLayer(str, layer) {
        str += `<${layer.tagName}`;
        if (layer.hasOwnProperty('attrs')) {
            for (let key in layer.attrs) {
                str += ` ${key}="${layer.attrs[key]}"`;
            }
        }
        str += '>';

        if (layer.hasOwnProperty('text')) {
            str += layer.text;
        }

        if (layer.hasOwnProperty('subTags')) {
            for (let element of layer.subTags) {
                str = createLayer(str, element);
            }
        }

        str += `</${layer.tagName}>`;
        return str;
    }
}
createTable(tableDom);