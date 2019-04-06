import { mergeResolvers } from 'merge-graphql-schemas';
import hospitalResolvers  from './hospital';
import authResolvers from './auth';
import userResolvers from './user';

const Resolvers = [hospitalResolvers, authResolvers, userResolvers];

export default mergeResolvers(Resolvers);