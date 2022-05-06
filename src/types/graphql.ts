import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Affiliate = {
  __typename?: 'Affiliate';
  id: Scalars['ID'];
  name: Scalars['String'];
  website?: Maybe<Scalars['String']>;
};

export enum AffiliateRole {
  Admin = 'ADMIN',
  Employee = 'EMPLOYEE',
  Member = 'MEMBER'
}

export type CreateAffiliateInput = {
  name: Scalars['String'];
  organizationId: Scalars['ID'];
  website?: InputMaybe<Scalars['String']>;
};

export type CreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Invite = {
  __typename?: 'Invite';
  code: Scalars['String'];
  id: Scalars['ID'];
  type: InviteType;
};

export enum InviteType {
  Affiliate = 'AFFILIATE',
  Organization = 'ORGANIZATION'
}

export type Me = {
  __typename?: 'Me';
  isOrganizationAdmin: Scalars['Boolean'];
  token: Scalars['String'];
  userId: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAffiliate?: Maybe<Affiliate>;
  signIn: Scalars['Boolean'];
  signOut: Scalars['Boolean'];
  signUp: Scalars['Boolean'];
};


export type MutationCreateAffiliateArgs = {
  input: CreateAffiliateInput;
};


export type MutationSignInArgs = {
  email: Scalars['String'];
  organizationId: Scalars['ID'];
  password: Scalars['String'];
};


export type MutationSignUpArgs = {
  email: Scalars['String'];
  options?: InputMaybe<SignUpOptions>;
  password: Scalars['String'];
};

export type Organization = {
  __typename?: 'Organization';
  affiliates?: Maybe<Array<Maybe<Affiliate>>>;
  id: Scalars['ID'];
};

export enum OrganizationRole {
  Admin = 'ADMIN'
}

export type Query = {
  __typename?: 'Query';
  affiliates?: Maybe<Array<Maybe<Affiliate>>>;
  me?: Maybe<Me>;
};


export type QueryAffiliatesArgs = {
  organizationId: Scalars['ID'];
};

export type SignUpOptions = {
  createOrganization?: InputMaybe<Scalars['Boolean']>;
  inviteCode?: InputMaybe<Scalars['String']>;
};

export type TokenOutput = {
  __typename?: 'TokenOutput';
  token: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  affiliateUserRoles: Array<Maybe<AffiliateRole>>;
  email: Scalars['String'];
  id: Scalars['ID'];
  organizationUserRoles: Array<Maybe<OrganizationRole>>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Affiliate: ResolverTypeWrapper<Affiliate>;
  AffiliateRole: AffiliateRole;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateAffiliateInput: CreateAffiliateInput;
  CreateUserInput: CreateUserInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Invite: ResolverTypeWrapper<Invite>;
  InviteType: InviteType;
  Me: ResolverTypeWrapper<Me>;
  Mutation: ResolverTypeWrapper<{}>;
  Organization: ResolverTypeWrapper<Organization>;
  OrganizationRole: OrganizationRole;
  Query: ResolverTypeWrapper<{}>;
  SignUpOptions: SignUpOptions;
  String: ResolverTypeWrapper<Scalars['String']>;
  TokenOutput: ResolverTypeWrapper<TokenOutput>;
  User: ResolverTypeWrapper<User>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Affiliate: Affiliate;
  Boolean: Scalars['Boolean'];
  CreateAffiliateInput: CreateAffiliateInput;
  CreateUserInput: CreateUserInput;
  ID: Scalars['ID'];
  Invite: Invite;
  Me: Me;
  Mutation: {};
  Organization: Organization;
  Query: {};
  SignUpOptions: SignUpOptions;
  String: Scalars['String'];
  TokenOutput: TokenOutput;
  User: User;
}>;

export type AffiliateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Affiliate'] = ResolversParentTypes['Affiliate']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InviteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Invite'] = ResolversParentTypes['Invite']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['InviteType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Me'] = ResolversParentTypes['Me']> = ResolversObject<{
  isOrganizationAdmin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createAffiliate?: Resolver<Maybe<ResolversTypes['Affiliate']>, ParentType, ContextType, RequireFields<MutationCreateAffiliateArgs, 'input'>>;
  signIn?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationSignInArgs, 'email' | 'organizationId' | 'password'>>;
  signOut?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  signUp?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationSignUpArgs, 'email' | 'options' | 'password'>>;
}>;

export type OrganizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Organization'] = ResolversParentTypes['Organization']> = ResolversObject<{
  affiliates?: Resolver<Maybe<Array<Maybe<ResolversTypes['Affiliate']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  affiliates?: Resolver<Maybe<Array<Maybe<ResolversTypes['Affiliate']>>>, ParentType, ContextType, RequireFields<QueryAffiliatesArgs, 'organizationId'>>;
  me?: Resolver<Maybe<ResolversTypes['Me']>, ParentType, ContextType>;
}>;

export type TokenOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenOutput'] = ResolversParentTypes['TokenOutput']> = ResolversObject<{
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  affiliateUserRoles?: Resolver<Array<Maybe<ResolversTypes['AffiliateRole']>>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  organizationUserRoles?: Resolver<Array<Maybe<ResolversTypes['OrganizationRole']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Affiliate?: AffiliateResolvers<ContextType>;
  Invite?: InviteResolvers<ContextType>;
  Me?: MeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Organization?: OrganizationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  TokenOutput?: TokenOutputResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;

