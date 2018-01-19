export const pipe = (mutators, state) => state.withMutations(s => mutate(mutators, s))
const mutate = (mutators, state) => mutators.reduce((s, mutator) => mutator(s), state)
