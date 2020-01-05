import "reflect-metadata";
import {
  buildSchema,
  Resolver,
  Query,
  ObjectType,
  Field,
  Int,
  ID,
  FieldResolver,
  Root
} from "type-graphql";
import { data } from "../data";
import md5 = require("md5");

@ObjectType()
class Book {
  @Field(() => ID)
  id: string;
  @Field()
  name: string;
  @Field(() => Int)
  numPages: number;
}

@ObjectType()
class Author {
  @Field(() => ID)
  id: string;
  @Field()
  name: string;
  @Field()
  md5: string;
  @Field()
  company: string;
  @Field(() => [Book])
  books: Book[];
}

@Resolver(Author)
class Res {
  @FieldResolver()
  md5(@Root() root: Author) {
    return md5(root.name);
  }
  @Query(() => [Author])
  authors() {
    return data;
  }
}

export function createTypeGraphQLSchema() {
  return buildSchema({
    resolvers: [Res]
  });
}
