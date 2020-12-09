(this.webpackJsonp=this.webpackJsonp||[]).push([["chairman"],{"/qMG":function(t,i,a){},"3Bnu":function(t,i,a){},"58+r":function(t,i){const{Component:a}=Shopware;a.override("sw-product-list",{computed:{productRepository(){const t=this.$super("productRepository"),i=t.search.bind(t);return t.search=(t,a)=>(t.hasAssociation("charities")||t.addAssociation("charities"),i(t,a)),t},productColumns(){const t=this.getProductColumns();return t.splice(1,0,{property:"extensions.charities.last().translated.name",dataIndex:"extensions.charities.name",label:this.$tc("sw-product.list.columnCharity"),allowResize:!0}),t}}})},AI0V:function(t,i){const{Component:a}=Shopware;a.override("sw-product-detail",{computed:{productCriteria(){const t=this.$super("productCriteria");return t.addAssociation("charities"),t}}})},CbZB:function(t,i){t.exports='{% block shirtcharity_chairman_detail %}\n    <sw-page class="shirtcharity-chairman-detail">\n\n        {% block shirtcharity_chairman_detail_header %}\n            <template #smart-bar-header>\n                <h2>{{ placeholder(charity, \'name\', $tc(\'shirtcharity-chairman.detail.createTitle\')) }}</h2>\n            </template>\n        {% endblock %}\n\n        {% block shirtcharity_chairman_detail_actions %}\n            <template #smart-bar-actions>\n\n                {% block shirtcharity_chairman_detail_actions_cancel %}\n                    <sw-button\n                        v-tooltip.bottom="tooltipCancel"\n                        @click="onCancel"\n                    >\n                        {{ $t(\'shirtcharity-chairman.detail.buttons.cancel\') }}\n                    </sw-button>\n                {% endblock %}\n\n                {% block shirtcharity_chairman_detail_actions_save %}\n                    <sw-button-process\n                        v-model="isSaveSuccessful"\n                        v-tooltip.bottom="tooltipSave"\n                        :isLoading="isLoading"\n                        :disabled="isLoading"\n                        @click.prevent="onSave"\n                        variant="primary"\n                        class="shirtcharity-chairman-detail__save-action"\n                    >\n                        {{ $t(\'shirtcharity-chairman.detail.buttons.save\') }}\n                    </sw-button-process>\n                {% endblock %}\n            </template>\n        {% endblock %}\n\n        {% block shirtcharity_chairman_detail_language_switch %}\n            <template #language-switch>\n                <sw-language-switch\n                    :disabled="charityId == null"\n                    :saveChangesFunction="saveOnLanguageChange"\n                    :abortChangeFunction="abortOnLanguageChange"\n                    @on-change="onChangeLanguage">\n                </sw-language-switch>\n            </template>\n        {% endblock %}\n\n        {% block shirtcharity_chairman_detail_content %}\n            <sw-card-view slot="content">\n\n                {% block shirtcharity_chairman_detail_content_language_info %}\n                    <sw-language-info\n                        :entityDescription="placeholder(charity, \'name\', $tc(\'shirtcharity-chairman.detail.createTitle\'))">\n                    </sw-language-info>\n                {% endblock %}\n\n                {% block shirtcharity_chairman_detail_base_info_card %}\n                    <sw-card\n                        :title="$tc(\'shirtcharity-chairman.detail.cards.charityInfo\')"\n                        :isLoading="charityIsLoading"\n                    >\n                        <template v-if="!charityIsLoading">\n                            <sw-container\n                                class="shirtcharity-chairman-detail__container"\n                                columns="repeat(auto-fit, minmax(250px, 1fr))"\n                                gap="0 30px"\n                            >\n                                <div class="shirtcharity-chairman-detail__base-info-wrapper">\n\n                                    {% block shirtcharity_chairman_detail_base_info_field_name %}\n                                        <sw-field\n                                            v-model="charity.name"\n                                            :label="$tc(\'shirtcharity-chairman.detail.fields.name\')"\n                                            :placeholder="placeholder(charity, \'name\', $tc(\'shirtcharity-chairman.detail.placeholders.name\'))"\n                                            :error="charityNameError"\n                                            type="text"\n                                            name="name"\n                                            validation="required"\n                                            required\n                                        >\n                                        </sw-field>\n                                    {% endblock %}\n\n                                    {% block shirtcharity_chairman_detail_base_info_field_link %}\n                                        <sw-field\n                                            v-model="charity.link"\n                                            :label="$tc(\'shirtcharity-chairman.detail.fields.link\')"\n                                            :placeholder="$tc(\'shirtcharity-chairman.detail.placeholders.link\')"\n                                            type="text"\n                                            name="link"\n                                        >\n                                        </sw-field>\n                                    {% endblock %}\n                                </div>\n\n                                {% block shirtcharity_chairman_detail_logo_upload %}\n                                    <sw-upload-listener\n                                        :uploadTag="logoUploadTag"\n                                        autoUpload\n                                        @media-upload-finish="setLogoItem"\n                                    >\n                                    </sw-upload-listener>\n                                    <sw-media-upload-v2\n                                        class="shirtcharity-chairman-detail__logo-upload"\n                                        :source="charity.logoId"\n                                        :allowMultiSelect="false"\n                                        variant="regular"\n                                        :uploadTag="logoUploadTag"\n                                        :label="$tc(\'shirtcharity-chairman.detail.fields.logo\')"\n                                        :defaultFolder="charityRepository.entityName"\n                                        @sw-media-upload-v2-media-upload-success="setLogoItem"\n                                        @media-drop="onDropMedia"\n                                        @media-upload-sidebar-open="openMediaSidebar"\n                                        @media-upload-remove-image="onUnlinkLogo"\n                                    >\n                                    </sw-media-upload-v2>\n                                {% endblock %}\n                            </sw-container>\n\n                            {% block shirtcharity_chairman_detail_base_info_field_description %}\n                                <sw-text-editor\n                                    v-model="charity.description"\n                                    :label="$tc(\'shirtcharity-chairman.detail.fields.description\')"\n                                    :placeholder="placeholder(charity, \'description\', $tc(\'shirtcharity-chairman.detail.placeholders.description\'))"\n                                    name="description"\n                                >\n                                </sw-text-editor>\n                            {% endblock %}\n                        </template>\n                    </sw-card>\n                {% endblock %}\n\n                {% block shirtcharity_chairman_detail_custom_field_sets %}\n                    <sw-card\n                        v-if="customFieldSets.length > 0"\n                        :title="$tc(\'shirtcharity-chairman.detail.cards.customFields\')"\n                        :isLoading="charityIsLoading"\n                    >\n                        <sw-custom-field-set-renderer\n                            v-if="charity"\n                            :entity="charity"\n                            :sets="customFieldSets"\n                        >\n                        </sw-custom-field-set-renderer>\n                    </sw-card>\n                {% endblock %}\n            </sw-card-view>\n        {% endblock %}\n\n        {% block shirtcharity_chairman_detail_sidebar %}\n            <template slot="sidebar">\n                <sw-sidebar :propagateWidth="true">\n                    <sw-sidebar-media-item ref="mediaSidebarItem">\n                        <template slot="context-menu-items" slot-scope="media">\n                            <sw-context-menu-item @click="setLogoFromSidebar(media.mediaItem)">\n                                {{ $tc(\'shirtcharity-chairman.detail.buttons.useAsLogo\') }}\n                            </sw-context-menu-item>\n                        </template>\n                    </sw-sidebar-media-item>\n                </sw-sidebar>\n            </template>\n        {% endblock %}\n\n    </sw-page>\n{% endblock %}\n'},D1Ai:function(t,i){t.exports='{% block sw_product_basic_form_description_field %}\n    {% parent() %}\n    <sw-inherit-wrapper\n        v-model="product.extensions.charities"\n        :inheritedValue="parentProduct.extensions ? parentProduct.extensions.charities : null"\n        :hasParent="!!parentProduct.id"\n        :label="$tc(\'sw-product.basicForm.labelCharity\')"\n        isAssociation\n        @inheritance-remove="saveProduct"\n        @inheritance-restore="saveProduct"\n    >\n        <template #content="{ currentValue, updateCurrentValue, isInherited }">\n            <sw-entity-many-to-many-select\n                :localMode="product.isNew()"\n                :entityCollection="limitValues(currentValue)"\n                :disabled="isInherited"\n                :key="isInherited"\n                :placeholder="$tc(\'sw-product.basicForm.placeholderCharity\')"\n                @change="updateCurrentValue(limitValues($event))"\n                labelProperty="name"\n                class="sw-select-product__select_charity"\n            >\n            </sw-entity-many-to-many-select>\n        </template>\n    </sw-inherit-wrapper>\n{% endblock %}\n'},GycA:function(t,i){t.exports='{% block shirtcharity_chairman_list %}\n    <sw-page class="shirtcharity-chairman-list">\n        {% block shirtcharity_chairman_list_search_bar %}\n            <template #search-bar>\n                <sw-search-bar initialSearchType="shirtcharity_charity" :initialSearch="term" @search="onSearch">\n                </sw-search-bar>\n            </template>\n        {% endblock %}\n\n        {% block shirtcharity_chairman_list_smart_bar_header %}\n            <template #smart-bar-header>\n                {% block shirtcharity_chairman_list_smart_bar_header_title %}\n                    <h2>\n                        {% block shirtcharity_chairman_list_smart_bar_header_title_text %}\n                            {{ $tc(\'shirtcharity-chairman.list.title\') }}\n                        {% endblock %}\n\n                        {% block shirtcharity_chairman_list_smart_bar_header_amount %}\n                            <span v-if="!isLoading" class="sw-page__smart-bar-amount">\n                                ({{ total }})\n                            </span>\n                        {% endblock %}\n                    </h2>\n                {% endblock %}\n            </template>\n        {% endblock %}\n\n        {% block shirtcharity_chairman_list_actions %}\n            <template #smart-bar-actions>\n                {% block shirtcharity_chairman_list_smart_bar_actions %}\n                    <sw-button\n                        :routerLink="{ name: \'shirtcharity.chairman.create\' }"\n                        class="shirtcharity-chairman-list__add-charity"\n                        variant="primary"\n                    >\n                        {{ $t(\'shirtcharity-chairman.list.buttons.add\') }}\n                    </sw-button>\n                {% endblock %}\n            </template>\n        {% endblock %}\n\n        {% block shirtcharity_chairman_list_language_switch %}\n            <template #language-switch>\n                <sw-language-switch @on-change="onChangeLanguage"></sw-language-switch>\n            </template>\n        {% endblock %}\n\n        <template #content>\n            {% block shirtcharity_chairman_list_content %}\n                <div class="shirtcharity-chairman-list__content">\n                    {% block shirtcharity_chairman_list_grid %}\n                        <sw-entity-listing\n                            :items="charities"\n                            :isLoading="!charities"\n                            :repository="charityRepository"\n                            :showSelection="false"\n                            :columns="charityColumns"\n                            @update-records="updateTotal"\n                            class="shirtcharity-chairman-list__grid"\n                            detailRoute="shirtcharity.chairman.detail"\n                        >\n                            {% block shirtcharity_chairman_list_grid_columns_name_preview %}\n                                <template #preview-name="{ item }">\n                                    <sw-media-preview-v2 :source="item.logoId"></sw-media-preview-v2>\n                                </template>\n                            {% endblock %}\n                        </sw-entity-listing>\n                    {% endblock %}\n\n                    {% block shirtcharity_chairman_list_grid_loader %}\n                        <sw-loader v-if="isLoading"></sw-loader>\n                    {% endblock %}\n                </div>\n            {% endblock %}\n        </template>\n    </sw-page>\n{% endblock %}\n'},JfLb:function(t,i){t.exports='{% block sw_search_bar_item_cms_page %}\n    {% parent() %}\n    <router-link\n        v-else-if="type === \'shirtcharity_charity\'"\n        v-bind:to="{ name: \'shirtcharity.chairman.detail\', params: { id: item.id } }"\n        ref="routerLink"\n        class="sw-search-bar-item__link"\n    >\n        {% block sw_search_bar_item_shirtcharity_charity_label %}\n            <span class="sw-search-bar-item__label">\n                <sw-highlight-text v-bind:searchTerm="searchTerm" v-bind:text="item.name">\n                </sw-highlight-text>\n            </span>\n        {% endblock %}\n    </router-link>\n{% endblock %}\n'},K0Is:function(t,i,a){var e=a("/qMG");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,a("SZ7m").default)("c758fb2e",e,!0,{})},aauS:function(t,i,a){"use strict";a.r(i);var e=a("GycA"),n=a.n(e);const{Component:r,Mixin:s}=Shopware,{Criteria:c}=Shopware.Data;r.register("shirtcharity-chairman-list",{template:n.a,inject:["repositoryFactory"],mixins:[s.getByName("listing")],data:()=>({charities:null,isLoading:!0}),metaInfo(){return{title:this.$createTitle()}},computed:{charityRepository(){return this.repositoryFactory.create("shirtcharity_charity")},charityColumns(){return[{property:"name",dataIndex:"name",label:this.$tc("shirtcharity-chairman.list.columns.name"),routerLink:"shirtcharity.chairman.detail",inlineEdit:"string",allowResize:!0,primary:!0},{property:"link",dataIndex:"link",label:this.$tc("shirtcharity-chairman.list.columns.link"),inlineEdit:"string",allowResize:!0}]},charityCriteria(){const t=new c,i=this.getListingParams();return i.sortBy=i.sortBy||"name",i.sortDirection=i.sortDirection||"ASC",t.setTerm(this.term),t.addSorting(c.sort(i.sortBy,i.sortDirection)),t}},methods:{onChangeLanguage(t){this.getList(t)},getList(){return this.isLoading=!0,this.charityRepository.search(this.charityCriteria,Shopware.Context.api).then(t=>{this.charities=t,this.total=t.total,this.isLoading=!1})},updateTotal({total:t}){this.total=t}}});var o=a("CbZB"),h=a.n(o);a("K0Is");const{Component:l,Mixin:d,Data:{Criteria:m}}=Shopware,{mapPropertyErrors:p}=l.getComponentHelper();l.register("shirtcharity-chairman-detail",{template:h.a,inject:["repositoryFactory"],mixins:[d.getByName("placeholder"),d.getByName("notification"),d.getByName("discard-detail-page-changes")("charity")],shortcuts:{"SYSTEMKEY+S":"onSave",ESCAPE:"onCancel"},props:{charityId:{type:String,required:!1,default:null}},data:()=>({charity:null,customFieldSets:[],isLoading:!1,isSaveSuccessful:!1}),metaInfo(){return{title:this.$createTitle(this.identifier)}},computed:{identifier(){return this.placeholder(this.charity,"name")},charityIsLoading(){return this.isLoading||null==this.charity},charityRepository(){return this.repositoryFactory.create("shirtcharity_charity")},mediaRepository(){return this.repositoryFactory.create("media")},customFieldSetRepository(){return this.repositoryFactory.create("custom_field_set")},customFieldSetCriteria(){const t=new m;return t.setPage(1),t.setLimit(100),t.addFilter(m.equals("relations.entityName","shirtcharity_charity")),t.getAssociation("customFields").addSorting(m.sort("config.customFieldPosition","ASC",!0)).setLimit(100),t},logoUploadTag(){return`shirtcharity-chairman-detail--${this.charity.id}`},tooltipSave(){return{message:`${this.$device.getSystemKey()} + S`,appearance:"light"}},tooltipCancel:()=>({message:"ESC",appearance:"light"}),...p("charity",["name"])},watch:{charityId(){this.createdComponent()}},created(){this.createdComponent()},methods:{createdComponent(){this.charityId?this.loadEntityData():(Shopware.State.commit("context/resetLanguageToDefault"),this.charity=this.charityRepository.create(Shopware.Context.api))},loadEntityData(){this.isLoading=!0,this.charityRepository.get(this.charityId,Shopware.Context.api).then(t=>{this.isLoading=!1,this.charity=t}),this.customFieldSetRepository.search(this.customFieldSetCriteria,Shopware.Context.api).then(t=>{this.customFieldSets=t.filter(t=>t.customFields.length>0)})},abortOnLanguageChange(){return this.charityRepository.hasChanges(this.charity)},saveOnLanguageChange(){return this.onSave()},onChangeLanguage(){this.loadEntityData()},setLogoItem({targetId:t}){this.charity.logoId=t},setLogoFromSidebar(t){this.charity.logoId=t.id},onUnlinkLogo(){this.charity.logoId=null},openMediaSidebar(){this.$refs.mediaSidebarItem.openContent()},onDropMedia(t){this.setLogoItem({targetId:t.id})},onSave(){this.isLoading=!0,this.charityRepository.save(this.charity,Shopware.Context.api).then(()=>{this.isLoading=!1,this.isSaveSuccessful=!0,null!==this.charityId?this.loadEntityData():this.$router.push({name:"shirtcharity.chairman.detail",params:{id:this.charity.id}})}).catch(t=>{throw this.isLoading=!1,this.createNotificationError({title:this.$tc("global.default.error"),message:this.$tc("global.notification.notificationSaveErrorMessageRequiredFieldsInvalid")}),t})},onCancel(){this.$router.push({name:"shirtcharity.chairman.list"})}}});var y=a("nvub"),u=a("wwkW");const{Application:g,Module:b}=Shopware;g.addServiceProviderDecorator("searchTypeService",t=>(t.upsertType("shirtcharity_charity",{entityName:"shirtcharity_charity",entityService:"shirtcharityCharityService",placeholderSnippet:"shirtcharity-chairman.general.placeholderSearchBar",listingRoute:"shirtcharity.chairman.list"}),t)),b.register("shirtcharity-chairman",{type:"plugin",name:"chairman",title:"shirtcharity-chairman.general.mainMenuItem",description:"shirtcharity-chairman.general.description",color:"#cadd6c",icon:"default-basic-shape-heart",entity:"shirtcharity_charity",snippets:{"de-DE":y,"en-GB":u},routes:{list:{component:"shirtcharity-chairman-list",path:"list"},detail:{component:"shirtcharity-chairman-detail",path:"detail/:id",meta:{parentPath:"shirtcharity.chairman.list"},props:{default:t=>({charityId:t.params.id})}},create:{component:"shirtcharity-chairman-detail",path:"create",meta:{parentPath:"shirtcharity.chairman.list"}}},navigation:[{label:"shirtcharity-chairman.general.mainMenuItem",color:"#cadd6c",path:"shirtcharity.chairman.list",icon:"default-basic-shape-heart",position:45}]});var _=a("D1Ai"),w=a.n(_);a("ocAd");const{Component:k,Context:f}=Shopware;k.override("sw-product-basic-form",{template:w.a,inject:["repositoryFactory"],computed:{productRepository(){return this.repositoryFactory.create("product")}},methods:{saveProduct(){this.product&&this.productRepository.save(this.product,f.api)},limitValues:(t,i=1)=>t.filter((a,e)=>e>=t.length-i)}});a("AI0V"),a("58+r");var C=a("JfLb"),v=a.n(C);const{Component:S}=Shopware;S.override("sw-search-bar-item",{template:v.a})},nvub:function(t){t.exports=JSON.parse('{"global":{"entities":{"shirtcharity_charity":"Charity | Charities"}},"sw-product":{"basicForm":{"labelCharity":"Charity","placeholderCharity":"Gib eine Charity ein ..."},"list":{"columnCharity":"Charity"}},"shirtcharity-chairman":{"general":{"mainMenuItem":"Charities","description":"Hier kannst du Charities verwalten","placeholderSearchBar":"Durchsuche alle Charities ..."},"list":{"title":"Charities","buttons":{"add":"Charity hinzufügen"},"columns":{"name":"Name","link":"Webseite"}},"detail":{"createTitle":"Neue Charity","cards":{"charityInfo":"Charity-Informationen","customFields":"Zusatzfelder"},"buttons":{"save":"Speichern","cancel":"Abbrechen","useAsLogo":"Als Logo wählen"},"fields":{"name":"Name","link":"Webseite","logo":"Logo","description":"Beschreibung"},"placeholders":{"name":"Gib den Namen der Charity ein ...","link":"Gib die URL der Charity-Website ein ...","description":"Gib die Beschreibung der Charity ein ..."}}}}')},ocAd:function(t,i,a){var e=a("3Bnu");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,a("SZ7m").default)("426ecf2a",e,!0,{})},wwkW:function(t){t.exports=JSON.parse('{"global":{"entities":{"shirtcharity_charity":"Charity | Charities"}},"sw-product":{"basicForm":{"labelCharity":"Charity","placeholderCharity":"Enter charity..."},"list":{"columnCharity":"Charity"}},"shirtcharity-chairman":{"general":{"mainMenuItem":"Charities","description":"You can manage charities here","placeholderSearchBar":"Search charities..."},"list":{"title":"Charities","buttons":{"add":"Add Charity"},"columns":{"name":"Name","link":"Web Page"}},"detail":{"createTitle":"New Charity","cards":{"charityInfo":"Charity Information","customFields":"Custom Fields"},"buttons":{"save":"Save","cancel":"Cancel","useAsLogo":"Use as Logo"},"fields":{"name":"Name","link":"Web Page","logo":"Logo","description":"Description"},"placeholders":{"name":"Enter charity name ...","link":"Enter charity URL ...","description":"Enter description ..."}}}}')}},[["aauS","runtime","vendors-node"]]]);