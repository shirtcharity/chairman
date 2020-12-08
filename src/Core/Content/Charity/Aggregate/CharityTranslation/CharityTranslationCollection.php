<?php declare(strict_types=1);

namespace ShirtCharity\Chairman\Core\Content\Charity\Aggregate\CharityTranslation;

use Shopware\Core\Framework\DataAbstractionLayer\EntityCollection;

/**
 * @method void                          add(CharityTranslationEntity $entity)
 * @method void                          set(string $key, CharityTranslationEntity $entity)
 * @method CharityTranslationEntity[]    getIterator()
 * @method CharityTranslationEntity[]    getElements()
 * @method CharityTranslationEntity|null get(string $key)
 * @method CharityTranslationEntity|null first()
 * @method CharityTranslationEntity|null last()
 */
class CharityTranslationCollection extends EntityCollection
{
    public function getCharityIds(): array
    {
        return $this->fmap(function (CharityTranslationEntity $charityTranslation) {
            return $charityTranslation->getCharityId();
        });
    }

    public function filterByCharityId(string $id): self
    {
        return $this->filter(function (CharityTranslationEntity $charityTranslation) use ($id) {
            return $charityTranslation->getCharityId() === $id;
        });
    }

    public function getLanguageIds(): array
    {
        return $this->fmap(function (CharityTranslationEntity $charityTranslation) {
            return $charityTranslation->getLanguageId();
        });
    }

    public function filterByLanguageId(string $id): self
    {
        return $this->filter(function (CharityTranslationEntity $charityTranslation) use ($id) {
            return $charityTranslation->getLanguageId() === $id;
        });
    }

    public function getApiAlias(): string
    {
        return 'shirtcharity_charity_translation_collection';
    }

    protected function getExpectedClass(): string
    {
        return CharityTranslationEntity::class;
    }
}
