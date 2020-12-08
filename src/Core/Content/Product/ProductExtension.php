<?php declare(strict_types=1);

namespace ShirtCharity\Chairman\Core\Content\Product;

use ShirtCharity\Chairman\Core\Content\Charity\Aggregate\CharityProduct\CharityProductDefinition;
use ShirtCharity\Chairman\Core\Content\Charity\CharityDefinition;
use Shopware\Core\Content\Product\ProductDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\EntityExtension;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\Inherited;
use Shopware\Core\Framework\DataAbstractionLayer\Field\ManyToManyAssociationField;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;

class ProductExtension extends EntityExtension
{
    public function extendFields(FieldCollection $collection): void
    {
        $collection->add(
            (new ManyToManyAssociationField(
                'charities',
                CharityDefinition::class,
                CharityProductDefinition::class,
                'product_id',
                'charity_id'
            ))->addFlags(new Inherited())
        );
    }

    public function getDefinitionClass(): string
    {
        return ProductDefinition::class;
    }
}
