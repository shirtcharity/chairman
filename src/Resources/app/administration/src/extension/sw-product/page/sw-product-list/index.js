
const { Component } = Shopware;

Component.override('sw-product-list', {
    computed: {
        productRepository() {
            const repository = this.$super('productRepository');
            const search = repository.search.bind(repository);
            repository.search = (criteria, context) => {
                if (!criteria.hasAssociation('charities')) {
                    criteria.addAssociation('charities');
                }
                return search(criteria, context);
            };
            return repository;
        },
        productColumns() {
            const columns = this.getProductColumns();
            columns.splice(1, 0, {
                property: 'extensions.charities.last().translated.name',
                dataIndex: 'extensions.charities.name',
                label: this.$tc('sw-product.list.columnCharity'),
                allowResize: true
            });
            return columns;
        }
    }
});
