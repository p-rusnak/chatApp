import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { createStore } from 'redux'

import Chat from './js/components/Chat'
import Home from './js/components/Home'

import { hashHistory } from 'react-router'
import { BrowserRouter as Router, Link, Route, Miss } from 'react-router-dom'

const app = document.getElementById("app");
ReactDOM.render(
  <Chat />
, app);

