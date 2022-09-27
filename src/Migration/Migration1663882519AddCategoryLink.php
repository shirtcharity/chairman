<?php declare(strict_types=1);

namespace ShirtCharity\Chairman\Migration;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Migration\MigrationStep;

class Migration1663882519AddCategoryLink extends MigrationStep
{
    public function getCreationTimestamp(): int
    {
        return 1663882519;
    }

    public function update(Connection $connection): void
    {
        $connection->executeUpdate('
            ALTER TABLE `shirtcharity_charity`
            ADD COLUMN `category_link` VARCHAR(255) COLLATE utf8mb4_unicode_ci NULL AFTER `link`;
        ');
    }

    public function updateDestructive(Connection $connection): void
    {
    }
}
