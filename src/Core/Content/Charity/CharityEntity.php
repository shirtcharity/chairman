<?php declare(strict_types=1);

namespace ShirtCharity\Chairman\Core\Content\Charity;

use ShirtCharity\Chairman\Core\Content\Charity\Aggregate\CharityTranslation\CharityTranslationCollection;
use Shopware\Core\Content\Media\MediaEntity;
use Shopware\Core\Content\Product\ProductCollection;
use Shopware\Core\Framework\DataAbstractionLayer\Entity;
use Shopware\Core\Framework\DataAbstractionLayer\EntityIdTrait;

class CharityEntity extends Entity
{
    use EntityIdTrait;

    /**
     * @var string|null
     */
    protected $name;

    /**
     * @var string|null
     */
    protected $description;

    /**
     * @var string|null
     */
    protected $link;

    /**
     * @var string|null
     */
    protected $categoryLink;

    /**
     * @var string|null
     */
    protected $logoId;

    /**
     * @var MediaEntity|null
     */
    protected $logo;

    /**
     * @var ProductCollection|null
     */
    protected $products;

    /**
     * @var CharityTranslationCollection|null
     */
    protected $translations;

    /**
     * @var array|null
     */
    protected $customFields;

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

    public function getLink(): ?string
    {
        return $this->link;
    }

    public function setLink(?string $link): void
    {
        $this->link = $link;
    }

    public function getCategoryLink(): ?string
    {
        return $this->categoryLink;
    }

    public function setCategoryLink(?string $categoryLink): void
    {
        $this->categoryLink = $categoryLink;
    }

    public function getLogoId(): ?string
    {
        return $this->logoId;
    }

    public function setLogoId(?string $logoId): void
    {
        $this->logoId = $logoId;
    }

    public function getLogo(): ?MediaEntity
    {
        return $this->logo;
    }

    public function setLogo(MediaEntity $logo): void
    {
        $this->logo = $logo;
    }

    public function getProducts(): ?ProductCollection
    {
        return $this->products;
    }

    public function setProducts(ProductCollection $products): void
    {
        $this->products = $products;
    }

    public function getTranslations(): ?CharityTranslationCollection
    {
        return $this->translations;
    }

    public function setTranslations(CharityTranslationCollection $translations): void
    {
        $this->translations = $translations;
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
