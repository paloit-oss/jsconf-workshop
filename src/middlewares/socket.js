// const exampleMiddleware = store => next => action => next(action)

// const socketMiddleware = ({ listener, emitter }) => store => {
//   listener(store)
//   return next => action => {
//     emitter(action)
//     return next(action)
//   }
// }

export default socketMiddleware
