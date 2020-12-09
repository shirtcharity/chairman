import template from './shirtcharity-chairman-list.html.twig';

const { Component, Mixin } = Shopware;
const { Criteria } = Shopware.Data;

Component.register('shirtcharity-chairman-list', {
    template,

    inject: [
        'repositoryFactory'
    ],

    mixins: [
        Mixin.getByName('listing')
    ],

    data() {
        return {
            charities: null,
            isLoading: true
        };
    },

    metaInfo() {
        return {
            title: this.$createTitle()
        };
    },

    computed: {
        charityRepository() {
            return this.repositoryFactory.create('shirtcharity_charity');
        },

        charityColumns() {
            return [
                {
                    property: 'name',
                    dataIndex: 'name',
                    label: this.$tc('shirtcharity-chairman.list.columns.name'),
                    routerLink: 'shirtcharity.chairman.detail',
                    inlineEdit: 'string',
                    allowResize: true,
                    primary: true
                },
                {
                    property: 'link',
                    dataIndex: 'link',
                    label: this.$tc('shirtcharity-chairman.list.columns.link'),
                    inlineEdit: 'string',
                    allowResize: true
                }
            ];
        },

        charityCriteria() {
            const criteria = new Criteria();
            const params = this.getListingParams();

            params.sortBy = params.sortBy || 'name';
            params.sortDirection = params.sortDirection || 'ASC';

            criteria.setTerm(this.term);
            criteria.addSorting(Criteria.sort(params.sortBy, params.sortDirection));

            return criteria;
        }
    },

    methods: {
        onChangeLanguage(languageId) {
            this.getList(languageId);
        },

        getList() {
            this.isLoading = true;

            return this.charityRepository.search(this.charityCriteria, Shopware.Context.api).then(searchResult => {
                this.charities = searchResult;
                this.total = searchResult.total;
                this.isLoading = false;
            });
        },

        updateTotal({ total }) {
            this.total = total;
        }
    }
});
