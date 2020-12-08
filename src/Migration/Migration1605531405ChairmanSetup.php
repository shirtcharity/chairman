<?php declare(strict_types=1);

namespace ShirtCharity\Chairman\Migration;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Migration\InheritanceUpdaterTrait;
use Shopware\Core\Framework\Migration\MigrationStep;

class Migration1605531405ChairmanSetup extends MigrationStep
{
    use InheritanceUpdaterTrait;

    public function getCreationTimestamp(): int
    {
        return 1605531405;
    }

    public function update(Connection $connection): void
    {
        $connection->executeUpdate('
            CREATE TABLE IF NOT EXISTS `shirtcharity_charity` (
                `id` BINARY(16) NOT NULL,
                `link` VARCHAR(255) COLLATE utf8mb4_unicode_ci NULL,
                `logo_id` BINARY(16) NULL,
                `created_at` DATETIME(3) NOT NULL,
                `updated_at` DATETIME(3) NULL,
                PRIMARY KEY (`id`),
                CONSTRAINT `fk.shirtcharity_charity.logo_id`
                    FOREIGN KEY (`logo_id`)
                    REFERENCES `media` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        ');
        $connection->executeUpdate('
            CREATE TABLE IF NOT EXISTS `shirtcharity_charity_translation` (
                `shirtcharity_charity_id` BINARY(16) NOT NULL,
                `language_id` BINARY(16) NOT NULL,
                `name` VARCHAR(255) COLLATE utf8mb4_unicode_ci NULL,
                `description` LONGTEXT COLLATE utf8mb4_unicode_ci NULL,
                `custom_fields` JSON NULL,
                `created_at` DATETIME(3) NOT NULL,
                `updated_at` DATETIME(3) NULL,
                PRIMARY KEY (`shirtcharity_charity_id`, `language_id`),
                CONSTRAINT `json.shirtcharity_charity_translation.custom_fields`
                    CHECK (JSON_VALID(`custom_fields`)),
                CONSTRAINT `fk.shirtcharity_charity_translation.language_id`
                    FOREIGN KEY (`language_id`)
                    REFERENCES `language` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                CONSTRAINT `fk.shirtcharity_charity_translation.shirtcharity_charity_id`
                    FOREIGN KEY (`shirtcharity_charity_id`)
                    REFERENCES `shirtcharity_charity` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        ');
        $connection->executeUpdate('
            CREATE TABLE IF NOT EXISTS `shirtcharity_charity_product` (
                `charity_id` BINARY(16) NOT NULL,
                `product_id` BINARY(16) NOT NULL,
                `product_version_id` BINARY(16) NOT NULL,
                `created_at` DATETIME(3) NOT NULL,
                PRIMARY KEY (`charity_id`, `product_id`, `product_version_id`),
                CONSTRAINT `fk.shirtcharity_charity_product.charity_id`
                    FOREIGN KEY (`charity_id`)
                    REFERENCES `shirtcharity_charity` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                CONSTRAINT `fk.shirtcharity_charity_product.product_id__product_version_id`
                    FOREIGN KEY (`product_id`, `product_version_id`)
                    REFERENCES `product` (`id`, `version_id`) ON DELETE CASCADE ON UPDATE CASCADE
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        ');
        $this->updateInheritance($connection, 'product', 'charities');
    }

    public function updateDestructive(Connection $connection): void
    {
    }
}
