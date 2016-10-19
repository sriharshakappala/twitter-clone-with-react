import AppDispatcher from '../dispatcher';
import ActionTypes from '../constants';

export default {
  receivedTweets(rawTweets) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_TWEETS,
      rawTweets
    })
  }
}


// If the property and value are same in ES6 there is a shortcut to represent it in object
// Example:
// 'rawTweets: rawTweets' can be represented as just 'rawTweets'
