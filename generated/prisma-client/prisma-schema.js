module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.32.2). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateConversationFragment {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type ConversationFragment {
  id: ID!
  added: DateTime!
  message: String!
  reply: String
  sessionID: String!
}

type ConversationFragmentConnection {
  pageInfo: PageInfo!
  edges: [ConversationFragmentEdge]!
  aggregate: AggregateConversationFragment!
}

input ConversationFragmentCreateInput {
  id: ID
  message: String!
  reply: String
  sessionID: String!
}

type ConversationFragmentEdge {
  node: ConversationFragment!
  cursor: String!
}

enum ConversationFragmentOrderByInput {
  id_ASC
  id_DESC
  added_ASC
  added_DESC
  message_ASC
  message_DESC
  reply_ASC
  reply_DESC
  sessionID_ASC
  sessionID_DESC
}

type ConversationFragmentPreviousValues {
  id: ID!
  added: DateTime!
  message: String!
  reply: String
  sessionID: String!
}

type ConversationFragmentSubscriptionPayload {
  mutation: MutationType!
  node: ConversationFragment
  updatedFields: [String!]
  previousValues: ConversationFragmentPreviousValues
}

input ConversationFragmentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ConversationFragmentWhereInput
  AND: [ConversationFragmentSubscriptionWhereInput!]
  OR: [ConversationFragmentSubscriptionWhereInput!]
  NOT: [ConversationFragmentSubscriptionWhereInput!]
}

input ConversationFragmentUpdateInput {
  message: String
  reply: String
  sessionID: String
}

input ConversationFragmentUpdateManyMutationInput {
  message: String
  reply: String
  sessionID: String
}

input ConversationFragmentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  added: DateTime
  added_not: DateTime
  added_in: [DateTime!]
  added_not_in: [DateTime!]
  added_lt: DateTime
  added_lte: DateTime
  added_gt: DateTime
  added_gte: DateTime
  message: String
  message_not: String
  message_in: [String!]
  message_not_in: [String!]
  message_lt: String
  message_lte: String
  message_gt: String
  message_gte: String
  message_contains: String
  message_not_contains: String
  message_starts_with: String
  message_not_starts_with: String
  message_ends_with: String
  message_not_ends_with: String
  reply: String
  reply_not: String
  reply_in: [String!]
  reply_not_in: [String!]
  reply_lt: String
  reply_lte: String
  reply_gt: String
  reply_gte: String
  reply_contains: String
  reply_not_contains: String
  reply_starts_with: String
  reply_not_starts_with: String
  reply_ends_with: String
  reply_not_ends_with: String
  sessionID: String
  sessionID_not: String
  sessionID_in: [String!]
  sessionID_not_in: [String!]
  sessionID_lt: String
  sessionID_lte: String
  sessionID_gt: String
  sessionID_gte: String
  sessionID_contains: String
  sessionID_not_contains: String
  sessionID_starts_with: String
  sessionID_not_starts_with: String
  sessionID_ends_with: String
  sessionID_not_ends_with: String
  AND: [ConversationFragmentWhereInput!]
  OR: [ConversationFragmentWhereInput!]
  NOT: [ConversationFragmentWhereInput!]
}

input ConversationFragmentWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

type Mutation {
  createConversationFragment(data: ConversationFragmentCreateInput!): ConversationFragment!
  updateConversationFragment(data: ConversationFragmentUpdateInput!, where: ConversationFragmentWhereUniqueInput!): ConversationFragment
  updateManyConversationFragments(data: ConversationFragmentUpdateManyMutationInput!, where: ConversationFragmentWhereInput): BatchPayload!
  upsertConversationFragment(where: ConversationFragmentWhereUniqueInput!, create: ConversationFragmentCreateInput!, update: ConversationFragmentUpdateInput!): ConversationFragment!
  deleteConversationFragment(where: ConversationFragmentWhereUniqueInput!): ConversationFragment
  deleteManyConversationFragments(where: ConversationFragmentWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  conversationFragment(where: ConversationFragmentWhereUniqueInput!): ConversationFragment
  conversationFragments(where: ConversationFragmentWhereInput, orderBy: ConversationFragmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ConversationFragment]!
  conversationFragmentsConnection(where: ConversationFragmentWhereInput, orderBy: ConversationFragmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ConversationFragmentConnection!
  node(id: ID!): Node
}

type Subscription {
  conversationFragment(where: ConversationFragmentSubscriptionWhereInput): ConversationFragmentSubscriptionPayload
}
`
      }
    