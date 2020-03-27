
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class AuthorInput {
    firstName?: string;
    lastName?: string;
    dob?: number;
}

export class Author {
    id?: string;
    firstName?: string;
    lastName?: string;
    dob?: number;
}

export abstract class IMutation {
    abstract createAuthor(author: AuthorInput): Author | Promise<Author>;
}

export abstract class IQuery {
    abstract author(authorID: string): Author | Promise<Author>;

    abstract hello(): string | Promise<string>;
}
