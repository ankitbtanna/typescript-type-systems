import { freeze, thaw } from './frozen/frozen';

const thing = {};
const frozen = freeze(thing);
const thawed = thaw(thing);