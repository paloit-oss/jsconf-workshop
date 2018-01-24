// import { sendChatMsg, showSendMsgError } from 'actions'
//
// const postData = ({ value: message, username }) => ({
//   method: 'POST',
//   body: JSON.stringify({ username, message }),
//   headers: new Headers({
//     'Content-Type': 'application/json'
//   })
// })
//
// const restMiddleware = ({ dispatch }) => next => action => {
//   const restConfig = {
//     [sendChatMsg]: () =>
//       fetch('https://paloit.herokuapp.com/message', postData(action.payload))
//         .then(res => res.json())
//         .then(res => res.status === 'Error' && dispatch(showSendMsgError({ message: res.message })))
//         .catch(err => console.log(err))
//   }
//   restConfig[action.type] && restConfig[action.type]()
//   return next(action)
// }
//
// export default restMiddleware
