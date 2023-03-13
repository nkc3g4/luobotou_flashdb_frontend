import { createClient } from '@urql/vue';


const client = createClient({
  url: 'http://alley.luobotou.org:8585/graphql',
});
