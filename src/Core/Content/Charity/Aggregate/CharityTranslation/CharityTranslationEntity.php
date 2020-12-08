<?php declare(strict_types=1);

namespace ShirtCharity\Chairman\Core\Content\Charity\Aggregate\CharityTranslation;

use ShirtCharity\Chairman\Core\Content\Charity\CharityEntity;
use Shopware\Core\Framework\DataAbstractionLayer\TranslationEntity;

class CharityTranslationEntity extends TranslationEntity
{
    /**
     * @var string
     */
    protected $charityId;

    /**
     * @var CharityEntity|null
     */
    protected $charity;

    /**
     * @var string|null
     */
    protected $name;

    /**
     * @var string|null
     */
    protected $description;

    /**
     * @var array|null
     */
    protected $customFields;

    public function getCharityId(): string
    {
        return $this->charityId;
    }

    public function setCharityId(string $charityId): void
    {
        $this->charityId = $charityId;
    }

    public function getCharity(): ?CharityEntity
    {
        return $this->charity;
    }

    public function setCharity(CharityEntity $charity): void
    {
        $this->charity = $charity;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): void
    {
        $this->name = $name;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): void
    {
        $this->description = $description;
    }

    public function getCustomFields(): ?array
    {
        return $this->customFields;
    }

    public function setCustomFields(?array $customFields): void
    {
        $this->customFields = $customFields;
    }
}
