// const exampleMiddleware = store => next => action => next(action)

// const socketMiddleware = ({ listener, emitter }) => store => {
//   listener(store)
//   return next => action => next(action) && emitter(action)
// }

export default socketMiddleware
