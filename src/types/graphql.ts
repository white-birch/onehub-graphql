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
  users?: Maybe<Array<Maybe<User>>>;
  website?: Maybe<Scalars['String']>;
};

export enum AffiliateRole {
  Admin = 'ADMIN',
  Employee = 'EMPLOYEE',
  Member = 'MEMBER'
}

export type CreateAffiliateInput = {
  name: Scalars['String'];
  website?: InputMaybe<Scalars['String']>;
};

export type CreatePortalInput = {
  affiliate: CreateAffiliateInput;
  user: CreateUserInput;
};

export type CreatePortalOutput = {
  __typename?: 'CreatePortalOutput';
  portal: Portal;
  token: Scalars['String'];
};

export type CreateTrackInput = {
  affiliateId: Scalars['ID'];
  name: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPortal: CreatePortalOutput;
  createTrack: Track;
  signIn: Scalars['String'];
};


export type MutationCreatePortalArgs = {
  input: CreatePortalInput;
};


export type MutationCreateTrackArgs = {
  input: CreateTrackInput;
};


export type MutationSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Portal = {
  __typename?: 'Portal';
  affiliates?: Maybe<Array<Maybe<Affiliate>>>;
  id: Scalars['ID'];
};

export enum PortalRole {
  Admin = 'ADMIN'
}

export type Query = {
  __typename?: 'Query';
  affiliate?: Maybe<Affiliate>;
  portals?: Maybe<Array<Maybe<Portal>>>;
};

export type Track = {
  __typename?: 'Track';
  affiliateId: Scalars['ID'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  affiliateUserRoles: Array<Maybe<AffiliateRole>>;
  email: Scalars['String'];
  id: Scalars['ID'];
  portalUserRoles: Array<Maybe<PortalRole>>;
};



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
export type ResolversTypes = {
  Affiliate: ResolverTypeWrapper<Affiliate>;
  AffiliateRole: AffiliateRole;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateAffiliateInput: CreateAffiliateInput;
  CreatePortalInput: CreatePortalInput;
  CreatePortalOutput: ResolverTypeWrapper<CreatePortalOutput>;
  CreateTrackInput: CreateTrackInput;
  CreateUserInput: CreateUserInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
  Portal: ResolverTypeWrapper<Portal>;
  PortalRole: PortalRole;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Track: ResolverTypeWrapper<Track>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Affiliate: Affiliate;
  Boolean: Scalars['Boolean'];
  CreateAffiliateInput: CreateAffiliateInput;
  CreatePortalInput: CreatePortalInput;
  CreatePortalOutput: CreatePortalOutput;
  CreateTrackInput: CreateTrackInput;
  CreateUserInput: CreateUserInput;
  ID: Scalars['ID'];
  Mutation: {};
  Portal: Portal;
  Query: {};
  String: Scalars['String'];
  Track: Track;
  User: User;
};

export type AffiliateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Affiliate'] = ResolversParentTypes['Affiliate']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatePortalOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreatePortalOutput'] = ResolversParentTypes['CreatePortalOutput']> = {
  portal?: Resolver<ResolversTypes['Portal'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createPortal?: Resolver<ResolversTypes['CreatePortalOutput'], ParentType, ContextType, RequireFields<MutationCreatePortalArgs, 'input'>>;
  createTrack?: Resolver<ResolversTypes['Track'], ParentType, ContextType, RequireFields<MutationCreateTrackArgs, 'input'>>;
  signIn?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationSignInArgs, 'email' | 'password'>>;
};

export type PortalResolvers<ContextType = any, ParentType extends ResolversParentTypes['Portal'] = ResolversParentTypes['Portal']> = {
  affiliates?: Resolver<Maybe<Array<Maybe<ResolversTypes['Affiliate']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  affiliate?: Resolver<Maybe<ResolversTypes['Affiliate']>, ParentType, ContextType>;
  portals?: Resolver<Maybe<Array<Maybe<ResolversTypes['Portal']>>>, ParentType, ContextType>;
};

export type TrackResolvers<ContextType = any, ParentType extends ResolversParentTypes['Track'] = ResolversParentTypes['Track']> = {
  affiliateId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  affiliateUserRoles?: Resolver<Array<Maybe<ResolversTypes['AffiliateRole']>>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  portalUserRoles?: Resolver<Array<Maybe<ResolversTypes['PortalRole']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Affiliate?: AffiliateResolvers<ContextType>;
  CreatePortalOutput?: CreatePortalOutputResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Portal?: PortalResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Track?: TrackResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

