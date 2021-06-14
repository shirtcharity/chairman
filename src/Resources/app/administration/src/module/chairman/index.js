import './page/shirtcharity-chairman-list';
import './page/shirtcharity-chairman-detail';
import deDE from './snippet/de-DE.json';
import enGB from './snippet/en-GB.json';

const { Application, Module } = Shopware;

Application.addServiceProviderDecorator('searchTypeService', searchTypeService => {
    searchTypeService.upsertType('shirtcharity_charity', {
        entityName: 'shirtcharity_charity',
        entityService: 'shirtcharityCharityService',
        placeholderSnippet: 'shirtcharity-chairman.general.placeholderSearchBar',
        listingRoute: 'shirtcharity.chairman.list'
    });

    return searchTypeService;
});

Module.register('shirtcharity-chairman', {
    type: 'plugin',
    name: 'chairman',
    title: 'shirtcharity-chairman.general.mainMenuItem',
    description: 'shirtcharity-chairman.general.description',
    color: '#cadd6c',
    icon: 'default-basic-shape-heart',
    entity: 'shirtcharity_charity',

    snippets: {
        'de-DE': deDE,
        'en-GB': enGB
    },

    routes: {
        list: {
            component: 'shirtcharity-chairman-list',
            path: 'list'
        },
        detail: {
            component: 'shirtcharity-chairman-detail',
            path: 'detail/:id',
            meta: {
                parentPath: 'shirtcharity.chairman.list'
            },
            props: {
                default(route) {
                    return {
                        charityId: route.params.id
                    };
                }
            }
        },
        create: {
            component: 'shirtcharity-chairman-detail',
            path: 'create',
            meta: {
                parentPath: 'shirtcharity.chairman.list'
            }
        }
    },

    navigation: [{
        label: 'shirtcharity-chairman.general.mainMenuItem',
        color: '#cadd6c',
        path: 'shirtcharity.chairman.list',
        icon: 'default-basic-shape-heart',
        position: 10,
        parent: 'sw-catalogue'
    }]
});
