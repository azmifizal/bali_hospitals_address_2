import { mergeResolvers } from 'merge-graphql-schemas';
import hospitalResolvers  from './hospital';

const Resolvers = [hospitalResolvers];

export default mergeResolvers(Resolvers);