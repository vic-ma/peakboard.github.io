---
layout: null
---

var main = {

    init: function () {
        // general settings for instant search
        const search = instantsearch({
            appId: '75B7PWB4DF',
            apiKey: '89a33221bbd638417a444874aaa424aa',
            indexName: 'peakboard-help',
            routing: true,
            searchParameters: {
                filters: 'NOT search-ignore:true AND lang:"' + document.querySelector('#language').innerHTML + '"'
            },
            highlightPreTag: '<em class="search-highlight">',
            highlightPostTag: '</em>',
            searchFunction(helper) {
                if(getUrlVars()["fromHomepage"]) {
                    $('.ais-search-box--input').val(getUrlVars()["fromHomepage"]);
                    helper.setQuery(getUrlVars()["fromHomepage"]).search();
                } else {
                    helper.search();
                }
            }
        });

        // initialize SearchBox
        search.addWidget(
            instantsearch.widgets.searchBox({
                container: '#search-box',
                placeholder: (getUrlVars()["fromHomepage"] ? getUrlVars()["fromHomepage"] : document.querySelector('#search-box-text').innerHTML),
                poweredBy: false
            })
        );

        // initialize Hits
        search.addWidget(
            instantsearch.widgets.hits({
                container: '#hits',
                templates: {
                    item: document.querySelector('#hit-template').innerHTML,
                    empty: document.querySelector('#no-results-template').innerHTML
                }
            })
        );

        // Initialize pagination
        search.addWidget(
            instantsearch.widgets.pagination({
                container: '#pagination',
                maxPages: 10
            })
        );

        search.start();

        /*search.on('render', function() {
            $('.hit-category').each(function() {

                switch ($(this).text()) {
                    {% for collection in site.collections %}
                        case '{{ collection.label }}':
                            $(this).html('{{ collection.name }}');
                            break;
                    {% endfor %}
                    default:
                        break;
                }
            });
        });*/
    }
};

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

document.addEventListener('DOMContentLoaded', main.init);