import template from './shirtcharity-chairman-detail.html.twig';
import './shirtcharity-chairman-detail.scss';

const { Component, Mixin, Data: { Criteria } } = Shopware;
const { mapPropertyErrors } = Component.getComponentHelper();

Component.register('shirtcharity-chairman-detail', {
    template,

    inject: ['repositoryFactory'],

    mixins: [
        Mixin.getByName('placeholder'),
        Mixin.getByName('notification'),
        Mixin.getByName('discard-detail-page-changes')('charity')
    ],

    shortcuts: {
        'SYSTEMKEY+S': 'onSave',
        ESCAPE: 'onCancel'
    },

    props: {
        charityId: {
            type: String,
            required: false,
            default: null
        }
    },

    data() {
        return {
            charity: null,
            customFieldSets: [],
            isLoading: false,
            isSaveSuccessful: false
        };
    },

    metaInfo() {
        return {
            title: this.$createTitle(this.identifier)
        };
    },

    computed: {
        identifier() {
            return this.placeholder(this.charity, 'name');
        },

        charityIsLoading() {
            return this.isLoading || this.charity == null;
        },

        charityRepository() {
            return this.repositoryFactory.create('shirtcharity_charity');
        },

        mediaRepository() {
            return this.repositoryFactory.create('media');
        },

        customFieldSetRepository() {
            return this.repositoryFactory.create('custom_field_set');
        },

        customFieldSetCriteria() {
            const criteria = new Criteria();
            criteria.setPage(1);
            criteria.setLimit(100);
            criteria.addFilter(
                Criteria.equals('relations.entityName', 'shirtcharity_charity')
            );

            criteria.getAssociation('customFields')
                .addSorting(Criteria.sort('config.customFieldPosition', 'ASC', true))
                .setLimit(100);

            return criteria;
        },

        logoUploadTag() {
            return `shirtcharity-chairman-detail--${this.charity.id}`;
        },

        tooltipSave() {
            return {
                message: `${this.$device.getSystemKey()} + S`,
                appearance: 'light'
            };
        },

        tooltipCancel() {
            return {
                message: 'ESC',
                appearance: 'light'
            };
        },

        ...mapPropertyErrors('charity', ['name'])
    },

    watch: {
        charityId() {
            this.createdComponent();
        }
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            if (this.charityId) {
                this.loadEntityData();
                return;
            }

            Shopware.State.commit('context/resetLanguageToDefault');
            this.charity = this.charityRepository.create(Shopware.Context.api);
        },

        loadEntityData() {
            this.isLoading = true;

            this.charityRepository.get(this.charityId, Shopware.Context.api).then(charity => {
                this.isLoading = false;
                this.charity = charity;
            });

            this.customFieldSetRepository
                .search(this.customFieldSetCriteria, Shopware.Context.api)
                .then(result => {
                    this.customFieldSets = result.filter(set => set.customFields.length > 0);
                });
        },

        abortOnLanguageChange() {
            return this.charityRepository.hasChanges(this.charity);
        },

        saveOnLanguageChange() {
            return this.onSave();
        },

        onChangeLanguage() {
            this.loadEntityData();
        },

        setLogoItem({ targetId }) {
            this.charity.logoId = targetId;
        },

        setLogoFromSidebar(media) {
            this.charity.logoId = media.id;
        },

        onUnlinkLogo() {
            this.charity.logoId = null;
        },

        openMediaSidebar() {
            this.$refs.mediaSidebarItem.openContent();
        },

        onDropMedia(dragData) {
            this.setLogoItem({ targetId: dragData.id });
        },

        onSave() {
            this.isLoading = true;

            this.charityRepository.save(this.charity, Shopware.Context.api).then(() => {
                this.isLoading = false;
                this.isSaveSuccessful = true;
                if (this.charityId === null) {
                    this.$router.push({ name: 'shirtcharity.chairman.detail', params: { id: this.charity.id } });
                    return;
                }

                this.loadEntityData();
            }).catch(exception => {
                this.isLoading = false;
                this.createNotificationError({
                    title: this.$tc('global.default.error'),
                    message: this.$tc(
                        'global.notification.notificationSaveErrorMessageRequiredFieldsInvalid'
                    )
                });
                throw exception;
            });
        },

        onCancel() {
            this.$router.push({ name: 'shirtcharity.chairman.list' });
        }
    }
});
