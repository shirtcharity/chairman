<?php declare(strict_types=1);

namespace ShirtCharity\Chairman\Core\Content\Charity;

use ShirtCharity\Chairman\Core\Content\Charity\Aggregate\CharityProduct\CharityProductDefinition;
use ShirtCharity\Chairman\Core\Content\Charity\Aggregate\CharityTranslation\CharityTranslationDefinition;
use Shopware\Core\Content\Media\MediaDefinition;
use Shopware\Core\Content\Product\ProductDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\EntityDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\Field\FkField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\PrimaryKey;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\Required;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\RestrictDelete;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\SearchRanking;
use Shopware\Core\Framework\DataAbstractionLayer\Field\IdField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\ManyToManyAssociationField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\ManyToOneAssociationField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\StringField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\TranslatedField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\TranslationsAssociationField;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;

class CharityDefinition extends EntityDefinition
{
    public const ENTITY_NAME = 'shirtcharity_charity';

    public function getEntityName(): string
    {
        return self::ENTITY_NAME;
    }

    public function getCollectionClass(): string
    {
        return CharityCollection::class;
    }

    public function getEntityClass(): string
    {
        return CharityEntity::class;
    }

    protected function defineFields(): FieldCollection
    {
        return new FieldCollection([
            (new IdField('id', 'id'))->addFlags(new PrimaryKey(), new Required()),
            (new TranslatedField('name'))->addFlags(new SearchRanking(SearchRanking::HIGH_SEARCH_RANKING)),
            new TranslatedField('description'),
            new StringField('link', 'link'),
            new StringField('category_link', 'categoryLink'),
            new FkField('logo_id', 'logoId', MediaDefinition::class),
            new ManyToOneAssociationField('logo', 'logo_id', MediaDefinition::class, 'id', false),
            (new ManyToManyAssociationField(
                'products',
                ProductDefinition::class,
                CharityProductDefinition::class,
                'charity_id',
                'product_id'
            ))->addFlags(new RestrictDelete()),
            (new TranslationsAssociationField(
                CharityTranslationDefinition::class,
                'shirtcharity_charity_id',
                'translations',
                'id'
            ))->addFlags(new Required()),
            new TranslatedField('customFields'),
        ]);
    }
}
