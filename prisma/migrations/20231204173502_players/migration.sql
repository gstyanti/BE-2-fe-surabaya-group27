-- CreateTable
CREATE TABLE `Players` (
    `id_news` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(191) NOT NULL,
    `sub_judul` VARCHAR(191) NOT NULL,
    `link` VARCHAR(191) NOT NULL,
    `bio` VARCHAR(191) NULL,

    PRIMARY KEY (`id_news`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
