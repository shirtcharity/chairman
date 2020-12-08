<?php declare(strict_types=1);

namespace ShirtCharity\Chairman\Core\Content\Charity\Aggregate\CharityTranslation;

use ShirtCharity\Chairman\Core\Content\Charity\CharityDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\EntityTranslationDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\Field\CustomFields;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\AllowHtml;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\Required;
use Shopware\Core\Framework\DataAbstractionLayer\Field\LongTextField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\StringField;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;

class CharityTranslationDefinition extends EntityTranslationDefinition
{
    public const ENTITY_NAME = 'shirtcharity_charity_translation';

    public function getEntityName(): string
    {
        return self::ENTITY_NAME;
    }

    public function getCollectionClass(): string
    {
        return CharityTranslationCollection::class;
    }

    public function getEntityClass(): string
    {
        return CharityTranslationEntity::class;
    }

    protected function getParentDefinitionClass(): string
    {
        return CharityDefinition::class;
    }

    protected function defineFields(): FieldCollection
    {
        return new FieldCollection([
            (new StringField('name', 'name'))->addFlags(new Required()),
            (new LongTextField('description', 'description'))->addFlags(new AllowHtml()),
            new CustomFields(),
        ]);
    }
}
