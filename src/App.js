import React, { useState, useRef, useCallback, useEffect } from 'react'
import TodoTemplate from './TodoList/TodoTemplate'
import TodoInsert from './TodoList//TodoInsert'
import TodoList from './TodoList//TodoList'
import TodoListClock from './TodoList//TodoListClock'
import Moment from 'react-moment'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import './TodoList/scss/TodoListMain.scss'
import './TodoList/scss/TodoListClock.scss'
import TodoListMain from './TodoList/TodoListMain'

const App = () => {
    return (
        <Router>
          <Switch>
            <Route exact path = "/" component = {TodoListMain} />
          </Switch>
        </Router>
    )
}

export default App