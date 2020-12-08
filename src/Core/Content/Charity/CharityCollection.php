<?php declare(strict_types=1);

namespace ShirtCharity\Chairman\Core\Content\Charity;

use Shopware\Core\Framework\DataAbstractionLayer\EntityCollection;

/**
 * @method void               add(CharityEntity $entity)
 * @method void               set(string $key, CharityEntity $entity)
 * @method CharityEntity[]    getIterator()
 * @method CharityEntity[]    getElements()
 * @method CharityEntity|null get(string $key)
 * @method CharityEntity|null first()
 * @method CharityEntity|null last()
 */
class CharityCollection extends EntityCollection
{
    public function getMediaIds(): array
    {
        return $this->fmap(function (CharityEntity $charity) {
            return $charity->getLogoId();
        });
    }

    public function filterByMediaId(string $id): self
    {
        return $this->filter(function (CharityEntity $charity) use ($id) {
            return $charity->getLogoId() === $id;
        });
    }

    public function getApiAlias(): string
    {
        return 'shirtcharity_charity_collection';
    }

    protected function getExpectedClass(): string
    {
        return CharityEntity::class;
    }
}
