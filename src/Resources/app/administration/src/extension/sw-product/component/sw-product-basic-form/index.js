import template from './sw-product-basic-form.html.twig';
import './sw-product-basic-form.scss';

const { Component, Context } = Shopware;

Component.override('sw-product-basic-form', {
    template,

    inject: ['repositoryFactory'],

    computed: {
        productRepository() {
            return this.repositoryFactory.create('product');
        }
    },

    methods: {
        saveProduct() {
            if (this.product) {
                this.productRepository.save(this.product, Context.api);
            }
        },
        limitValues(values, limit = 1) {
            return values.filter((_v, i) => i >= values.length - limit);
        }
    }
});
