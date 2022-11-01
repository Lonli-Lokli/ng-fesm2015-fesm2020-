import { Configuration } from 'webpack';

export default {
  resolve: {
    conditionNames: ['es2020', 'es2015', '...'],
    // conditionNames: ['es2015', '...'],
  },
} as Configuration;
