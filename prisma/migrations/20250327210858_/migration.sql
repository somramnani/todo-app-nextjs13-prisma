/*
  Warnings:

  - You are about to drop the `lists` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `lists`;

-- CreateTable
CREATE TABLE `todo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `todo_item` VARCHAR(191) NOT NULL,
    `createDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateDate` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
