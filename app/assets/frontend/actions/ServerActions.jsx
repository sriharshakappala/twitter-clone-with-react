import AppDispatcher from '../dispatcher';
import ActionTypes from '../constants';

export default {
  receivedTweets(rawTweets) {
    console.log(3, 'ServerActions.receivedTweets');
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_TWEETS,
      rawTweets
    })
  },
  receivedOneTweet(rawTweet) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_ONE_TWEET,
      rawTweet
    })
  },
  receivedUsers(rawUsers) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_USERS,
      rawUsers
    })
  }
}


// If the property and value are same in ES6 there is a shortcut to represent it in object
// Example:
// 'rawTweets: rawTweets' can be represented as just 'rawTweets'
