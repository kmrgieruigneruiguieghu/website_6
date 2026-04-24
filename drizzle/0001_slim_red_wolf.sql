PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_products` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`price` integer NOT NULL,
	`image_name` text DEFAULT 'pizza_1.png' NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_products`("id", "title", "description", "price", "image_name") SELECT "id", "title", "description", "price", "image_name" FROM `products`;--> statement-breakpoint
DROP TABLE `products`;--> statement-breakpoint
ALTER TABLE `__new_products` RENAME TO `products`;--> statement-breakpoint
PRAGMA foreign_keys=ON;