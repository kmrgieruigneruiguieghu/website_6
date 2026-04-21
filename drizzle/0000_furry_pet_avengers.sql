CREATE TABLE `products` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`price` integer NOT NULL,
	`description` text,
	`image_name` text NOT NULL,
	`category` text NOT NULL,
	`is_new` integer DEFAULT false
);
