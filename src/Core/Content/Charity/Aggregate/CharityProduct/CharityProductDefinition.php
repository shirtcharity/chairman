<?php declare(strict_types=1);

namespace ShirtCharity\Chairman\Core\Content\Charity\Aggregate\CharityProduct;

use ShirtCharity\Chairman\Core\Content\Charity\CharityDefinition;
use Shopware\Core\Content\Product\ProductDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\Field\CreatedAtField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\FkField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\PrimaryKey;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\Required;
use Shopware\Core\Framework\DataAbstractionLayer\Field\ManyToOneAssociationField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\ReferenceVersionField;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;
use Shopware\Core\Framework\DataAbstractionLayer\MappingEntityDefinition;

class CharityProductDefinition extends MappingEntityDefinition
{
    public function getEntityName(): string
    {
        return 'shirtcharity_charity_product';
    }

    protected function defineFields(): FieldCollection
    {
        return new FieldCollection([
            (new FkField(
                'charity_id',
                'charityId',
                CharityDefinition::class
            ))->addFlags(new PrimaryKey(), new Required()),
            (new FkField(
                'product_id',
                'productId',
                ProductDefinition::class
            ))->addFlags(new PrimaryKey(), new Required()),
            (new ReferenceVersionField(ProductDefinition::class))->addFlags(new PrimaryKey(), new Required()),
            new ManyToOneAssociationField('charity', 'charity_id', CharityDefinition::class),
            new ManyToOneAssociationField('product', 'product_id', ProductDefinition::class),
            new CreatedAtField(),
        ]);
    }
}
